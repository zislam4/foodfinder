[mockup1]: readmeFiles/DesktopHome.png
[mockup2]: readmeFiles/MobileHome.png

# [Free Food Finder](http://zislam4.github.io/foodfinder/)
###### By: [Gabe Terrell](https://github.com/gabe-terrell), [Khuyen Bui](https://github.com/khuyenbui), and [Zabir Islam](https://github.com/zislam4) ######

###Problem Statement###

There are two abundant resources on this campus:
* Poor College Students on a budget
* Events with excess food that ends up going to waste

Each of these resources wants something:
* Students want free food, but don't know where free food is available or don't have the time to look.
* Events want more people to attend and enjoy the hard-work that has gone into planning them.


###Solution###

A Web Platform that rectifies the problem from both party's perspectives:
* Gathers and parses events around campus that have free food for students.
* Allow Event planners to post events to the website to garner attendntion.

###Features to Implement (Pick 5)###
* Email / Push-Notification (Perhaps through SendGrid API)
* Geolocation (Event Location, Perhaps with Google Maps API)
* Front-end framework including Bootstrap, React, Backbone.js, AngularJS
* Client-side data persistence with either local storage or web SQL
* E-mail / Social Media / Website Data Scraping (to find events)

###Data Collection & Usage###

We have to collect data about events in two ways:
* Allow users to directly upload and advertise their free food event
* Scrape events from Tufts social media and e-lists

###Algorithms or Special Techniques###

* For event scraping, we will need some form of e-mail / website text scraper/parser 
  that can identify free food and locations.

###APIs###

* SendGrid API
* Google Maps API
* Some sort of Data Scraping API (Still in the works)

###Mock-Ups###
![Mock-up Images][mockup1]
![Mock-up Images][mockup2]
