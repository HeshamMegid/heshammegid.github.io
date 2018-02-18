---
id: 496
title: 'AFNetworking, NSURLCache & iOS 6'
date: 2013-04-11T10:37:51+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=496
permalink: /2013/04/11/afnetworking-nsurlcache-ios-6/
dsq_thread_id:
  - "1202750269"
categories:
  - iOS
---
_NSURLCache_ can be used to define memory and disk caching for URL requests. If you make a connection while you are not connected to the internet with the cache policy set to _NSURLRequestReturnCacheDataElseLoad_, data should be returned from the cache if it exists. This works as expected on iOS 5 and cached data is always returned. On iOS 6.x, however, this doesn&#8217;t happen and the connection will fail returning an error code _-1009_ which indicates that you are offline. I ran into this recently while using _AFNetworking_ and apparently this is a bug in iOS 6.x and has already been reported to Apple by multiple people.

To workaround this, I wrote a simple class that subclasses _AFNetworking_&#8216;s _AFHTTPClient_ (thanks to [this](https://github.com/AFNetworking/AFNetworking/issues/566) GitHub issue) and ensures that you always get cached data when it&#8217;s available regardless of whether you are connected to the internet or not.

What it does is that it gets the _NSCachedURLResponse_ in the failure block of the request you are making and deserializes it using _NSJSONSerialization_, then calls the success block with the _responseObject_ as if the connection didn&#8217;t fail.

I've added the code to a [GitHub gist](https://gist.github.com/HeshamMegid/5361678). Please fork it if you think there&#8217;s something that could be improved.