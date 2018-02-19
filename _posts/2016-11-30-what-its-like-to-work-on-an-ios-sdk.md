---
id: 872
title: What it’s Like to Work on an iOS SDK
date: 2016-11-30T14:43:38+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=872
permalink: /2016/11/30/what-its-like-to-work-on-an-ios-sdk/
dsq_thread_id:
  - "5343495778"
categories:
  - iOS
---
Ever since I started developing for iOS, I have been working exclusively on mobile apps. I didn’t have any real experience shipping an SDK, other than [HMSegmentedControl](https://github.com/HeshamMegid/HMSegmentedControl/), which doesn’t really count as an SDK.

I recently joined [Instabug’s](https://instabug.com/) iOS team where we build an SDK for bug reporting and in-app feedback, and I was reflecting on how the experience of working on an SDK is different from working on an app that ships to the App Store.

### Crashes

We all work very hard and use a plethora of tools to make sure our code doesn’t crash, but at the end of the day, you know that when you finally ship your app there are going to be some crashes, which will get reported to you through your crash reporting tool of choice, you’ll fix them, ship an update, and life goes on.

That’s not how you feel though when you work on an SDK, specially one that helps you do bug and crash reporting. It would be very ironic if our SDK is the reason your app crashed. So making sure our code doesn’t crash is usually a much more stressful endeavor that it is with when developing apps.

### Debugging Weird Bugs

We’ve all seen that bug that only happens in very specific conditions and only to a small percentage of users. Getting that kind of bugs in your apps is not fun. Getting it in an SDK that’s being used by another app that has code you cannot see or have any knowledge of what it does is a totally different ordeal.

### Stricter Constraints

Developing an SDK means we have much more constraints compared to an app. Admittedly, some of these constraints are self-imposed.

#### Dependencies

One of those biggest constraints is using as little dependencies as possible. This means no third party dependencies at all in our code, and also only using frameworks from Apple that are absolutely essential to what we’re doing to keep our SDK as lightweight as possible.

#### Integration Steps

We want it to be super easy to start using Instabug, so we make an effort to keep the steps you have to do to integrate our SDK into your project as simple as possible.

For example, we avoid asking developers to add any extra build settings to be able to use Instabug. Since we ship a static framework, this means we can’t do things like using Objective-C categories since that requires adding an additional linker flag.

#### Supporting Older Versions of iOS

When building apps, we have the luxury of deciding when to drop support for older versions of iOS, or to simply follow the common wisdom of only supporting the current version and one before that.

Things aren’t that simple though when building an SDK. If a big percentage of apps using our SDK are still supporting older versions of iOS, then we have to support them too. We only dropped support for iOS 6 a couple of months ago.

#### Framework Size

When developing an app, you do an effort to keep the download size at a reasonable number, and the last thing you want is for your download size to double because of an SDK you use.

That means we have to think long and hard about resources we add into our SDK to make sure the size we add to your app is minimal.

### Building a UI that Works for All Apps

Every app has a unique UI, and that’s something we have to keep in mind when building Instabug’s SDK UI. Our UI has to be good-looking, yet vanilla enough that it doesn’t have a unique identity that’s different from your app. It also has to be completely customizable so developers could give it a similar feel to their app, and that is sometimes a hard balance to strike.

### It’s Freaking Awesome

Working with all those constraints and limitations ends up being a fun challenge. And at the end of the day, we get to ship code that runs on millions of devices everyday. Who would complain?