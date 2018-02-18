---
id: 40
title: 'My thoughts about Otlob&#039;s BlackBerry app'
date: 2010-11-06T12:03:19+00:00
author: hesham
layout: post
guid: http://thecave.vergisolutions.com/?p=40
permalink: /2010/11/06/my-thoughts-about-otlob-blackberrb-app/
dsq_thread_id:
  - "349916375"
categories:
  - BlackBerry
---
I&#8217;m a big fan of Otlob.com. I think it&#8217;s a great service and I use it all the time, but I have always thought that Otlob&#8217;s service would be much better if we could place orders through apps on our smart phones. Recently Link Development has launched 3 apps for Otlob for iPhone, BlackBerry and Nokia touch phones. I used the BlackBerry version for a little while and it was such a disappointment, there are so many issues in the application that makes it almost unusable,  so I decided to compile a list of everything I don&#8217;t like about the app, maybe it would help in improving it later on.

  1. On the first screen you are asked to choose a city, district and food category. The weird thing is that the contents of these menus are only loaded from the internet when you open them, not when the app starts. So when you click on any menu you have to wait for network activity to be done so you could see the contents of the menu.
  2. One more issue with the first screen is that you unlike the website, you can&#8217;t choose &#8220;All&#8221; as a food category. You always have to choose a specific category.
  3. After selecting a restaurant and viewing its menu, there&#8217;s no way to view the sizes of the items you are ordering, you only get the same item with different prices.
  4. on every item you order, you can enter a note. I wrote a two line note on my pizza, later on after placing the order I found out that only the first line made it through to the finalized order. So I ended up having the wrong pizza.
  5. After placing the order I choose &#8220;Review order&#8221; to see the status of my order. The app showed the items I selected but it showed them as if I haven&#8217;t ordered them yet, and I had the option to place the order!
  6. BlackBerry applications depends a lot on the BlackBerry menu key. Many options are always stuffed inside that menu. In Otlob&#8217;s app you don&#8217;t get any options in that menu in most screens.
  7. The BlackBerry menu has a &#8220;Close&#8221; option by default. Obviously that should close the whole application, but instead it send you to the previous screen, which is the same functionality as the back button. So to fully close the application you have to go back through all the screens.
  8. The last issue is really shocking to me. Any application developer knows that you should never ever do your network activity on the interface thread, because that will freeze your application till the network activity finishes, which could take up to 10 seconds or even more. But Otlob&#8217;s BlackBerry app developers decided to all of the app&#8217;s network activity in the UI thread, without even informing the user that it&#8217;s loading something from the internet so you know that you have to wait.

I came through all of those issues by placing one order. Regular users of the app probably came through many other issues. So please feel free to share them in the comments section.