---
title: Swift 5, Module Stability and Binary Frameworks
date: 2019-02-12T09:30:10+00:00
author: hesham
layout: post
categories: iOS
---

Since the introduction of Swift in 2014 and over five major releases, it has matured a lot. The tooling is better and many teams have either completely switched to Swift and away from Objective-C, or are mixing between both with all new code being written in Swift.

Swift leverages programming patterns and language features that encourage writing safer code that’s also easier to understand and maintain, which sounds amazing to anyone using the 35-year-old alternative, Objective-C.

## ABI Stability
Up until Swift 5, the lack of ABI stability meant that to be able to use Swift in your app it was necessary to ship the Swift runtime libraries with the app bundle. This added around 5 MB to the size of your app. While not an insignificant bump in size for smaller apps, most apps have accepted this tax in order to be able to use Swift.

Starting from Swift 5, Swift’s ABI is stable, meaning that the Swift runtime libraries can be shipped as part of the operating system, eliminating the need to ship it with every single app.

## What About Binary Frameworks
People that ship binary frameworks rather than apps, including us at Instabug, were eager to start using Swift. To be able to distribute binary frameworks in Swift, ABI stability is necessary but not sufficient. The other component needed is module stability.

So what’s module stability? This excerpt from the [Swift blog](https://swift.org/blog/abi-stability-and-more/) explains it:

> ABI stability is about mixing versions of Swift at _run time_. What about compile time? Right now, Swift uses an opaque archive format called “swiftmodule” to describe the interface of a library, such as a framework “MagicKit”, rather than manually-written header files. However, the “swiftmodule” format is also tied to the current version of the compiler, which means an app developer can’t `import MagicKit` if MagicKit was built with a different version of Swift. That is, the app developer and the library author have to be using the same version of the compiler.

Module stability isn’t available in Swift 5 and is currently under active development. So that means we can’t ship Swift binary frameworks? Well, not exactly.

A `swiftmodule` file contains the compiler’s representation of the /public/ APIs of a framework, which is used when compiling client code that uses that framework.

This means that binary frameworks that are purely written in Swift and have to expose their public APIs using the `swiftmodule` format are still not possible. 

## Using Objective-C as the Interface
We thought about using Swift internally in our code, and having an Objective-C wrapper around it that acts as the interface. This theoretically should work, removing the need to have `swiftmodule` interface.

We were not sure if this is actually possible and safe to do though, so we asked Jordan Rose, an Apple engineer working on Swift.

![question-to-jrose](/images/ct0yVGXrg4Yv7Jxos7Ck.png)

And he confirmed that this is actually possible.

![answer-from-jrose](/images/dNdgCtgkbBXmmeWx2bI9.png)

So we’re going to do exactly that! 🎉

## Conclusion
With Swift 5, it’s not possible yet to ship binary frameworks that are purely written in Swift, but shipping frameworks that contain Swift with an Objective-C wrapper as an interface is possible and will be forward compatible with future versions of Swift.

We love Objective-C and it has served us very well during all those years, but we’re excited to finally start using Swift!
