---
id: 89
title: 3 simples rules for memory management in Objective-C
date: 2011-05-30T12:24:40+00:00
author: hesham
layout: post
guid: http://thecave.vergisolutions.com/?p=89
permalink: /2011/05/30/3-simples-rules-for-memory-management-in-objective-c/
dsq_thread_id:
  - "352000419"
categories:
  - iOS
---
<div>
  Memory management in Objective-C can sometimes be confusing, specially if you are used to writing code in languages that support automatic garbage collection. Here are 3 simple rules that you should follow in your code:
</div>

  1. If you allocated, copied, or retained an object, then you are responsible for releasing the object with either <tt>-release</tt> or <tt>-autorelease</tt> when you no longer need the object. If you did _not_ allocate, copy, or retain an object, then you should _not_ release it.
  2. When you receive an object (as the result of a method call), it will normally remain valid until the end of your method and the object can be safely returned as a result of your method. If you need the object to live longer than this&#8211;for example, if you plan to store it in an instance variable&#8211;then you must either <tt>-retain</tt> or <tt>-copy</tt> the object.
  3. Use <tt>-autorelease</tt> rather than <tt>-release</tt> when you want to return an object, but also wish to relinquish ownership of the same. Use <tt>-release</tt> where ever you can, for performance reasons.

If you are not very familiar with memory management or feel like you want to read more about it, check out the complete article where I got the 3 rules above from: http://bit.ly/jZyPcg
