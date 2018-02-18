---
id: 452
title: Transform Properties of an NSObject Into an NSDictionary
date: 2013-01-28T08:42:35+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=452
permalink: /2013/01/28/transform-properties-of-an-nsobject-into-an-nsdictionary/
dsq_thread_id:
  - "1050796555"
categories:
  - iOS
---
I needed a way to transform all the properties of an object that are not nil into an NSDictionary. I didn&#8217;t find a quick way to do it so I wrote my own NSObject category.

It uses the Objective-C runtime and the idea is really simple. I get a list of properties of the object&#8217;s class, loop on them getting their value, and only add them to the dictionary if they are not nil.

Here's a gist with the implementation: [https://gist.github.com/HeshamMegid/4654512](https://gist.github.com/HeshamMegid/4654512)