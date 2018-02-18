---
id: 953
title: How We Refactored Our Monolithic iOS Framework
date: 2018-02-15T09:38:17+00:00
author: hesham
layout: revision
guid: https://hesh.am/2018/02/15/951-revision-v1/
permalink: /2018/02/15/951-revision-v1/
---
Over the past few months, the iOS team at [Instabug](https://instabug.com/) has been working on refactoring our framework into multiple smaller ones, so we could ship faster while maintaining the quality of our SDK.

I wrote a blog post on Instabug&#8217;s Engineer blog detailing what we have done. 

> Over the past year, the Instabug BugSquad has grown rapidly. With a 200% increase in team size, we had to think hard about how to scale an engineering company without added bureaucracy and with improved productivity. In the end, this meant we had to refactor our code base.
> 
> As with all complex engineering endeavors, things tend to move at a slower, less efficient pace when teams working on them grow in size. To address this problem early on, we’ve reorganized the engineering team into small, autonomous cross-functional teams. We call those teams Squads. Each Squad owns a product that Instabug offers. More on that in an upcoming blog post.
> 
> To give each Squad the agility it needs to move fast, without being interdependent on other Squads, we’ve decided to split our large monolithic codebases into smaller ones. On the iOS side, this meant we had to make radical changes to the way we structure our code and how we build and distribute our SDK. In this blog post, we’ll be discussing the details of the changes our iOS team has made.

Read the full post [here](https://blog.instabug.com/2018/02/refactor-code-base/).