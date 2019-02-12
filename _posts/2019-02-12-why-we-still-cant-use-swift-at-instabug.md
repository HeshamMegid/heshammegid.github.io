---
title: Why We Still Can't Use Swift at Instabug
date: 2019-02-12T09:30:10+00:00
author: hesham
layout: post
categories: iOS
---

A couple of years ago, I wrote [a blog post](https://instabug.com/blog/no-swift-instabug/) on why the iOS team at Instabug doesn’t use Swift and can’t anytime soon.

The gist of it is that we have to wait till Swift has a stable ABI so we wouldn’t force apps that don’t use Swift to include the Swift runtime in their app bundles. As of Swift 5, Swift is ABI stable on Apple platforms, however, we still can’t ship Swift code in our SDK.

The reason behind that is module stability, which Swift doesn’t have yet. I haven’t mentioned module stability in my original blog post as I thought it’s going to come with ABI stability anyway, but this wasn’t the case.

So what’s module stability? This excerpt from the [Swift blog](https://swift.org/blog/abi-stability-and-more/) has the simplest explanation:

> ABI stability is about mixing versions of Swift at/run time./What about compile time? Right now, Swift uses an opaque archive format called “swiftmodule” to describe the interface of a library, such as a framework “MagicKit”, rather than manually-written header files. However, the “swiftmodule” format is also tied to the current version of the compiler, which means an app developer can’t `import MagicKit` if MagicKit was built with a different version of Swift. That is, the app developer and the library author have to be using the same version of the compiler.

So if, for example, your app uses Swift 5.1 (which doesn’t exist yet), and you use an Instabug SDK that has been compiled with Swift 5, your app wouldn’t compile.

Until Swift has module stability, we’re perfectly happy with having a 100% Objective-C code. While Swift is the new (ish) and shiny thing, and there are many benefits in switching to it, there’s nothing in Objective-C stopping us from shipping high-quality code.