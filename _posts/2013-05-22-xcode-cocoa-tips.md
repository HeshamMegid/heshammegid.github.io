---
id: 526
title: 'Xcode & Cocoa Tips'
date: 2013-05-22T14:59:58+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=526
permalink: /2013/05/22/xcode-cocoa-tips/
dsq_thread_id:
  - "1306684263"
categories:
  - iOS
---
This is a set of random Xcode & Cocoa related tips I wrote while doing code reviews for other developers. Some of them might seem trivial or really obvious but you will be surprised by how many developers miss them.

  * **Don&#8217;t abuse the app delegate**: The `UIApplicationDelegate` has one role: it&#8217;s responsible for handling events related to the lifecycle of your application. Don&#8217;t abuse it by putting networking code or UI code there.

  * **Remove unnecessary boilerplate code**: When you create a new file Xcode will add some boilerplate code and method stubs, such as an empty `initWithNibName:bundle` implementation and unused `UIApplicationDelegate` methods. If you are not going to use these methods just remove them to keep your code clean.

  * **Keep project folder organized**: Xcode is messy when it comes to the project folder. You will end up with a big folder that has classes of all sorts, images and other resources all in the same place. To avoid this always organize your folders by creating subfolders manually in Finder and placing your classes/resources in them, then drag the files to Xcode and uncheck `Copy items into destination group's folder (if needed)`.

  * **Avoid using preprocessor macros for constant strings**: Preprocessor macros have their uses, but using them as static strings isn&#8217;t one of them. If you need static strings, the best practice is to declare a static NSString in your header file: `extern NSString *const kFoo;` and then set its value in the implementation file: `NSString *const kFoo = @"foo"`.

  * **Model-specific constants do not belong to a global constants file**: If you have a model (i.e `User`) that has some static strings related to it (i.e `kUsername`), it&#8217;s recommended that you declare them in the model class instead of a global constants file.

  * **There&#8217;s no need to synthesise properties**: Starting from Xcode 4.4 you don&#8217;t need to `@synthesize` properties to create setters and getters. The `@property` in the header file alone is enough for the compiler to generate setters and getters for you.

  * **Don&#8217;t copy and paste code**: Whenever you find yourself copying and pasting code between different classes you are probably doing something wrong, or not doing it in the best possible way. You should consider subclassing the classes you find yourself copying and pasting code between. If you want all your view controllers to have a red background, don&#8217;t copy and paste the code that changes the background to every single view controller. Instead, put that on a `UIViewController` subclass and use it as a base class for all your view controllers.

  * **Write meaningful NSLogs**: NSLog is very useful for debugging. If you tend to leave your NSLogs around after committing your code, make sure they are meaningful and that other developers running the app will understand them. Don&#8217;t print things like &#8220;Hereeeeeeeeee&#8221; to the log, chances are even you will forget what those indicated.

  * **Commit a lot**: Make it a habit to commit your code more often. Don&#8217;t work for the entire day then commit the changes you made to 50 different unrelated files at once. Instead, commit each related set of modifications together with a descriptive commit message. This will make it easier for other developers to merge code and for you to track historical changes.