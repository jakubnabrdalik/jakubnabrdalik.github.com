module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html lang="en" ng-app="app">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <meta name="viewport" content="width=device-width" initial-scale="2.0">\n    <meta name="description" content="">\n    <meta name="author" content="">\n    <title ng-bind-template="{{pageTitle}}"></title>\n    <link rel="stylesheet" href="css/app.css"><!--[if lte IE 7]>\n    <script src="http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script><![endif]--><!--[if lte IE 8]>\n    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <script>\n      window.brunch = window.brunch || {};\n      window.brunch[\'auto-reload\'] = {\n          enabled: true\n      };\n    </script>\n    <script src="js/vendor.js"></script>\n    <script src="js/app.js"></script>\n  </head>\n  <body ng-controller="AppCtrl">\n    <div class="top-menu">\n      <div class="top-menu-inner"><a href="#/home" class="brand">Solid Craft</a>\n        <div ng-include="\'partials/nav.html\'" class="nav"></div>\n      </div>\n    </div>\n    <div class="wrapper">\n      <div class="main-content">\n        <div ng-switch="subview" class="subview">\n          <div ng-switch-when="loading" ui-animate>\n            <p>loading...</p>\n            <div class="centered">\n              <div class="container">\n                <div class="img-loading"><img src="img/ajax-loader.gif"></div>\n              </div>\n            </div>\n          </div>\n          <div ng-switch-when="page1" ng-include=" \'partials/partial1.html\' " ui-animate></div>\n          <div ng-switch-when="page2" ng-include=" \'partials/partial2.html\' " ui-animate></div>\n        </div>\n      </div>\n      <div class="push"></div>\n    </div>\n    <div class="footer">\n      <div ng-include=" \'partials/footer.html\' " class="container"></div>\n    </div>\n  </body>\n</html>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div class="footer-body">\n  <p class="pull-right"><span class="sites-system-link">design & code: <b class=\'powered-by\'><a href=\'http://touk.pl\'>touk</a></b>. hacking & tunning: jakub nabrdalik. conference picture: <b><a href=\'http://fotomilo.pl\'>krzysztof nielepkowicz</a></b></span></p>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
var menuEl_mixin = function(url, text){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<li');
buf.push(attrs(merge({ 'ng-class':("getClass('" + (url) + "')") }, attributes), merge({"ng-class":true}, escaped, true)));
buf.push('><a');
buf.push(attrs({ 'ng-href':("#" + (url) + "") }, {"ng-href":true}));
buf.push('>' + escape((interp = text) == null ? '' : interp) + '</a></li>');
};
var menuElOut_mixin = function(url, text){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<li');
buf.push(attrs(merge({ 'ng-class':("getClass('" + (url) + "')") }, attributes), merge({"ng-class":true}, escaped, true)));
buf.push('><a');
buf.push(attrs({ 'ng-href':("" + (url) + "") }, {"ng-href":true}));
buf.push('>' + escape((interp = text) == null ? '' : interp) + '</a></li>');
};
var menuElMailto_mixin = function(email, text){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('\n');
buf.push.apply(buf, __indent);
buf.push('<li');
buf.push(attrs(merge({ 'ng-class':("getClass('" + (email) + "')") }, attributes), merge({"ng-class":true}, escaped, true)));
buf.push('><a');
buf.push(attrs({ 'ng-href':("mailto:" + (email) + "") }, {"ng-href":true}));
buf.push('>' + escape((interp = text) == null ? '' : interp) + '</a></li>');
};
buf.push('\n<ul>');
__indent.push('  ');
menuEl_mixin('/about', 'about');
__indent.pop();
__indent.push('  ');
menuEl_mixin('/portfolio', 'portfolio');
__indent.pop();
__indent.push('  ');
menuEl_mixin('/activities', 'activities');
__indent.pop();
__indent.push('  ');
menuElOut_mixin('http://blog.solidcraft.eu' , 'blog');
__indent.pop();
__indent.push('  ');
menuElMailto_mixin('jakubn@gmail.com', 'contact');
__indent.pop();
buf.push('\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div ng-controller="PageCtrl">\n  <div id="about" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background1">\n    <div class="centered">\n      <div class="container">\n        <div class="row darkenBox">\n          <div class="span6">\n            <h1>You know how this journey starts</h1>\n            <p>You take a ten years old, who doesn\'t go well with other kids but has a knack for mathematics, you give him an<a href="http://en.wikipedia.org/wiki/Commodore_64"> 8 bit computer</a> and a<a href="http://en.wikipedia.org/wiki/Neuromancer"> book</a>, and a few years later he\'s graduating in IT from a<a href="http://www.uwm.edu.pl/en/"> university</a> or<a href="http://www.wat.edu.pl"> two</a>.</p>\n            <p>\n              A bit earlier, the boy gets a job as a systems analyst, but it\'s boring in the long run, so he moves to programming.\n               He finds a mentor to learn from, and to point to the right books. Few years more, and he is a team leader.\n            </p>\n            <p>\n              When the boy is versatile enough to handle all the parts of the development process, and communicative enough to\n               understand and solve business problems, you finally have a<a href="http://en.wikipedia.org/wiki/Software_developer"> software developer.</a>\n            </p>\n          </div>\n          <div class="span6">\n            <h1>And where it goes</h1>\n            <p>\n              That\'s pretty much how it worked for me. People are defined by their quirks and traits, and I\'ve soon discovered,\n              I cannot work with bad code. It just steals all the fun and motivation I have.\n              This pushed me into<a href="http://en.wikipedia.org/wiki/Test-driven_development"> Test Driven Development</a> and<a href="http://en.wikipedia.org/wiki/Software_craftsmanship"> Software Craftsmanship</a> movement. I just didn\'t have any other choice.\n            </p>\n            <p>The larger the system gets, the harder it is to get it right. After failing miserably, I\'ve finally found, that<a href="http://en.wikipedia.org/wiki/Domain-driven_design"> Domain Driven Design</a> provides a good foundation for handling that problem. Together with processes following<a href="http://agilemanifesto.org/"> Agile Manifesto</a>, like Scrum or Kanban, I was finally able to deliver quality on time.\n               And it didn\'t turn into a big ball of mud with increasing size.\n            </p>\n            <p>Oh, and by the way, I am Jakub Nabrdalik. Nice to meet you.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="portfolio" scroll-spy="scroll-spy" page="0.5" class="section background2">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span12">\n            <p>Most of my professional life, I worked in software houses:<a href="http://zeto.olsztyn.pl"> zeto</a>,<a href="http://www.smi.pl"> smi</a>,<a href="http://k2.pl"> k2</a>,<a href="http://touk.pl"> TouK</a> (an extremely agile software house with very wide area of expertise) writing thin client dedicated applications\n              for external customers, in languages like Groovy, Java, C#, PHP, and using plethora of technologies.\n              I do everything from analysis, programming, modeling, architecture, coaching to managing projects.\n            </p>\n            <p>\n              Scott Adams once wrote, that the biggest correlation you can find between all the winning candidates for president of the USA,\n              is height and lots of hair, which I suppose explains, why I am usually a team leader or a project manager. But my focus is on programming.\n              I just love writing code and solving business problems.\n            </p>\n            <p>Some of the systems, I\'ve worked on, include:</p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="span4">\n            <h3>Mobile Banking</h3>\n            <p>\n              If USA is the third world in terms of personal financial services and Europe is the second, Africa is the first.\n              We\'ve built a mobile banking system for a bank in Nigeria, months before their competitors managed to integrate an out-of-the-box product.\n            </p>\n            <p>Were we cheaper? Sure. Were we faster? Definitely. Do we have more features? Absolutely. Were we easier to cooperate with? Hell yeah!</p>\n          </div>\n          <div class="span4">\n            <h3>Telco</h3>\n            <p>\n              There are 4 big telcos in Poland: T-Mobile (PTC), P4, Polkomtel, Orange. I\'ve worked on dedicated applications for 3 of them, including\n              network monitoring, invoicing and customer relation management systems.\n            </p>\n            <p>\n              Telcos are the very definition of enterprise-level and big data. You don\'t get more enterprise than that, unless you are watching Star Trek. Projects for telcos are\n              always interesting, their requirements are rarely trivial, and the fact that what you do have direct influence on tens of millions of people\n              is fascinating.\n            </p>\n          </div>\n          <div class="span4">\n            <h3>eCommerce</h3>\n            <p>\n              Boy, I\'ve done a lot of those. Mostly small to medium size, for companies like Nokia, DaimlerChrysler, Hoopla, Raypath, KDC, and many others.\n              Not really surprising, given you can buy everything on the Internet right now.\n            </p>\n            <p>\n              This domain is sweet because you tend to use it yourself, thus you are getting to understand not only the technical problems,\n              but also the very core of the business. Doesn\'t matter how good your software is, if you cannot make the pricing rules flexible enough to get on the top of price comparison engines.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class="container">\n        <div class="row">\n          <div class="span4">\n            <h3>Data management systems</h3>\n            <p>\n              How do you create a system for handling all the data? How about building base blocks, some samples and letting your customer\n              configure the rest? You know, Lego/Ikea style. Suprisingly, it worked.\n            </p>\n          </div>\n          <div class="span4">\n            <h3>Content management systems</h3>\n            <p>\n              I\'ve never had so much fun as with content management systems. This is the heart of information technology. I was lucky to be able to build\n              one from the scratch in technologies and times, when not everybody had a CMS around.\n            </p>\n          </div>\n          <div class="span4">\n            <h3>Enterprise resource planning</h3>\n            <p>\n              I\'ve had my share here as well. Both with creating ERP from the scratch, and integrating open-source system with everything else around.\n              This domain tends to grow exponentially. Just like requirements.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id="activities" scroll-spy="scroll-spy" parallax="0.3" page="1" class="section background3">\n    <div class="centered">\n      <div class="container">\n        <div class="row darkenBox">\n          <div class="span6">\n            <h1>Activities</h1>\n            <p>\n              Apart from regular work and hacking, I go to a lot of conferences, meetings, hackathons, and alike, for inspiration and knowledge. At some point I started giving talks and leading workshops myself.\n              Each talk requires a lot of research, even if I use that technology everyday at work,\n              so it helps me to get better, while helping others as well. Pure win-win situation.\n              Here is a list of such events, and a few of a different kind, to keep me motivated.\n            </p>\n            <h1>2014</h1>\n            <p>I led<a href="http://www.meetup.com/Warsaw-Spring-Labs/events/163218782/"> "Spring Data JPA"</a> workshop at<a href="http://www.meetup.com/Warsaw-Spring-Labs/"> Warsaw Spring Labs</a></p>\n            <h1>2013</h1>\n            <p>I wrote a chapter "The Root of All Evil" for Tomek Kaczanowski\'s book<a href="http://www.amazon.com/Bad-Tests-Good-Tomek-Kaczanowski/dp/8393847133"> "Bad Tests, Good Tests"</a> (you can download digital copy for free<a href="http://practicalunittesting.com/btgt.php"> here</a>)</p>\n            <p>I led "Test Driven Development for beginners" workshop at<a href="http://2013.agilebyexample.com/"> Agile by Example</a> conference in Warsaw (<a href="https://docs.google.com/presentation/d/1JluKlftNzKnf3EWFQSDWPaONm95MFtRT4OZBFpt9uA0/edit?usp=sharing">slides</a>,<a href="https://github.com/jakubnabrdalik/abetdd"> code</a>)</p>\n            <p>I lead 4 workshops about git, during<a href="http://v2.gitkata.pl"> Gitkata 2</a></p>\n            <p>I gave<a href="http://youtu.be/wbAtJlbRhbQ"> "Test Driven Traps"</a> talk at:<a href="http://2013.confitura.pl/"> Confitura</a> conference in Warsaw,<a href="http://2013.33degree.org/for_charity.html"> 33rd Degree for charity</a> conference in Krakow,<a href="http://www.jug.poznan.pl/"> Poznań Java User Group</a>, and<a href="http://trojmiasto.jug.pl"> Trójmiasto Java User Group</a> (<a>slides</a>)</p>\n            <p>I gave "Apocomito, or what problems DDD, CQRS, NoSQL and microservices solved for me" talk at<a href="http://jpiknik.pl"> j.Piknik</a> in Warsaw (<a href="https://docs.google.com/presentation/d/1e9MuRVEf8aL499_2OnE3rYFvRPo5a__FoQwU5CFufeQ/edit?usp=sharing">slides</a>)</p>\n            <p> Together with Piotr Jagielski, I wrote<a href="http://www.packtpub.com/spring-security-startert/book"> a small book about Spring Security framework</a>, and got it published.</p>\n            <p>I led "Test Driven Development" workshop at<a href="http://test.kata.org.pl/"> Testkata</a> in Warsaw</p>\n            <p>I gave<a href="http://youtu.be/r3wIYOggWmU?t=1h11m56s"> "MongoDB"</a> talk at<a href="http://warszawa.jug.pl/"> Warsaw Java User Group</a> (<a href="https://docs.google.com/presentation/d/1JnHnYBWWyvoqlvQmDTIkj0tzzDg1F1uaC8od7riquPY/edit?usp=sharing">slides</a>)</p>\n            <p>I gave "QA in the day of Test Driven Development" talk at Kariera Testera</p>\n            <p>I gave "Job interviews in Software Development" talk at<a href="http://warszawa.jug.pl/"> Warsaw Java User Group</a>, together with Jakub Kubryński, and Tomasz Szymański (<a href="https://docs.google.com/presentation/d/1KaaIuorkhQeT3ofBJu82ZvnqICg0jAFDVtJn7_j3tj0/edit?usp=sharing">slides</a>)</p>\n            <p>I gave one of opening talks at<a href="https://www.hackerleague.org/hackathons/name-collision"> "NameCollison Hackathon"</a> (<a href="https://docs.google.com/presentation/d/14vmqnKPefpK8LCUw2kzedvstyRFN3sbQsFfql4Mn6Dw/edit?usp=sharing">slides</a>)</p>\n            <p>I gave<a href="http://youtu.be/_y1LP-mQTKU?t=46m19s"> "Spock"</a> flashtalk at<a href="http://warszawa.jug.pl/"> Warsaw Java User Group</a> (<a href="https://github.com/jakubnabrdalik/spock-examples-wjugflashtalks">code</a>)</p>\n            <p>I led 5 workshops about git, during<a href="http://v1.gitkata.pl"> Gitkata</a></p>\n            <p>Together with six other guys, I became an organizer of<a href="http://warszawa.jug.pl/"> Warsaw Java User Group</a> meetings. We are responsible for keeping our regular lectures interesting, and a few mundane tasks, like the web page, sponsors and so on.</p>\n          </div>\n          <div class="span6">\n            <h1>2012</h1>\n            <p><a href="http://www.methodsandtools.com/"> Methods & Tools</a> published my article, titled<a href="http://www.methodsandtools.com/PDF/mt201204.pdf"> "Test Driven Development Traps"</a></p>\n            <p>I gave "Test Driven Traps" talk at<a href="http://www.topconf.com/"> Topconf</a> conference in Tallinn</p>\n            <p>I gave<a href="http://youtu.be/kYUPerT-AzY"> "Don\'t write in Java. You know better languages even if you\'re not aware of it yet"</a> talk at<a href="http://2012.confitura.pl/"> Confitura</a> conference, with Tomasz Przybysz (<a href="https://docs.google.com/presentation/d/1O52sR75uszCYu-gp_xP4rCu8DTvmLoV-bYgEiCvl-rw/edit?usp=sharing">slides</a>)</p>\n            <p>I gave „Beautiful failures, when good things go bad, a few case studies" Birds of Feather session at<a href="http://2012.33degree.org/"> 33rd Degree Conference</a> in Krakow and at<a href="http://agilewarsaw.com/"> Agile Warsaw</a> group (<a href="https://docs.google.com/presentation/d/1E9PF0YlPwK1fLe28jyz5o6UIGIEVt4iJiXcc8Pevi6o/edit?usp=sharing">slides</a>)</p>\n            <p>I got invited to the Program Committee of<a href="http://4developers.org.pl/"> 4developers</a> conference, where I helped a bit finding interesting speakers and choosing talks from Call For Papers</p>\n            <h1>2011</h1>\n            <p>I was an instructor and organizer of Agile Development Day, one day open meeting for those who want to share their experience with Agile methods</p>\n            <p>I gave “Winter go home, a gentle introduction to Spring Framework” talk at<a href="http://warszawa.jug.pl/"> Warsaw Java User Group</a></p>\n            <p>I gave “Teamwork in software development” lecture for students at Faculty of Mathematics, Informatics and Mechanics,<a href="uw.edu.pl"> University of Warsaw</a></p>\n            <p>I held “Hack your company: what a developer can do, to get fun and money from learning”, Birds of Feather session at<a href="http://2011.33degree.org/"> 33rd Degree Conference</a> in Krakow</p>\n            <p>I gave “Spring Security & Spring Social: how to integrate Google and Facebook in a Java web application” talk at<a href="http://warszawa.jug.pl/"> Warsaw Java User Group</a></p>\n            <p>I gave “Animating Developers” talk at<a href="http://agilewarsaw.com/"> Agile Warsaw</a> group</p>\n            <h1>2010</h1>\n            <p>I led Software Craftsmanship workshops at Warsaw Design Patterns Study Group</p>\n            <p>I gave Software Craftsmanship talk at<a href="http://warszawa.jug.pl/"> Warsaw Java User Group</a></p>\n            <p>I led a panel about team building and quality at COOLuary (unconference part of NYAC conference) in Krakow</p>\n            <p>I gave<a href="http://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;ved=0CCkQFjAA&amp;url=http%3A%2F%2Fparleys.com%2Fplay%2F514892270364bc17fc56bfc2&amp;ei=_TBlUsmCN8mrhQfqm4HIBg&amp;usg=AFQjCNGoUVSY6JR3joMvEAiz78i3plORPw&amp;sig2=Oi2T4fBhhtmIp5W_NG2WpA&amp;bvm=bv.54934254,d.ZG4&amp;cad=rja"> “How to prevent code biodegradation”</a> talk at Javarsovia conference in Warsaw</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <div page="1" class="section">\n    <div class="centered">\n      <div class="container">\n        <div class="row">\n          <div class="span8"><h1>A First Level Header</h1>\n\n<h2>A Second Level Header</h2>\n\n<p>Now is the time for all good men to come to\nthe aid of their country. This is just a\nregular paragraph.</p>\n\n<p>The quick brown fox jumped over the lazy\ndog&#39;s back.</p>\n\n<h3>Header 3</h3>\n\n<blockquote><p>This is a blockquote.</p><p>This is the second paragraph in the blockquote.</p><h2>This is an H2 in a blockquote</h2></blockquote>\n\n<p>Some of these words <em>are emphasized</em>.\nSome of these words <em>are emphasized also</em>.</p>\n\n<p>Use two asterisks for <strong>strong emphasis</strong>.\nOr, if you prefer, <strong>use two underscores instead</strong>.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>');
}
return buf.join("");
};