# The new openSUSE landing page

View the preview at: http://cyntss.github.io/opensuse-landing-page/
In this new page we will feature Tumbleweed and Leap.


#### Update 10/09/2015
We added a Gulp task that:
- Preprocesses CSS (compiles Less into CSS).
- Preprocesses and minifies the Vendor's CSS into one file.
- Minifies all .JS files into one file.
- Watches all changes on CSS and JS files and compiles them on the go, so you dont need to compile manually as you work on the UI.
- And runs a local instance in your localhost:8000

Just clone the repo and run gulp:

```
~/Opensuse-landing-page> gulp
```


## Why did we need a new one?
Because after years working without a defined target audience and rather trying to aim at any software, internet, computer user, the openSUSE Board as invested time and knowledge understanding the real personas behind our beloved openSUSE, and while working around it they identified two "different" users: the Tumbleweed user and the openSUSE regular release user (Leap).

## But why to create a new UI for it? I liked the old one.
Well, the answer is simple: just like the saying says "The shoemaker's son always goes barefoot" we were leaving our main door to new commers get old and rusty.
We implemented a new UI highlighting the most important information for our new comers and of course, we wont forget any of the rest in the community like us, always contributing and working together to make openSUSE better every day.

## What makes the new openSUSE landing page more Modern (or less rusty)?
Here we have to take note of a couple of new technologies implemented, but, before we go to the technical side, let's talk about the colours:

### Colours:
If you are one of the openSUSE fans then we are sure you have seen the printing material Zvezdana Marjanovic has created during her more than 1 year of contribution to the community as a Graphic Designer.
The new colour pallete is publicly available at: http://opensuse.github.io/branding-guidelines/

### The information and order of it:
At this point we need to say Thank you! to the Board and Douglas DeMaio for helping us providing the text in the website.
**How we organized the Information and why**

* Tumbleweed vs Leap: The way we see it, Tumbleweed and Leap (regular release) users have the same passion but sightly different approaches with openSUSE. The first one (Tumbleweed) goes for an up-to-date tested and stable system with new rolling release versions of applications and software he/she is developing; while the second one (Leap) goes for a long-term type release and provides stability.
This made us understand that new users needed to understand this differentciation in the main section of the landing page, to then decide for one or the other, and for our regular visitors the next sections will become more relevant.

