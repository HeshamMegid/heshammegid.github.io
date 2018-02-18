---
id: 414
title: 'Get international Dialling Code for the User''s Current Location'
date: 2012-11-28T14:38:38+00:00
author: hesham
layout: post
guid: http://hesh.am/?p=414
permalink: /2012/11/28/get-international-dialling-code-for-the-users-current-location/
dsq_thread_id:
  - "948093906"
categories:
  - iOS
---
In an app I&#8217;m working on, users are supposed to enter their phone number including the international dialling code. I know this could be confusing for some users that are not so sure about the dialling code so I wanted to insert it automatically.

So I&#8217;ve created HMDiallingCode, a light weigh library that gets the dialling code of the user&#8217;s current location. It uses CoreLocation and reverse geocoding to determine the country of the user, then retrieve it&#8217;s international dialling code from a plist.

The code is available on GitHub at <https://github.com/HeshamMegid/HMDiallingCode>