(this.webpackJsonppersonal_portfolio=this.webpackJsonppersonal_portfolio||[]).push([[0],[,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/github.7c2b2770.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/linkedin.78cfdceb.svg"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/coding.d7a9ea16.svg"},function(e,s,t){},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/portfolio.1da2fb9e.png"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/prochrom.e1160d18.png"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/sik.f8777e27.png"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/travel.cc8b93b2.png"},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/pos.4fadad90.png"},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s),s.default=t.p+"static/media/CV.f28e0a77.pdf"},function(e,s,t){"use strict";t.r(s);var c=t(1),i=t.n(c),a=t(4),n=t.n(a),l=(t(9),t(10),t(11),t(2)),r=(t(12),t.p+"static/media/logo.e427d965.svg"),o=(t(13),t(0));var j=function(){return Object(o.jsx)("div",{className:"web",children:Object(o.jsxs)("ul",{className:"nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)("a",{href:"#projects",className:"nav-item-link",children:[Object(o.jsx)("i",{className:"fi-rr-edit-alt nav-icon"}),"Projects"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"#skills",className:"nav-item-link",children:[Object(o.jsx)("i",{className:"fi-rr-laptop nav-icon"}),"Skills"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"#contact",className:"nav-item-link",children:[Object(o.jsx)("i",{className:"fi-rr-user nav-icon"}),"Contact"]})})]})})};t(15);var d=function(e){var s=e.isOpen,t=e.setIsOpen,c=function(){return t(!s)};return Object(o.jsxs)("div",{className:"mobile",children:[Object(o.jsx)("div",{className:"close-icon",onClick:function(){return t(!s)},children:Object(o.jsx)("i",{className:"fi-rr-cross-circle"})}),Object(o.jsx)("div",{className:"mobile-menu",children:Object(o.jsxs)("ul",{className:"nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)("a",{href:"#projects",className:"nav-item-link",onClick:c,children:[Object(o.jsx)("i",{className:"fi-rr-edit-alt nav-icon"}),"Projects"]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)("a",{href:"#skills",className:"nav-item-link",onClick:c,children:[Object(o.jsx)("i",{className:"fi-rr-laptop nav-icon"}),"Skills"]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsxs)("a",{href:"#contact",className:"nav-item-link",onClick:c,children:[Object(o.jsx)("i",{className:"fi-rr-user nav-icon"}),"Contact"]})})]})})]})};var b=function(){var e=Object(c.useState)(!1),s=Object(l.a)(e,2),t=s[0],i=s[1];return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("a",{href:"#hero",children:Object(o.jsx)("img",{src:r,alt:"_blank",className:"logo"})}),Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)("div",{className:"menu-web",children:Object(o.jsx)(j,{})}),Object(o.jsxs)("div",{className:"menu-mobile",children:[Object(o.jsxs)("div",{onClick:function(){return i(!t)},children:[" ",Object(o.jsx)("i",{className:"fi-rr-apps menu-icon"})]}),t&&Object(o.jsx)(d,{isOpen:t,setIsOpen:i})," "]})]})]})};t(16);var m=function(){return Object(o.jsx)("div",{className:"footer",children:"\xa92021 | Design by Pero Soldat"})},h=(t(17),t(18),t(19),[{platform:"github",link:"https://www.github.com/peross",icon:t(20).default},{platform:"linkedin",link:"https://www.linkedin.com/in/pero-soldat-557779176/",icon:t(21).default}]);var u=function(){var e=h;return Object(o.jsx)("div",{className:"social-contact",children:e.map((function(e){return Object(o.jsx)("a",{href:e.link,target:"_blank",children:Object(o.jsx)("div",{className:"social-icon-div",children:Object(o.jsx)("img",{src:e.icon,className:"social-icon",alt:"_blank"})})})}))})};var O=function(){var e=Object(c.useState)(""),s=Object(l.a)(e,2),i=s[0],a=s[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/Api/Data/quotes.json").then((function(e){return e.json()})).then((function(e){var s=Math.floor(Math.random()*e.length);a(e[s])}))}),[]),Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsxs)("div",{className:"hero-top",children:[Object(o.jsxs)("div",{className:"hero-top-info",children:["Hi there\ud83e\udd17\ud83d\udc4b, I am ",Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"hero-top-info-name",children:"Pero Soldat"}),". ",Object(o.jsx)("br",{}),"I love experimenting with the web."]}),Object(o.jsx)("div",{className:"hero-top-photo",children:Object(o.jsx)("img",{src:t(22).default,alt:"_blank",className:"hero-img"})})]}),Object(o.jsx)(u,{}),Object(o.jsxs)("div",{className:"quotes",children:[Object(o.jsx)("p",{className:"quote",children:i.en}),Object(o.jsx)("p",{className:"author",children:i.author})]})]})},p=(t(23),[{id:1,title:"Personal Portfolio",about:"Personal portfolio website.",tags:["React","HTML","CSS","Sass","JavaScript"],demo:"https://peross.github.io/reactjs_personal_portfolio/",github:"https://github.com/peross/reactjs_personal_portfolio",image:t(24).default},{id:2,title:"Locksmith Workshop",about:"Locksmith workshop website.",tags:["HTML","CSS","Sass","JavaScript"],demo:"https://peross.github.io/Prochrom/",github:"https://github.com/peross/Prochrom",image:t(25).default},{id:3,title:"Restaurant",about:"Restaurant website.",tags:["HTML","CSS","Sass","JavaScript"],demo:"https://peross.github.io/HiltonWebsite/",github:"https://github.com/peross/HiltonWebsite",image:t(26).default},{id:4,title:"Travel Agency",about:"Travel agency website.",tags:["HTML","CSS","Sass","JavaScript"],demo:"https://peross.github.io/TravelAgency/",github:"https://github.com/peross/TravelAgency",image:t(27).default},{id:5,title:"Point Of Sale",about:"Point of sale desktop application.",tags:["C#","SQL"],github:"https://github.com/peross/POS",image:t(28).default}]);t(29);var f=function(e){var s=e.project;return Object(o.jsxs)("div",{className:"project-card",children:[Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("h3",{className:"project-title",children:s.title}),Object(o.jsxs)("div",{className:"project-links",children:[s.demo&&Object(o.jsx)("a",{className:"project-link",href:s.demo,target:"_blank",children:Object(o.jsxs)("div",{className:"link-btn",children:[Object(o.jsx)("i",{className:"fi fi-rr-globe"}),"Demo"]})}),s.github&&Object(o.jsx)("a",{className:"project-link",href:s.github,target:"_blank",children:Object(o.jsxs)("div",{className:"link-btn",children:[Object(o.jsx)("i",{className:"devicon-github-original colored"}),"Github"]})})]}),Object(o.jsx)("p",{children:s.about}),Object(o.jsx)("div",{className:"project-tags",children:s.tags.map((function(e){return Object(o.jsx)("p",{className:"tag",children:e})}))})]}),Object(o.jsx)("img",{src:s.image,className:"project-photo",alt:"_blank"})]})};t(30);var x=function(){return Object(o.jsx)("div",{className:"separator"})};var v=function(){var e=p;return Object(o.jsxs)("div",{className:"projects",children:[Object(o.jsx)(x,{}),Object(o.jsx)("h1",{className:"setion-title",children:"Projects"}),Object(o.jsx)("div",{children:e.map((function(e){return Object(o.jsx)(f,{project:e})}))})]})},N=(t(31),[{type:"Frontend",list:[{name:"HTML",icon:Object(o.jsx)("i",{className:"devicon-html5-plain colored"})},{name:"CSS",icon:Object(o.jsx)("i",{class:"devicon-css3-plain colored"})},{name:"Sass",icon:Object(o.jsx)("i",{class:"devicon-sass-original colored"})},{name:"JavaScript",icon:Object(o.jsx)("i",{class:"devicon-javascript-plain colored"})},{name:"jQuery",icon:Object(o.jsx)("i",{class:"devicon-jquery-plain colored"})},{name:"ReactJS",icon:Object(o.jsx)("i",{class:"devicon-react-original colored"})}]},{type:"Backend",list:[{name:"C#",icon:Object(o.jsx)("i",{class:"devicon-csharp-plain colored"})},{name:"SQLServer",icon:Object(o.jsx)("i",{className:"devicon-microsoftsqlserver-plain"})}]}]);t(32);var g=function(e){var s=e.skill;return Object(o.jsxs)("div",{className:"skill-card",children:[Object(o.jsx)("div",{className:"skill-icon",children:s.icon}),Object(o.jsx)("p",{className:"skill-name",children:s.name})]})};var k=function(){var e=N;return Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsx)(x,{}),Object(o.jsx)("h1",{className:"section-title",children:"Skills"}),Object(o.jsx)("div",{className:"skills-container",children:e.map((function(e){return Object(o.jsxs)("div",{className:"skills-section",children:[Object(o.jsx)("h3",{className:"skills-section-title",children:e.type}),Object(o.jsx)("div",{className:"skills-list",children:e.list.map((function(e){return Object(o.jsx)(g,{skill:e})}))})]})}))})]})};t(33);var S=function(){return Object(o.jsxs)("div",{className:"contact",children:[Object(o.jsx)(x,{}),Object(o.jsx)("h3",{className:"section-title",children:"Contact"}),Object(o.jsxs)("div",{className:"contact-container",children:[Object(o.jsxs)("div",{className:"contact-left-side",children:[Object(o.jsx)("p",{children:"Want to get in touch? Contact me via email"}),Object(o.jsx)("p",{className:"email",children:"pero.soldat@gmail.com"})]}),Object(o.jsx)("div",{className:"contact-right-side",children:Object(o.jsxs)("a",{download:!0,href:t(34).default,children:[Object(o.jsx)("i",{className:"fi-rr-cloud-download download-icon"}),"Download Resume"]})})]})]})};var w=function(){return Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)("section",{id:"hero",children:Object(o.jsx)(O,{})}),Object(o.jsx)("section",{id:"projects",children:Object(o.jsx)(v,{})}),Object(o.jsx)("section",{id:"skills",children:Object(o.jsx)(k,{})}),Object(o.jsx)("section",{id:"contact",children:Object(o.jsx)(S,{})})]})};var C=function(){return Object(o.jsx)("div",{className:"home",children:Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{}),Object(o.jsx)(w,{}),Object(o.jsx)(m,{})]})})};var P=function(){return Object(o.jsx)(C,{})};n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.8181b01f.chunk.js.map