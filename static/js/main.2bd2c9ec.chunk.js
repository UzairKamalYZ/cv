(this["webpackJsonpreact-resume"]=this["webpackJsonpreact-resume"]||[]).push([[0],{35:function(e,a,n){},53:function(e,a,n){"use strict";n.r(a);var t=n(1),i=n.n(t),c=n(25),s=n.n(c),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(a){var n=a.getCLS,t=a.getFID,i=a.getFCP,c=a.getLCP,s=a.getTTFB;n(e),t(e),i(e),c(e),s(e)}))},o=(n(35),n(5)),l=n(13),d=n(0),m=function(){return Object(d.jsx)("div",{className:"home__options",children:Object(d.jsx)("a",{className:"bx bxs-cloud-download change-theme",title:"downloadcv",id:"downloadButton",href:"/cv/cv.pdf",target:"_blank",children:Object(d.jsx)("small",{children:"Download"})})})},b=function(e){var a=e.name,n=e.ocupation,t=e.location,i=e.email,c=e.telephone,s=e.image;return Object(d.jsxs)("section",{className:"home",id:"home",children:[Object(d.jsxs)("div",{className:"home__container section bd-grid",children:[Object(d.jsxs)("div",{className:"home__data bd-grid",children:[Object(d.jsx)("img",{src:s,alt:"profile_image",className:"home__img"}),Object(d.jsx)("h1",{className:"home__title",children:Object(d.jsx)("strong",{children:a})}),Object(d.jsx)("h3",{className:"home__profession",children:n})]}),Object(d.jsxs)("div",{className:"home__address bd-grid",children:[Object(d.jsxs)("span",{className:"home__information",children:[Object(d.jsx)("i",{className:"bx bx-map home__icon"})," ",t]}),Object(d.jsxs)("span",{className:"home__information",children:[Object(d.jsx)("i",{className:"bx bx-envelope home__icon"})," ",Object(d.jsx)("a",{href:"mailto:"+i,children:i})]}),Object(d.jsxs)("span",{className:"home__information",children:[Object(d.jsx)("i",{className:"bx bx-phone home__icon"})," ",c]})]})]}),Object(d.jsx)(m,{})]})},h=function(e){var a=e.academic;return Object(d.jsxs)("section",{className:"academic-experience section",id:"education",children:[Object(d.jsx)("h2",{className:"section-title",children:"Education"}),Object(d.jsx)("div",{className:"education__container bd-grid",children:a.map((function(e){return Object(d.jsx)(j,Object(o.a)({},e),e.institution)}))})]})},j=function(e){var a=e.career,n=e.date,t=e.institution;return Object(d.jsxs)("div",{className:"education__content",children:[Object(d.jsxs)("div",{className:"education__time",children:[Object(d.jsx)("span",{className:"education__rounder"}),Object(d.jsx)("span",{className:"education__line"})]}),Object(d.jsxs)("div",{className:"education__data bd-grid",children:[Object(d.jsx)("h3",{className:"education__title",children:a}),Object(d.jsx)("span",{className:"education__year",children:n}),Object(d.jsx)("span",{className:"education__studies",children:t})]})]})},u=n(10),p=function(e){var a=e.technicalLabel,n=e.softLabel,t=e.technicalSkills,i=e.softSkills;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("section",{className:"technical-skills section",id:"skills",children:[Object(d.jsx)("h2",{className:"section-title",children:a}),Object(d.jsx)("div",{className:"skills__content bd-grid",children:Object(d.jsx)("ul",{className:"skills__data",children:t.map((function(e){return Object(d.jsx)(g,{skill:Object(u.a)(e)},e)}))})})]}),Object(d.jsxs)("section",{className:"soft-skills section",children:[Object(d.jsx)("h2",{className:"section-title",children:n}),Object(d.jsx)("div",{className:"skills__content bd-grid",children:Object(d.jsx)("ul",{className:"skills__data",children:i.map((function(e){return Object(d.jsx)(g,{skill:e},e)}))})})]})]})},g=function(e){var a=e.skill;return Object(d.jsxs)("li",{className:"skills__name",children:[Object(d.jsx)("span",{className:"skills__circle"})," ",a]})},x=function(e){var a=e.desc;return Object(d.jsx)("p",{className:"experience__description",children:a})},O=function(e){var a=e.works;return Object(d.jsxs)("section",{className:"work-experience section",id:"experience",children:[Object(d.jsx)("h2",{className:"section-title",children:"Experience"}),Object(d.jsx)("div",{className:"experience__container bd-grid",children:a.map((function(e){return Object(d.jsx)(v,Object(o.a)({},e),e.company)}))})]})},v=function(e){var a=e.title,n=e.period,t=e.company,i=e.description;return Object(d.jsxs)("div",{className:"experience__content",children:[Object(d.jsxs)("div",{className:"experience__time",children:[Object(d.jsx)("span",{className:"experience__rounder"}),Object(d.jsx)("span",{className:"experience__line"})]}),Object(d.jsxs)("div",{className:"experience__data bd-grid",children:[Object(d.jsx)("h3",{className:"experience__title",children:a}),Object(d.jsxs)("span",{className:"experience__company",children:[Object(u.a)(n),"  ",Object(u.a)(t)]}),i.map((function(e,a){return Object(d.jsx)(x,{desc:Object(u.a)(e)},a)}))]})]})},_=function(e){var a=e.label,n=e.social;return Object(d.jsxs)("section",{className:"social section",children:[Object(d.jsx)("h2",{className:"section-title",children:a}),Object(d.jsx)("div",{className:"social__container bd-grid",children:n.map((function(e){return Object(d.jsx)(f,Object(o.a)({},e),e.name)}))})]})},f=function(e){var a=e.label,n=e.url,t=e.className;return Object(d.jsxs)("a",{href:n,target:"_blank",rel:"noreferrer",className:"social__link",children:[Object(d.jsx)("i",{className:"bx ".concat(t," social__icon")})," ",a]})},N=function(e){var a=e.label,n=e.description;return Object(d.jsxs)("section",{className:"profile section",id:"profile",children:[Object(d.jsx)("h2",{className:"section-title",children:a}),Object(d.jsx)("p",{className:"profile__description",children:n})]})},S=n(16),k=n(3),w=function(e){var a=e.menu,n=Object(t.useState)(!1),i=Object(l.a)(n,2),c=i[0],s=i[1],r=function(e){window.location.hash=e.target.hash,s(!c)};return Object(d.jsx)("header",{className:"l-header",id:"header",children:Object(d.jsxs)(S.a,{children:[Object(d.jsx)(k.b,{exact:!0,path:"/",children:Object(d.jsx)(k.a,{to:"/#home"})}),Object(d.jsxs)("nav",{className:"nav bd-container",children:[Object(d.jsx)("span",{className:"nav__logo",children:"Menu"}),Object(d.jsx)("div",{className:c?"nav__menu show-menu":"nav__menu",id:"nav-menu",children:Object(d.jsx)("ul",{className:"nav__list",children:a.map((function(e){var a=e.label,n=e.section,t=e.className;return Object(d.jsx)("li",{className:"nav__item",children:Object(d.jsxs)(S.b,{className:"nav__link",activeClassName:"active-link",onClick:r,to:{pathname:"/",hash:n},isActive:function(e,a){return a.hash===n},children:[Object(d.jsx)("i",{className:"bx ".concat(t," nav__icon")})," ",a]})},a)}))})}),Object(d.jsx)("div",{className:"nav__toggle",id:"nav-toggle",onClick:function(){return s(!c)},children:Object(d.jsx)("i",{className:"bx bx-grid-alt"})})]})]})})},y=n(28),A=function(e){var a=e.name,n=e.ocupation,t=e.description;return Object(d.jsxs)(y.a,{children:[Object(d.jsxs)("title",{children:[a," - ",n]}),Object(d.jsx)("meta",{name:"description",content:t})]})},J={name:"Uzair Kamal",ocupation:"FullStack Software Developer",location:"Brussels Belgium",email:"uzairkamal@yahoo.com",telephone:"+32 46X XX XX XX",image:"images/IMG_0105.jpg"},D={label:"Profile",description:"A results-driven, customer-focused, articulate and analytical Software Engineer who can think \u201cout of the box\u201d. Strong in\ndesign and integration problem solving skills. Expert in software development with database analysis and design.\nSkilled in developing business plans, requirements specifications, user documentation, and architectural systems research.\nStrong written and verbal communications. Interested in a challenging technical track career in an application development\nenvironment."},C={technicalLabel:"Technologies",softLabel:"Skills",technicalSkills:["Core Java","JavaEE(Servlets/JSP)","Spring","JSF(RichFaces,Icefaces)","Test Driven and Behaviour Driven Developement","Junit4/5,Mockito,Pact\nCucumber,Serenity,Cluecumber,\nWiremock,RestAssured","Docker,Jenkins,Ansible","React/ExtJs/JQuery/Prototype/JS","SQL,Oracle,Postgres,mySQL,\nHibernate,JPA,Liquibase","Sonar,Fortify,WhiteSource","OpenApi, JsonApi, Swagger, ","Agile,Scrum,LESS,XP","Git,Maven","<small>Familiarity:<br><i>ElasticSearch, BigData stack, <br>Machine Learning Stack,<br> Android/C#/C/C++/Python, ApacheSolr,Lucene</small></i>"],softSkills:["Analysis capacity","Problem resolution","Quality Assurance","Customer Focused","Critical thinking","Teamwork","Communication","Proactivity","Creativity","Mentorship"]},E={label:"SOCIAL",social:[{label:"engruzairkamal",name:"linkedin",url:"https://www.linkedin.com/in/engruzairkamal",className:"bxl-linkedin-square"},{label:"UzairKamalYZ",name:"github",url:"https://github.com/UzairKamalYZ",className:"bxl-github"},{label:"UzairKamal",name:"blog",url:"https://uzairkamal.wordpress.com/",className:"bxl-wordpress"}]},P={works:[{title:"Sr. Software Engineer",period:"July.2017 - Present<BR>",company:"<h4><strong><u>Isabel Group </u><br> Brussels</strong></h4>",description:[" > Development and maintenance of Multi-Banking application with huge customer base."," > Applying modern day techniques for refactoring and keeping product quality upto the mark."," > Working within agile teams with XP approaches"," > develop and maintain by applying test-driven & behaviour-driven development approaches with focus on quality. ","<strong>Technologies</strong>: <i>Java, Spring, Spring-Boot{Rest,Aop,Data,security}, Oracle, Jenkins, Gitlab, Stash, JIRA, Docker,\nJunit4/5, Cucumber, Gherkin, Serenity, Cluecumber,OpenApi, JsonApi-Specs, Swagger, WhiteSource, Pact, Selenium, Keycloak, Vault, Agile(Less/Scrum), Openshift, Websphere, Vault, reactJs, ExtJs, KeyCloak(basics)  </i>"]},{title:"Software Engineer",period:"May. 2017 - June. 2017<BR>",company:"<h4><Strong><u>Ansell HealthCare | Xorlogics</u></Strong> <br> Brussels</h4>",description:[" > Development of Project Management tool with support of back-end SmartSheet APIs"," > Managed whole project end to end"," > Requirement gathering and mockup creation for Project"," > Developing complete flow with focus on quality"," > Deployment on Azure Cloud ","<strong>Technologies</strong>: <i>Java, AngularJs, SmartSheet, Bootstrap, Azure-Cloud<i>"]},{title:"Software Engineer",period:"Dec. 2016 - May. 2017</br>",company:"<h4><Strong><u>NYU | Xorlogics</u></Strong> <br> AbuDhabi</h4>",description:[" > Android base application developement for collecting user feedbacks "," > Managed whole project end to end"," > Designing user feedback screens"," > Development of backend for feedback collection"]},{title:"Data Engineer",period:"Feb. 2016 - Dec. 2016</br>",company:"<h4><Strong><u>Sentiance | Xorlogics</u></Strong> <br> Islamabad(Remote)-Antwerp</h4>",description:[" > Development of new features in application with base in BigData"," > managed the deployments and environment for data heavy application","<strong>Technologies</strong>: <i>Java, ApacheHadoop, ApacheKafka, AWS Cloud, Docker,Ansible, ApacheSpark, ApacheStorm, Lambda Architecture, Python<i>"]},{title:"Software Engineer",period:"Jan.2013 - Jan. 2016</br>",company:"<h4><Strong><u>Interactive Group </u></Strong><br> Islamabad</h4>",description:[" > Development of an AI powered search engine "," > Data Collection and training model with Machine Learning techniques"," > Advance searching based on similarity, phonetics, context, occurrences and strength of relationship between documents. "]},{title:"Associate Software Engineer",period:"Feb2011- Dec2012</br>",company:"<h4><strong><u>Jabs Solutions | Sanmar.com </u></strong><br> Islamabad</h4>",description:[" > Developement of new features and maintenace of Sanmar.com"," > Developement of 'Design Center' in sanmar.com","<strong>Technologies</strong>: <i>Java, jQuery, Oracle<i>"]},{title:"Junior Software Engineer",period:"Nov2009- Feb2011</br>",company:"<hr><Strong><u>Pakvista Tech </u></Strong><br> Islamabad</h4>",description:[" > Developement new feature for Railways Tracking system","<strong>Technologies</strong>: <i>Java, JSF(IceFace, Vaddin)<i>"]}],academic:[{career:"MS Computer Science",date:"2016",institution:"Bahria University Islamabad"},{career:"BS Computer Engineering",date:"2009",institution:"University of Engineering & Technologies Peshawar"}]},L={menu:[{label:"Home",section:"#home",className:"bx-home"},{label:"Profile",section:"#profile",className:"bx-user"},{label:"Skills",section:"#skills",className:"bx-receipt"},{label:"Experience",section:"#experience",className:"bx-briefcase-alt"},{label:"Education",section:"#education",className:"bx-book"}]},B=function(){var e="(min-width: 968px)",a=Object(t.useState)(window.matchMedia(e).matches),n=Object(l.a)(a,2),i=n[0],c=n[1];Object(t.useEffect)((function(){var a=window.matchMedia(e),n=function(){return c(a.matches)};return a.addEventListener("change",n),function(){return a.removeEventListener("change",n)}}),[i]);var s=J,r=D,m=C,j=E,u=P;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(A,Object(o.a)(Object(o.a)({},s),r)),!i&&Object(d.jsx)(w,Object(o.a)({},L)),Object(d.jsx)("main",{className:"l-main bd-container",id:"bd-container",children:Object(d.jsxs)("div",{className:"resume",id:"area-cv",children:[Object(d.jsxs)("div",{className:"resume__left",children:[Object(d.jsx)(b,Object(o.a)({},s)),Object(d.jsx)(N,Object(o.a)({},r)),Object(d.jsx)(p,Object(o.a)({},m)),Object(d.jsx)(_,Object(o.a)({},j))]}),Object(d.jsxs)("div",{className:"resume__right",children:[Object(d.jsx)(O,Object(o.a)({},u)),Object(d.jsx)(h,Object(o.a)({},u))]})]})})]})};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),r()}},[[53,1,2]]]);
//# sourceMappingURL=main.2bd2c9ec.chunk.js.map