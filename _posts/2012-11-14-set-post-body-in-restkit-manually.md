---
id: 400
title: Set post body in RestKit manually
date: 2012-11-14T10:39:50+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=400
permalink: /2012/11/14/set-post-body-in-restkit-manually/
dsq_thread_id:
  - "927371878"
wp-syntax-cache-content:
  - ""
categories:
  - iOS
---
In some cases while using RestKit, you might want to set the post body (request params) manually with a JSON string instead of assigning an NSDictionary to it. Here&#8217;s the simplest way to do it.

```
RKClient *client = [RKClient sharedClient];
NSString *postBody = @"{\"key\":\"value\"}";
NSData *postBodyData = [postBody dataUsingEncoding:NSUTF8StringEncoding];
RKRequest *request = [client post:@"/endpooint"
                           params:[RKRequestSerialization serializationWithData:postBodyData MIMEType:RKMIMETypeJSON]
                         delegate:self];
```