---
id: 443
title: Google Currents-style UISegmentedControl
date: 2012-12-30T10:59:28+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=443
permalink: /2012/12/30/google-currents-style-uisegmentedcontrol/
dsq_thread_id:
  - "999584816"
wp-syntax-cache-content:
  - ""
categories:
  - iOS
---
Introducing HMSegmentedControl, a drop-in replacement for UISegmentedControl mimicking the style of the segmented control used in Google Currents for iOS.

<p style="text-align: center;">
  <img class="aligncenter" style="border: 1px solid black;" alt="" src="https://raw.github.com/HeshamMegid/HMSegmentedControl/master/Screenshot.png" width="320" height="568" />
</p>

Grab the code from GitHub: <https://github.com/HeshamMegid/HMSegmentedControl>

### Usage

The code on GitHub includes a demo project showing how to use the control.

To use in your own project, first import HMSegmentedControl.m and HMSegmentedControl.h into your project, then add QuartzCore to your linked libraries.

The code below will create a segmented control with the default looks:

<pre lang="objc" line="1">HMSegmentedControl *segmentedControl = [[HMSegmentedControl alloc] initWithSectionTitles:@[@"One", @"Two", @"Three"]];
[segmentedControl setFrame:CGRectMake(10, 10, 300, 60)];
[segmentedControl addTarget:self action:@selector(segmentedControlChangedValue:) forControlEvents:UIControlEventValueChanged];
[segmentedControl setTag:1];
[self.view addSubview:segmentedControl];</pre>

If you used this code in your project or it was helpful to you, I would love to hear from you!