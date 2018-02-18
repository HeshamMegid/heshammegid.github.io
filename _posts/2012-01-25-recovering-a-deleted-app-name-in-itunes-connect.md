---
id: 193
title: Recovering a deleted App Name in iTunes Connect
date: 2012-01-25T12:20:20+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=193
permalink: /2012/01/25/recovering-a-deleted-app-name-in-itunes-connect/
dsq_thread_id:
  - "551937905"
categories:
  - iOS
---
Some time ago Apple has introduced the ability to delete an app from your iTunes Connect account that you no longer need to use or manage. There&#8217;s only one thing that Apple doesn&#8217;t tell you when you are deleting an app: once it has been deleted, you can no longer use that App Name or SKU again in your iTunes Connect account or in any other iTunes Connect account, and there&#8217;s no way to restore the deleted app.

Many people (including myself) have created a new app and then realized that the Bundle Identifier needs to be changed. Since you can&#8217;t change the Bundle Identifier of an app once you have created it, the obvious thing to do is to delete the app and create it once again with the correct Bundle Identifier. While creating the new app of course you get the error message &#8220;The App Name you entered has already been used&#8221;. Contacting Apple Developer Support won&#8217;t help you a lot since you will end up with a canned response along these lines:

> Please know that it is not possible to reuse a SKU or App Name in the same account again and you will not be able to restore your app once deleted.

Fortunately there&#8217;s one simple solution to this problem that apparently no one knows about. When creating the new app change the Default Language for entering its details (from English to UK English for instance), use the same App Name and iTunes Connect won&#8217;t object.

I don&#8217;t know if that&#8217;s the way Apple intended it to be or that&#8217;s a bug in iTunes Connect, but it just saved me from the disaster of losing my App Name forever.