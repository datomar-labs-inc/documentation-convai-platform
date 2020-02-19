(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{149:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(201)),c=r(203),s={id:"broadcast",title:"Broadcast",sidebar_label:"Broadcast"},i={id:"node-sdk/methods/broadcast",title:"Broadcast",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/node-sdk/methods/broadcast.md",permalink:"/docs/node-sdk/methods/broadcast",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/methods/broadcast.md",sidebar_label:"Broadcast",sidebar:"someSidebar",previous:{title:"Setup",permalink:"/docs/node-sdk/setup"},next:{title:"Delete Channel User",permalink:"/docs/node-sdk/methods/delete-channel-user"}},l=[{value:"Example",id:"example",children:[]},{value:"Reference",id:"reference",children:[]}],b={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use the broadcast() method to send an outgoing message to a set of users. The broadcast method returns a promise. The promise has a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../models/broadcast-result"}),"BroadcastResult")," object with the status of the broadcast and the number of users who were delivered the broadcast."),Object(o.b)("p",null,"The broadcast() method expects an object of type ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../models/broadcast-input"}),"BroadcastInput"),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"We have the following setup in Convai. Our link is of broadcast type with the Broadcast Type as 'broadcast-type-set-in-convai'"),Object(o.b)("img",{alt:"Broadcast Type Setup",src:Object(c.a)("img/node-sdk/methods/broadcast/1.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Then add the following code. Here we want to send a message on Facebook for all the users who have the firstName as John"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const {ConvaiAPIClient, UserQueryBuilder, UserQueryMode} = require('convai-sdk');\n\nconst convai = new ConvaiAPIClient(API_KEY);\n\n// The build() method from UserQueryBuilder helps in building a UserQuery object\nlet userQuery = new UserQueryBuilder(UserQueryMode.ALL)\n    .where('firstName')\n    .equals('John')\n    .build();\n\n// Here we are changing the context of the conversation which will then be used\n// in the broadcast response\nlet cm = new ContextModifier();\n\ncm.set('comment', 'Convai is <3');\ncm.setUser('saleBroadcastSentAt', new Date());\n\nconvai\n    .broadcast({broadcastType: 'broadcast-type-set-in-convai', channel: 'facebook', userQuery: userQuery, contextModifier: cm})\n    .then(response => console.log(response))\n    .catch(error => console.log(error));\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"You can then extract the variable in Convai using ",Object(o.b)("inlineCode",{parentName:"li"},'{{ d "comment" }}'))),Object(o.b)("h4",{id:"example-response"},"Example Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{ status: 'ok', users: 5 }\n")),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("h4",{id:"broadcastinput-broadcastinput-promisebroadcastresult"},Object(o.b)("inlineCode",{parentName:"h4"},"broadcast(input: BroadcastInput): Promise<BroadcastResult>")),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"input"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"../models/broadcast-input"}),"BroadcastInput")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object to send broadcast to users")))))}u.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(r),p=n,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return r?a.a.createElement(m,s({ref:t},l,{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},202:function(e,t,r){"use strict";var n=r(0),a=r(48);t.a=function(){return Object(n.useContext)(a.a)}},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(206);var n=r(202);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},204:function(e,t,r){var n=r(66),a=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},205:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}},206:function(e,t,r){"use strict";var n=r(17),a=r(34),o=r(204),c="".startsWith;n(n.P+n.F*r(205)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,r):t.slice(r,r+n.length)===n}})}}]);