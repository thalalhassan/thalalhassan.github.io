(this.webpackJsonpthalalhassan=this.webpackJsonpthalalhassan||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(3),s=c(1),i=c(0),l=Object(s.createContext)(),r=function(e){var t=e.children,c=Object(s.useState)("dark"),n=Object(a.a)(c,2),r=n[0],o=n[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://thalalhassan.github.io",j="THR.",h={name:"Thalal Hassan",role:"Full Stack Engineer",description:"Developer adequate in all stages of advanced web development with the flair for creating elegant solutions and problem solving in the least amount of time. Bringing forth expertise in front-end and back-end development. Equipped with a diverse and promising skill-set and able to effectively self-manage during independent projects, as well as collaborate in a team setting.",social:{linkedin:"https://linkedin.com/in/thalalhassan",github:"https://github.com/thalalhassan"}},d=[{name:"Google Docs clone",description:"A simple reactjs, socket application that imitate basic functionality of google doc\n      ",stack:["JavaScript","React"],sourceCode:"https://github.com/thalalhassan/google-docs-clone"},{name:"Covid Tracker",description:"Application that uses covid public apis to show the covid cases",stack:["JavaScript","Vue"],sourceCode:"https://github.com/thalalhassan/vue-covid-tracker"},{name:"StyleUp Ecommerce",description:"Ecommerse application that using angular and nodejs",stack:["JavaScript","Angular","Nodejs"],sourceCode:"https://github.com/thalalhassan/vue-covid-tracker"}],b=["JavaScript","TypeScript","Go","Node","React","Nextjs","MySQL","PostgreSQL","MongoDB","Redis","Git","GitHub","Gitlab","Docker","Nginx","Ngrok","Visual Studio Code","Illustrator","Photoshop","Figma","Linux","windows"],u="thalal424@mail.com",m=c(16),O=c.n(m),p=c(14),x=c.n(p),f=c(18),v=c.n(f),g=c(17),k=c.n(g),N=(c(28),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(s.useState)(!1),o=Object(a.a)(r,2),j=o[0],h=o[1],m=function(){return h(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[d.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,b.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,u?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:n,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(i.jsx)(x.a,{}):Object(i.jsx)(O.a,{})}),Object(i.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(k.a,{}):Object(i.jsx)(v.a,{})})]})}),_=(c(32),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(N,{})]})}),w=c(11),C=c.n(w),S=c(19),y=c.n(S),E=(c(33),function(){var e=h.name,t=h.role,c=h.description,n=h.resume,a=h.social;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:c&&c}),Object(i.jsxs)("div",{className:"about__contact center",children:[n&&Object(i.jsx)("a",{href:n,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(i.jsxs)(i.Fragment,{children:[a.github&&Object(i.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(C.a,{})}),a.linkedin&&Object(i.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(y.a,{})})]})]})]})}),P=c(7),J=c.n(P),L=c(20),T=c.n(L),D=(c(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(C.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(T.a,{})})]})}),G=(c(36),function(){return d.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:d.map((function(e){return Object(i.jsx)(D,{project:e},J()())}))}),Object(i.jsx)("div",{className:"projects_bottom",children:Object(i.jsx)("a",{href:"https://github.com/thalalhassan","aria-label":"source code",className:"link link--icon",children:"More"})})]}):null}),R=(c(37),function(){return b.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:b.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),A=c(21),F=c.n(A),H=(c(38),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(F.a,{fontSize:"large"})})}):null}),I=(c(39),function(){return u?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(u),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),M=(c(40),function(){return Object(i.jsx)("footer",{className:"footer",children:(new Date).getFullYear()})}),B=(c(41),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(_,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(E,{}),Object(i.jsx)(G,{}),Object(i.jsx)(R,{}),Object(i.jsx)(I,{})]}),Object(i.jsx)(H,{}),Object(i.jsx)(M,{})]})});c(42);Object(n.render)(Object(i.jsx)(r,{children:Object(i.jsx)(B,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.79f3e9f5.chunk.js.map