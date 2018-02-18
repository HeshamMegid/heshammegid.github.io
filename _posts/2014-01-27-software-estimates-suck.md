---
id: 659
title: Software Estimates Suck
date: 2014-01-27T12:40:32+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=659
permalink: /2014/01/27/software-estimates-suck/
dsq_thread_id:
  - "2180587931"
categories:
  - Software Development
---
People suck at estimating how long a task will take. We are often off by a factor of two or more when estimating seemingly simple everyday tasks, like running errands, so imagine how bad we are at estimating complicated tasks like building a new software feature.

Now imagine estimating a set of features instead of just one, or even a whole project upfront. Time estimates in such cases quickly become pointless. The biggest challenge in my opinion about estimating a whole project upfront is that you don&#8217;t know the complexity of the problems you are trying to solve until you actually start solving them. Moreover, those problems you are trying to solve never stays the same. Requirements change, problems get more complex and projects often suffer from feature creep.

You&#8217;ll be inclined to think that if a task is very similar or identical to a task you have done before, then it&#8217;s going to take exactly the same time. You&#8217;re wrong. It&#8217;s very unlikely that 2 tasks are identical. Chances are the requirements are going to be slightly different, design will change a bit, you&#8217;ll be working with different people, etc. These are all things that will increase (or decrease) the time required to finish the task.

One more thing that always make time estimates highly inaccurate is the time needed to fix bugs. You can&#8217;t leave that time out, but you also can&#8217;t estimate how long it will take to fix bugs you don&#8217;t have yet, and there&#8217;s no one-size-fits-all time frame that you could assign to bug fixing that would work for all tasks. Sometimes you spend days debugging a single nasty bugs, how could you estimate that kind of stuff?

Moreover, people always ignore the time needed for daily communication. A lot of friction may happen in human interaction, especially if it&#8217;s across teams. There is usually misunderstanding and confusion that leads to a lot of delays.

So estimates suck, but they are a necessary evil,  so now what? I like to take Jason Fried&#8217;s and David Heinemeier Hansson&#8217;s advice from [Rework](http://37signals.com/rework/). Never estimate a bulk of tasks. It&#8217;s much easier to divide into smaller tasks and put estimates separately. So break the project into many small projects. Your estimates will still be wrong but you&#8217;ll be a lot less wrong.

Also, if you&#8217;re working in a large development team, you&#8217;ll often be surprised at how different estimates from multiple people for the same task could be. My favorite way of dealing with those situations is to play a game, a [Planning Poker](http://www.planningpoker.com/detail.html) game. In my opinion, it&#8217;s the most efficient way to get people to agree on a reasonable estimate for a single task.

One last thing, never give in to your [Pointy-haired Boss](http://en.wikipedia.org/wiki/Pointy-Haired_Boss)&#8216;s request to do the same task in half the time because &#8220;you&#8217;re a smart engineer, you can do it&#8221;. It just doesn&#8217;t work that way. While your estimates are probably wrong, they are still your guess of how long it would take to finish that task. No one can simply jump in and ask you to finish in less time, unless they have a very good reason, and of course an arbitrary deadline is never a good reason.

How do you deal with estimates in your team? Let me know in the comment below.