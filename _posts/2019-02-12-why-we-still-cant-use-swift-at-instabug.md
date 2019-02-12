---
title: Swift Module Stability and Instabug
date: 2019-02-12T09:30:10+00:00
author: hesham
layout: post
categories: iOS
---

A couple of years ago, I wrote [a blog post](https://instabug.com/blog/no-swift-instabug/) on why the iOS team at Instabug doesn’t use Swift and can’t anytime soon.

The gist of it is that we have to wait till Swift has a stable ABI so we wouldn’t force apps that don’t use Swift to include the Swift runtime in their app bundles. As of Swift 5, Swift is ABI stable on Apple platforms, however, it still doesn't have module stability.

So what’s module stability? This excerpt from the [Swift blog](https://swift.org/blog/abi-stability-and-more/) has the simplest explanation:

> ABI stability is about mixing versions of Swift at/run time./What about compile time? Right now, Swift uses an opaque archive format called “swiftmodule” to describe the interface of a library, such as a framework “MagicKit”, rather than manually-written header files. However, the “swiftmodule” format is also tied to the current version of the compiler, which means an app developer can’t `import MagicKit` if MagicKit was built with a different version of Swift. That is, the app developer and the library author have to be using the same version of the compiler.

This means we still can't use Swift in our codebase, right? That's what we initially thought, but there's actually a very simple workaround. A `swiftmodule` describes the _public_ interface of a module, so as long as code written in Swift isn't publicly accessible, we can safely ship an SDK that would compile with any future version of Swift.

To achieve that, we will be using Swift in private method in the core of the SDK, while always maintaining an Objective-C wrapper around them that acts as the interface layer.

We love Objective-C and it has served us very well during all those years, but we're excited to finally start using Swift! As I mentioned in my original blog post, that will be a slow transition with most of our new code being written in Swift, while still maintaining our current Objective-C codebase.
