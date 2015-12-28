#####
###
#
#
### README
##
##
###
#####

#**button_example.html**
This file uses JQuery to demonstrate a local voting feature using cookies that store user actions in them.

**URL:** http://backseat-gaming.github.io/test/button_example.html

**PROS:**
* Retains values for a given browser on refresh, close/open ( LOCAL MACHINE ONLY )

**CONS:**
* Doesn't allow negative value for votes ( feature? )
* Does not take into account other users votes
* Does not take into account users switching to a different browser
* The same user can vote multiple times ( Left this in so I can test clicking +|- a bunch during a single browser session)

<br />
<br />
<br />
<br />

#**button_example.html**
This file has the same functionality as button_example.html, only displayed on the site's page itself.

**URL:** http://backseat-gaming.github.io/test/button_overlay.html

***Depends***
1. bo_app.js
2. bo_style.css

**PROS:**
* Retains values for a given browser on refresh, close/open ( LOCAL MACHINE ONLY )

**CONS:**
* Does not take into account other users votes
* Does not take into account same user switching to a different browser