---
id: 369
title: Lookup a Contact Name Using Phone Number in ABAddressBook
date: 2012-10-18T15:49:06+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=369
permalink: /2012/10/18/lookup-a-contact-name-using-phone-number-in-abaddressbook/
dsq_thread_id:
  - "890333215"
wp-syntax-cache-content:
  - ""
categories:
  - iOS
---
I needed the ability to lookup the iOS address book using a phone number, and get the contact name associated with that number. I came up with the solution below which does the job but I haven&#8217;t tested its performance on address books with a large number of contacts.

```
+ (NSString *)findNameForContactWithPhoneNumber:(NSString *)phoneNumber {
    ABAddressBookRef addressBook = ABAddressBookCreate();

    // Get all contacts in the addressbook
	NSArray *allPeople = (__bridge NSArray *)ABAddressBookCopyArrayOfAllPeople(addressBook);

	for (id person in allPeople) {
        // Get all phone numbers of a contact
        ABMultiValueRef phoneNumbers = ABRecordCopyValue((__bridge ABRecordRef)(person), kABPersonPhoneProperty);

        // If the contact has multiple phone numbers, iterate on each of them
        for (int i = 0; i &lt; ABMultiValueGetCount(phoneNumbers); i++) {
            NSString *phone = (__bridge_transfer NSString*)ABMultiValueCopyValueAtIndex(phoneNumbers, i);

            // Remove all formatting symbols that might be in both phone number being compared
            NSCharacterSet *toExclude = [NSCharacterSet characterSetWithCharactersInString:@"/.()- "];
            phone = [[phone componentsSeparatedByCharactersInSet:toExclude] componentsJoinedByString: @""];
            phoneNumber = [[phoneNumber componentsSeparatedByCharactersInSet:toExclude] componentsJoinedByString: @""];

            if ([phone isEqualToString:phoneNumber]) {
                NSString *firstName = (__bridge_transfer NSString*)ABRecordCopyValue((__bridge ABRecordRef)(person), kABPersonFirstNameProperty);
                NSString *lastName = (__bridge_transfer NSString*)ABRecordCopyValue((__bridge ABRecordRef)(person), kABPersonLastNameProperty);

                return [NSString stringWithFormat:@"%@ %@", firstName, lastName];
            }
        }
    }

    return nil;
}
```

Please leave a comment if you come up with a more efficient way to do it.

#### Update

The method above proved to be ambitious but rubbish. Its performance is really bad with large address books specially when you are looking up multiple phone numbers. I've written a much more efficient way using NSPredicate to do the same thing but much faster. I'm also using Grand Central Dispatch to copy the contacts from the address book only once instead of doing it every time the method is called.

```
+ (NSString *)findNameForContactWithPhoneNumber:(NSString *)phoneNumber {
    static NSMutableArray *contacts = nil;
    static dispatch_once_t onceToken;

    dispatch_once(&onceToken, ^{
        contacts = [[NSMutableArray alloc] init];
        ABAddressBookRef addressBook = ABAddressBookCreate();
        // Get all contacts from the address book
        NSArray *allPeople = (__bridge NSArray *)ABAddressBookCopyArrayOfAllPeople(addressBook);

        for (id person in allPeople) {
            Contact *contact = [[Contact alloc] init];

            NSString *firstName = (__bridge_transfer NSString*)ABRecordCopyValue((__bridge ABRecordRef)(person), kABPersonFirstNameProperty);
            NSString *lastName = (__bridge_transfer NSString*)ABRecordCopyValue((__bridge ABRecordRef)(person), kABPersonLastNameProperty);

            [contact setName:[NSString stringWithFormat:@"%@ %@", firstName, lastName]];
            NSMutableArray *tempArray = [[NSMutableArray alloc] init];

            // Get all phone numbers of a contact
            ABMultiValueRef phoneNumbers = ABRecordCopyValue((__bridge ABRecordRef)(person), kABPersonPhoneProperty);

            // If the contact has multiple phone numbers, iterate on each of them
            NSInteger phoneNumberCount = ABMultiValueGetCount(phoneNumbers);
            for (int i = 0; i &lt; phoneNumberCount; i++) {
                NSString *phoneNumberFromAB = [(__bridge_transfer NSString*)ABMultiValueCopyValueAtIndex(phoneNumbers, i) unformattedPhoneNumber];
                [tempArray addObject:phoneNumberFromAB];
            }
            [contact setNumbers:tempArray];
            [contacts addObject:contact];
        }
        CFRelease(addressBook);
    });

    NSPredicate *predicate = [NSPredicate predicateWithFormat:@"numbers contains %@", phoneNumber];
    NSArray *filteredArray = [contacts filteredArrayUsingPredicate:predicate];

    return [(Contact *)[filteredArray lastObject] name];
}
```

I copy the contacts from the address book into an array of Contact objects which look like this:

```
@interface Contact : NSObject

@property (nonatomic, strong) NSString *name;
@property (nonatomic, strong) NSArray *numbers;

@end
```

And I use a category on NSString to get an unformatted version of the phone number:

```
@interface NSString (PhoneAdditions)

- (NSString *)unformattedPhoneNumber;

@end

@implementation NSString (PhoneAdditions)

- (NSString *)unformattedPhoneNumber {
    NSCharacterSet *toExclude = [NSCharacterSet characterSetWithCharactersInString:@"/.()- "];
    return [[self componentsSeparatedByCharactersInSet:toExclude] componentsJoinedByString: @""];
}

@end
```

#### Update 2

I've updated the code to support new authorisation in iOS 6, migrated it to ARC and added a method to get the photo of the contact. I've also moved the code to a [GitHub Gist](https://gist.github.com/4701741/) for easier maintenance.
