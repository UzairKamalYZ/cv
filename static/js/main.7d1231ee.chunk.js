(this["webpackJsonpreact-resume"]=this["webpackJsonpreact-resume"]||[]).push([[0],{105:function(e,a,t){},376:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t.n(n),s=t(94),i=t.n(s),r=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,377)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),s(e),i(e)}))},o=(t(105),t(15)),l=t(23),m=t(95),d=t.n(m),b={particles:{number:{value:180,density:{enable:!0}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"bottom",out_mode:"out"}}},u=t(2),j=function(){var e="".lsTheme,a="".lsIcon,t="".lsSnow;try{e=localStorage.getItem("theme"),a=localStorage.getItem("icon"),t=JSON.parse(localStorage.getItem("snow"))}catch(_){console.error("All Cookies blocked - Error: ".concat(_.message))}var c=Object(n.useState)(e||"light"),s=Object(l.a)(c,2),i=s[0],r=s[1],o=Object(n.useState)(a||"bx-moon"),m=Object(l.a)(o,2),j=m[0],h=m[1],p=Object(n.useState)(t),g=Object(l.a)(p,2),x=g[0],O=g[1];Object(n.useEffect)((function(){localStorage.setItem("theme",i),localStorage.setItem("icon",j),localStorage.setItem("snow",x),document.body.classList["dark"===i?"add":"remove"]("dark-theme")}),[i,x,j]);var v=function(){return x&&"dark"===i&&Object(u.jsx)(d.a,{params:b})};return Object(u.jsxs)("div",{className:"home__options",children:["dark"===i&&Object(u.jsx)("i",{className:"bx bx-cloud-snow enable-snow",title:"Activate Snow",id:"snow-button",onClick:function(){return O(!x)}}),Object(u.jsx)(v,{}),Object(u.jsx)("i",{className:"bx ".concat(j," change-theme"),title:"Toggle Theme",id:"theme-button",onClick:function(){r("light"===i?"dark":"light"),h("bx-sun"===j?"bx-moon":"bx-sun")}})]})},h=function(e){var a=e.name,t=e.ocupation,n=e.location,c=e.email,s=e.telephone,i=e.image;return Object(u.jsxs)("section",{className:"home",id:"home",children:[Object(u.jsxs)("div",{className:"home__container section bd-grid",children:[Object(u.jsxs)("div",{className:"home__data bd-grid",children:[Object(u.jsx)("img",{src:i,alt:"profile_image",className:"home__img"}),Object(u.jsx)("h1",{className:"home__title",children:Object(u.jsx)("strong",{children:a})}),Object(u.jsx)("h3",{className:"home__profession",children:t})]}),Object(u.jsxs)("div",{className:"home__address bd-grid",children:[Object(u.jsxs)("span",{className:"home__information",children:[Object(u.jsx)("i",{className:"bx bx-map home__icon"})," ",n]}),Object(u.jsxs)("span",{className:"home__information",children:[Object(u.jsx)("i",{className:"bx bx-envelope home__icon"})," ",c]}),Object(u.jsxs)("span",{className:"home__information",children:[Object(u.jsx)("i",{className:"bx bx-phone home__icon"})," ",s]})]})]}),Object(u.jsx)(j,{})]})},p=function(e){var a=e.academic;return Object(u.jsxs)("section",{className:"academic-experience section",id:"education",children:[Object(u.jsx)("h2",{className:"section-title",children:"Education"}),Object(u.jsx)("div",{className:"education__container bd-grid",children:a.map((function(e){return Object(u.jsx)(g,Object(o.a)({},e),e.institution)}))})]})},g=function(e){var a=e.career,t=e.date,n=e.institution;return Object(u.jsxs)("div",{className:"education__content",children:[Object(u.jsxs)("div",{className:"education__time",children:[Object(u.jsx)("span",{className:"education__rounder"}),Object(u.jsx)("span",{className:"education__line"})]}),Object(u.jsxs)("div",{className:"education__data bd-grid",children:[Object(u.jsx)("h3",{className:"education__title",children:a}),Object(u.jsx)("span",{className:"education__year",children:t}),Object(u.jsx)("span",{className:"education__studies",children:n})]})]})},x=t(29),O=function(e){var a=e.technicalLabel,t=e.softLabel,n=e.technicalSkills,c=e.softSkills;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"technical-skills section",id:"skills",children:[Object(u.jsx)("h2",{className:"section-title",children:a}),Object(u.jsx)("div",{className:"skills__content bd-grid",children:Object(u.jsx)("ul",{className:"skills__data",children:n.map((function(e){return Object(u.jsx)(v,{skill:Object(x.a)(e)},e)}))})})]}),Object(u.jsxs)("section",{className:"soft-skills section",children:[Object(u.jsx)("h2",{className:"section-title",children:t}),Object(u.jsx)("div",{className:"skills__content bd-grid",children:Object(u.jsx)("ul",{className:"skills__data",children:c.map((function(e){return Object(u.jsx)(v,{skill:e},e)}))})})]})]})},v=function(e){var a=e.skill;return Object(u.jsxs)("li",{className:"skills__name",children:[Object(u.jsx)("span",{className:"skills__circle"})," ",a]})},_=function(e){var a=e.desc;return Object(u.jsx)("p",{className:"experience__description",children:a})},f=function(e){e.proyects;return Object(u.jsx)("section",{className:"proyects-experience section",id:"proyects",children:Object(u.jsx)("div",{className:"experience__container bd-grid"})})},N=function(e){var a=e.works;return Object(u.jsxs)("section",{className:"work-experience section",id:"experience",children:[Object(u.jsx)("h2",{className:"section-title",children:"Experience"}),Object(u.jsx)("div",{className:"experience__container bd-grid",children:a.map((function(e){return Object(u.jsx)(S,Object(o.a)({},e),e.company)}))})]})},S=function(e){var a=e.title,t=e.period,n=e.company,c=e.description;return Object(u.jsxs)("div",{className:"experience__content",children:[Object(u.jsxs)("div",{className:"experience__time",children:[Object(u.jsx)("span",{className:"experience__rounder"}),Object(u.jsx)("span",{className:"experience__line"})]}),Object(u.jsxs)("div",{className:"experience__data bd-grid",children:[Object(u.jsx)("h3",{className:"experience__title",children:a}),Object(u.jsxs)("span",{className:"experience__company",children:[Object(x.a)(t),"  ",Object(x.a)(n)]}),c.map((function(e,a){return Object(u.jsx)(_,{desc:Object(x.a)(e)},a)}))]})]})},k=function(e){var a=e.label,t=e.social;return Object(u.jsxs)("section",{className:"social section",children:[Object(u.jsx)("h2",{className:"section-title",children:a}),Object(u.jsx)("div",{className:"social__container bd-grid",children:t.map((function(e){return Object(u.jsx)(y,Object(o.a)({},e),e.name)}))})]})},y=function(e){var a=e.label,t=e.url,n=e.className;return Object(u.jsxs)("a",{href:t,target:"_blank",rel:"noreferrer",className:"social__link",children:[Object(u.jsx)("i",{className:"bx ".concat(n," social__icon")})," ",a]})},w=function(e){var a=e.label,t=e.description;return Object(u.jsxs)("section",{className:"profile section",id:"profile",children:[Object(u.jsx)("h2",{className:"section-title",children:a}),Object(u.jsx)("p",{className:"profile__description",children:t})]})},A=t(57),C=t(10),J=function(e){var a=e.menu,t=Object(n.useState)(!1),c=Object(l.a)(t,2),s=c[0],i=c[1],r=function(e){window.location.hash=e.target.hash,i(!s)};return Object(u.jsx)("header",{className:"l-header",id:"header",children:Object(u.jsxs)(A.a,{children:[Object(u.jsx)(C.b,{exact:!0,path:"/",children:Object(u.jsx)(C.a,{to:"/#home"})}),Object(u.jsxs)("nav",{className:"nav bd-container",children:[Object(u.jsx)("span",{className:"nav__logo",children:"Menu"}),Object(u.jsx)("div",{className:s?"nav__menu show-menu":"nav__menu",id:"nav-menu",children:Object(u.jsx)("ul",{className:"nav__list",children:a.map((function(e){var a=e.label,t=e.section,n=e.className;return Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsxs)(A.b,{className:"nav__link",activeClassName:"active-link",onClick:r,to:{pathname:"/",hash:t},isActive:function(e,a){return a.hash===t},children:[Object(u.jsx)("i",{className:"bx ".concat(n," nav__icon")})," ",a]})},a)}))})}),Object(u.jsx)("div",{className:"nav__toggle",id:"nav-toggle",onClick:function(){return i(!s)},children:Object(u.jsx)("i",{className:"bx bx-grid-alt"})})]})]})})},D=t(98),E=function(e){var a=e.name,t=e.ocupation,n=e.description;return Object(u.jsxs)(D.a,{children:[Object(u.jsxs)("title",{children:[a," - ",t]}),Object(u.jsx)("meta",{name:"description",content:n})]})},I={name:"Uzair Kamal",ocupation:"FullStack Software Developer",location:"Brussels Belgium",email:"uzairkamal@yahoo.com",telephone:"+32 467665587",image:"images/IMG_0105.jpg"},P={label:"Profile",description:"A results-driven, customer-focused, articulate and analytical Software Engineer who can think \u201cout of the box\u201d. Strong in\ndesign and integration problem solving skills. Expert in software development with database analysis and design.\nSkilled in developing business plans, requirements specifications, user documentation, and architectural systems research.\nStrong written and verbal communications. Interested in a challenging technical track career in an application development\nenvironment."},L={technicalLabel:"Technologies",softLabel:"Skills",technicalSkills:["Core Java","JavaEE(Servlets/JSP)","Spring","JSF(RichFaces,Icefaces)","Test Driven and Behaviour Driven Developement","Junit4/5,Mockito,Pact\nCucumber,Serenity,Cluecumber,\nWiremock,RestAssured","Docker,Jenkins,Ansible","React/ExtJs/JQuery/Prototype/JS","SQL,Oracle,Postgres,mySQL,\nHibernate,JPA,Liquibase","Sonar,Fortify,whitesource","Agile,Scrum,LESS,XtremeProgramming","Git,Maven","<small>Familiarity:<br><i>ElasticSearch, BigData stack, <br>Machine Learning Stack,<br> Android/C#/C/C++/Python, ApacheSolr,Lucene</small></i>"],softSkills:["Analysis capacity","Problem resolution","Quality Assurance","Customer Focused","Critical thinking","Teamwork","Communication","Proactivity","Creativity","Mentorship"]},F={label:"SOCIAL",social:[{label:"engruzairkamal",name:"linkedin",url:"https://www.linkedin.com/in/engruzairkamal",className:"bxl-linkedin-square"},{label:"UzairKamalYZ",name:"github",url:"https://github.com/UzairKamalYZ",className:"bxl-github"},{label:"UzairKamal",name:"blog",url:"https://uzairkamal.wordpress.com/",className:"bxl-wordpress"}]},M={works:[{title:"Sr. Software Engineer",period:"July.2017 - Present<BR>",company:"<h4><strong><u>Isabel Group </u><br> Brussels</strong></h4>",description:[" > Development and maintenance of Multi-Banking application with huge customer base."," > Applying modern day techniques for refactoring and keeping product quality upto the mark."," > Working within agile teams with XP approaches"," > develop and maintain by applying test-driven & behaviour-driven development approaches with focus on quality. ","<strong>Technologies</strong>: <i>Java, Spring, Spring-Boot{Rest,Aop,Data,security}, Oracle, Jenkins, Gitlab, Stash, JIRA, Docker,\nJunit4/5, Cucumber, Gherkin, Serenity, Cluecumber, WhiteSource, Pact, Selenium, Keycloak, Vault, Agile(Less/Scrum), Openshift, Websphere, Vault, reactJs, ExtJs, KeyCloak(basics)  </i>"]},{title:"Software Engineer",period:"May. 2017 - June. 2017<BR>",company:"<h4><Strong><u>Ansell HealthCare | Xorlogics</u></Strong> <br> Brussels</h4>",description:[" > Development of Project Management tool with support of back-end SmartSheet APIs"," > Managed whole project end to end"," > Requirement gathering and mockup creation for Project"," > Developing complete flow with focus on quality"," > Deployment on Azure Cloud ","<strong>Technologies</strong>: <i>Java, AngularJs, SmartSheet, Bootstrap, Azure-Cloud<i>"]},{title:"Software Engineer",period:"Dec. 2016 - May. 2017</br>",company:"<h4><Strong><u>NYU | Xorlogics</u></Strong> <br> AbuDhabi</h4>",description:[" > Android base application developement for collecting user feedbacks "," > Managed whole project end to end"," > Designing user feedback screens"," > Development of backend for feedback collection"]},{title:"Data Engineer",period:"Feb. 2016 - Dec. 2016</br>",company:"<h4><Strong><u>Sentiance | Xorlogics</u></Strong> <br> Islamabad(Remote)-Antwerp</h4>",description:[" > Development of new features in application with base in BigData"," > managed the deployments and environment for data heavy application","<strong>Technologies</strong>: <i>Java, ApacheHadoop, ApacheKafka, AWS Cloud, Docker,Ansible, ApacheSpark, ApacheStorm, Lambda Architecture, Python<i>"]},{title:"Software Engineer",period:"Jan.2013 - Jan. 2016</br>",company:"<h4><Strong><u>Interactive Group </u></Strong><br> Islamabad</h4>",description:[" > Development of an AI powered search engine "," > Data Collection and training model with Machine Learning techniques"," > Advance searching based on similarity, phonetics, context, occurrences and strength of relationship between documents. "]},{title:"Associate Software Engineer",period:"Feb2011- Dec2012</br>",company:"<h4><strong><u>Jabs Solutions | Sanmar.com </u></strong><br> Islamabad</h4>",description:[" > Developement of new features and maintenace of Sanmar.com"," > Developement of 'Design Center' in sanmar.com","<strong>Technologies</strong>: <i>Java, jQuery, Oracle<i>"]},{title:"Junior Software Engineer",period:"Nov2009- Feb2011</br>",company:"<hr><Strong><u>Pakvista Tech </u></Strong><br> Islamabad</h4>",description:[" > Developement new feature for Railways Tracking system","<strong>Technologies</strong>: <i>Java, JSF(IceFace, Vaddin)<i>"]}],academic:[{career:"MS Computer Science",date:"2016",institution:"Bahria University Islamabad"},{career:"BS Computer Engineering",date:"2009",institution:"University of Engineering & Technologies Peshawar"}],proyects:[]},B={menu:[{label:"Home",section:"#home",className:"bx-home"},{label:"Profile",section:"#profile",className:"bx-user"},{label:"Skills",section:"#skills",className:"bx-receipt"},{label:"Experience",section:"#experience",className:"bx-briefcase-alt"},{label:"Education",section:"#education",className:"bx-book"},{label:"Projects",section:"#proyects",className:"bx-award"}]},T=function(){var e="(min-width: 968px)",a=Object(n.useState)(window.matchMedia(e).matches),t=Object(l.a)(a,2),c=t[0],s=t[1];Object(n.useEffect)((function(){var a=window.matchMedia(e),t=function(){return s(a.matches)};return a.addEventListener("change",t),function(){return a.removeEventListener("change",t)}}),[c]);var i=I,r=P,m=L,d=F,b=M;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E,Object(o.a)(Object(o.a)({},i),r)),!c&&Object(u.jsx)(J,Object(o.a)({},B)),Object(u.jsx)("main",{className:"l-main bd-container",id:"bd-container",children:Object(u.jsxs)("div",{className:"resume",id:"area-cv",children:[Object(u.jsxs)("div",{className:"resume__left",children:[Object(u.jsx)(h,Object(o.a)({},i)),Object(u.jsx)(w,Object(o.a)({},r)),Object(u.jsx)(O,Object(o.a)({},m)),Object(u.jsx)(k,Object(o.a)({},d))]}),Object(u.jsxs)("div",{className:"resume__right",children:[Object(u.jsx)(N,Object(o.a)({},b)),Object(u.jsx)(p,Object(o.a)({},b)),Object(u.jsx)(f,Object(o.a)({},b))]})]})})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),r()}},[[376,1,2]]]);
//# sourceMappingURL=main.7d1231ee.chunk.js.map