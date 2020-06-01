(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{170:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return u})),n.d(e,"GetStarted",(function(){return d})),n.d(e,"GetStartedChildren",(function(){return l})),n.d(e,"GetStartedChildrenButton",(function(){return p})),n.d(e,"default",(function(){return h}));var r=n(1),o=n(9),i=(n(0),n(219)),a=n(221),c={id:"introduction",title:"Introduction to Convai Studio",sidebar_label:"Introduction",description:"Introduction to the Convai Platform"},s={id:"convai-studio/introduction",title:"Introduction to Convai Studio",description:"Introduction to the Convai Platform",source:"@site/docs/convai-studio/introduction.mdx",permalink:"/convai-studio/introduction",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Understanding Convai",permalink:"/convai-studio/simple-bot/understanding-convai"}},u=[{value:"What is Convai Studio?",id:"what-is-convai-studio",children:[]},{value:"How does the Convai Platform works?",id:"how-does-the-convai-platform-works",children:[]},{value:"How do I get started?",id:"how-do-i-get-started",children:[]}],d=function(t){var e=t.children;return Object(i.b)("div",{style:{width:"100%",padding:"30px 0px"},className:"item shadow--md"},e)},l=function(t){var e=t.children;return Object(i.b)("div",{style:{textAlign:"center",margin:"0px auto"}},e)},p=function(t){var e=t.href,n=t.children;return Object(i.b)("div",{style:{textAlign:"center",marginTop:"20px"}},Object(i.b)("a",{href:e,className:"button button--secondary button--lg"},n))},b={rightToc:u,GetStarted:d,GetStartedChildren:l,GetStartedChildrenButton:p};function h(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-convai-studio"},"What is Convai Studio?"),Object(i.b)("p",null,"The Convai Platform is designed to automate conversations between businesses and their customers across multiple messaging channels. It provides the ability to make the chatbot once and launch it on different channels with zero to minimal changes."),Object(i.b)("h2",{id:"how-does-the-convai-platform-works"},"How does the Convai Platform works?"),Object(i.b)("p",null,"When a user sends a message via any channel, it is first parsed into a Convai readable format using the ",Object(i.b)("strong",{parentName:"p"},"Request Module")," in the ",Object(i.b)("strong",{parentName:"p"},"Extension Graph"),". Then it goes through to the ",Object(i.b)("strong",{parentName:"p"},"Main Graph")," using the ",Object(i.b)("strong",{parentName:"p"},"Main Module"),". All the bot logic is written in the ",Object(i.b)("strong",{parentName:"p"},"Main Graph")," using modules, nodes and links. After all the logic in the ",Object(i.b)("strong",{parentName:"p"},"Main Graph"),", the ",Object(i.b)("strong",{parentName:"p"},"Batch Responder")," parses the response back into a structure that is understandable by the messaging channel. Everything in Convai is a context modifier. The end result is based on how the context of the current execution is being modified."),Object(i.b)("img",{alt:"How does the Convai Platform works",src:Object(a.a)("img/convai-studio/how-it-works.png")}),Object(i.b)("h2",{id:"how-do-i-get-started"},"How do I get started?"),Object(i.b)("p",null,"You can start by creating a bot on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.convai.studio"}),"Convai Studio"),". In order to get started, you need to be part of an organization. Here is a step by step guide on how to build a simple bot. "),Object(i.b)(d,{mdxType:"GetStarted"},Object(i.b)(l,{mdxType:"GetStartedChildren"},"\ud83e\udd19 Ready to Build? \ud83e\udd19"),Object(i.b)(p,{href:"/convai-studio/simple-bot/quick-start",mdxType:"GetStartedChildrenButton"},"Get Started")))}h.isMDXComponent=!0},219:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=o.a.createContext({}),d=function(t){var e=o.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},l=function(t){var e=d(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=d(n),b=r,h=l["".concat(a,".").concat(b)]||l[b]||p[b]||i;return n?o.a.createElement(h,c({ref:e},u,{components:n})):o.a.createElement(h,c({ref:e},u))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},220:function(t,e,n){"use strict";var r=n(0),o=n(49);e.a=function(){return Object(r.useContext)(o.a)}},221:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(222);var r=n(220);function o(t){var e=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},222:function(t,e,n){"use strict";var r=n(12),o=n(24),i=n(223),a="".startsWith;r(r.P+r.F*n(224)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},223:function(t,e,n){var r=n(73),o=n(25);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},224:function(t,e,n){var r=n(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}}}]);