![Home](https://raw.githubusercontent.com/openSUSE/landing-page/screenshots-for-readme/01.png "Home")

* Tools: With help of the Board we filtered out 4 of the most popular openSUSE tools: OBS, OpenQA, YaST and Kiwi. The reason for a second important position in the site is simple: our tools are in many cases, the choice maker for many openSUSE users. So we decided to give them a brief explanation (extracted from Richard Brown's blog) and present some screenshots as well as a link to see All openSUSE tools.

![Tools](https://raw.githubusercontent.com/openSUSE/landing-page/screenshots-for-readme/02.png "Tools")

* What's new: In the old landing page, unless there were a blog post about it, it was hard to find out new openSUSE tools available for everyone to try. We don't know exactly how regularly openSUSE will be launching new tools, but as soon as there is something new and exiting this will be the right place to find out more about it. Oh, and to answer the question "why in the 3rd position?" the reason is simple, it is a tool, but a new one which is still building popularity, that makes it fair enough to be following the "Tools" section.

* New: Nothing but a Re-make of the blog's news from the old landing page. Since above it we have the section already describing something new from openSUSE, in this place, even with the same background colour in the section, we merged the general news from openSUSE.

![News](https://raw.githubusercontent.com/openSUSE/landing-page/screenshots-for-readme/03.png "News")

* Contribute: After giving information about our main distributions, our most popular tools, our new tools and news around openSUSE, our visitors will feel somewhat excited about our open source environment and this is the right time to ask and invite them to contribute with us!. So here we present them the opportunity and the information of the How to contribute.

* Conferences: Last but not least, and if we did create some excitement in our users, we also invite you to come to meet the openSUSE community in action at one of our conferences, summits or mini-summits that we host and/or attend around the world. And why not, try the openSUSE beer :)

![Contribute and Conferences](https://raw.githubusercontent.com/openSUSE/landing-page/screenshots-for-readme/04.png "Contribute and Conferences")

### The technical side of the new landing page:

This is an static landing page and so, I (cynthia, who is writing this nice explanation for you) decided there is no reason to involve backend in the development. Pure front-end would be enough to take you thru the website nice and smoothly, in any device you use to browse opensuse.org, providing i18n and reading the blogs content from json.

**But, what exactly did you use and why?**

* Twitter Bootstrap: I picked this front-end framework for many reasons: it's the most popular html, css and js framework in today's Internet, it is highly customizable, it is a very good friends of cross-device development, the have a well-written documentation for everyone to easily learn bootstrap, powers up the development speed, and so much more.

* HTML5: All the new landing page includes html5 tags such: < header >, < section >, < article >, < footer >, etc. **Is this a risk nowadays?** Not from my point of view; few are those using browsers non-html5 compatibles, however, for those who still use old-fashion browsers, I made sure the html5 tags are still displaying as block, but of course, if you are using a browser from Mart that I didnt know about and did not test, feel free to open an issue in github and I will do my best to work to fix it.

* Less: There are sass/scss and less lovers/fans, but im one of the less' fan. Why? First: I find it more intuitive, Secondly: I find the less documentation to be better written and that makes it easier for most people to learn it, Third and the most important: Less variables are simply overwritten once you place the new variable below in a new line, this, makes it a loooooot easier to customize bootstrap or any other framework written in less. In Sass/scss you need to import the variables of bootstrap, then your varibles, the the whole bootstrap set, then your theme and then once again your variables to overwrite (for the second time) the bootstrap variables. This, to me, makes absolutely no sense at all. Less works as just any other code where the new declaration of value of a variable overwrites the previous one and the functions using the variable take always the last value of the variable, the updated one.

* Jquery: First of, jquery is a dependency of Bootstrap, so even if I didnt like it I would have needed to use it, but, that isn's my case. I like jquery. It saves time (although it increases the memory consumption) creating interpolations and animations in the website as well as its syntax is much more cleaner than using pure javascript.

** And some open source js libraries **

* jquery-lang: This is the library (created by Irrelon Software Limited and used by many web apps, one of them, easyJet) that allows us to have a simple i81n implemented in the front-end asigning the different languages in simple Json files. More info at: https://github.com/Irrelon/jquery-lang-js

![Translations](https://raw.githubusercontent.com/openSUSE/landing-page/screenshots-for-readme/05.png "Translations")

* OWL carousel: A well written JS library that allowes us to easily create a carousel in the News section which also features Touch interactions (for tablets and phones). It has multiple uses and it is one of my favourite carousels for the wide range of ways one can implement this carousel in a website. More info at: http://owlgraphic.com/owlcarousel/

* WOW: A very popular script in today's websites which reveals elements as they appear on the screen when the use scrolls. Simple and easy to use. It gives openSUSE landing page the last touch it needed to have a more modern look and feel. More info at: http://mynameismatthieu.com/WOW/docs.htmlope

* jquery.easing.1.3: A simple Jquery library that extends the easing effect for the "animate" method which only includes **swing** and **linear**. In this case, it was used to give a better effect to the bouncing ball under the **Contribute** section which you will see if you click on any of the two options.

---

#CONTRIBUTE
## Do you wanna contribute providing translation for the new openSUSE website?
If yes is your answer, then you will making thousands of users happy to have the openSUSE landing page in their language.

The openSUSE translations are hosted in subversion on http://svn.opensuse.org - the template for it is opensuse-landing-page.pot. You need to update
the $LANG/po/opensuse-landing-page.$LANG.po within subversion.

#### Now its time to add the new language to the dropdown. For this follow the next steps:

1. Inside the 'index.html' search with your text editor for 'dropdownMenu1', which is the list containing the options of languages available.
2. Add a new option to the list by simply adding a like such ```<li><a href="#" class="change-language" data-language-value="es">Spanish</a></li>```. **Note** that the <code>data-language-value</code> attribute contains the value of the international code of the language you added. This code has to match with the name of the file you created.
3. Now we have added the file in the dropdown, and the last step is to include the translation file. For this, you need to open the file **assets/js/opensuse-theme.js** . Here you need to go to the line 208 and under it add the new language in the following format ```window.lang.dynamic('es', 'assets/js/langpack/es.json');```. **Note:** We are configuring the optional languages and giving them the value with which our html will be calling them, in this case "es", and in the secong value we are declaring the rute to the file. Please verify you are giving the right values here.

#### Last steps: build and test

We use GULP to run automatic tasks to preprocess CSS (from less), compress images, and optimize and compress JS.
The last step you need to do is, open the terminal and go to the directory where you have the project cloned.
Once you are there and considering you have Gulp installed, just run:
<pre>
c:/doc/opensuse-landing-page> gulp
</pre>
<small>More info about <a href="http://gulpjs.com/" target="_blank">gulp here</a></small>

Gulp will give the final touch in the code so then you only need to open the project in your browser
http://localhost:8000
Test your language works well. To make sure there is no variable without translation, open up the web inspector of your browser and check if there is error message in the console, if not, you have done an Excellent job!
So, open a new Pull Request in github, we will double check everything is fine, and then Merge your contribution!

---

Thanks to:
* <img src="http://trivialine.herokuapp.com/assets/cynt-aa3571490f7e5e51d6a4e000dfc8f55d.jpg" /> Cynthia Sanchez for developing it. Find her at: <a href="https://www.linkedin.com/in/csanchezfrontend">LinkedIn</a> | <a href="twitter">Twitter</a>
* <img src="http://trivialine.herokuapp.com/assets/zvez-3c414d000429b6e8434209c41976fdc7.jpg" /> Zvezdana Marjanovic for designing it. Find her at: <a href="https://www.linkedin.com/pub/zvezdana-marjanovic/51/5b2/537">LinkedIn</a>
