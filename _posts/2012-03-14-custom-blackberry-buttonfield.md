---
id: 228
title: Custom BlackBerry ButtonField
date: 2012-03-14T10:54:20+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=228
permalink: /2012/03/14/custom-blackberry-buttonfield/
dsq_thread_id:
  - "610503418"
categories:
  - BlackBerry
---
UI controls in the BlackBerry SDK don&#8217;t give you a lot of customization options specially in versions prior to 5. To do something as simple as changing the background color or focus color you will have to subclass that UI control and draw everything yourself.

To make our lives easier, I intend to create a set of custom controls that are easily customizable just by setting a set of properties, the first of which is a custom ButtonField which lets you easily set background and focus image/color, draw rounded edges, change size, and change font.

I&#8217;ve added the source code along with a usage example to a GitHub repo and I will be adding more controls later on.

Grab the code here: <https://github.com/HeshamMegid/BlackBerry-Custom-Controls>

**Update:** I&#8217;ve added the ability to initialize the button with two URLs for background and focus images, which will be automatically downloaded.