(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(196)),c=n(198),i={id:"add-channel-user",title:"Add Channel User Node",sidebar_label:"Add Channel User Node"},l={id:"nodes/stock/add-channel-user",title:"Add Channel User Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/nodes/stock/add-channel-user.md",permalink:"/docs/nodes/stock/add-channel-user",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/nodes/stock/add-channel-user.md",sidebar_label:"Add Channel User Node",sidebar:"someSidebar",previous:{title:"One Time Broadcast Node",permalink:"/docs/nodes/stock/one-time-broadcast"},next:{title:"Merge Users Node",permalink:"/docs/nodes/stock/merge-users"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Steps:",id:"steps",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The Add Channel User node is used to add another channel for an existing user. For example, let's assume a user is talking to the bot on messenger and they provide their phone number. Now in order to reach them via sms in future, you can add a channel for them and save it."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"It is important to note that Add Channel User automatically adds the new channel in the same Super User so we don't need to use the Merge Users node."))),Object(o.b)("h2",{id:"steps"},"Steps:"),Object(o.b)("p",null,"In order to understand the full flow, we currently have the following setup."),Object(o.b)("img",{alt:"One Time Broadcast Node explained",src:Object(c.a)("img/nodes/stock/add-channel-user/1.png")}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add a response node to ask for user phone number"),Object(o.b)("img",{alt:"Response to ask phone number",src:Object(c.a)("img/nodes/stock/add-channel-user/2.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add an input node to gather the user response.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Assuming that we are using NLP to capture and define the phone number, if the user response doesn't have a proper phone number, we fallback it to get the phone number again.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If a phone number is provided, we attempt to add the Twilio SMS user."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'{{ d "phone-number" }}\n')),Object(o.b)("img",{alt:"Response to ask phone number",src:Object(c.a)("img/nodes/stock/add-channel-user/3.png")}),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},Object(o.b)("em",{parentName:"li"},"Bonus")," - Twilio SMS will return an error which we can capture and fallback to a user response. This can be in cases where user mentions an arbitrary phone number like 1234567890.")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The configuration of the node is as defined below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Title"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The title of the node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Channel"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The channel to be added")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Script Editor"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Script to extract the data for the specific channel (Ex. Phone number for Twilio SMS)")))))}u.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},197:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(201);var r=n(197);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},199:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},200:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},201:function(e,t,n){"use strict";var r=n(17),a=n(34),o=n(199),c="".startsWith;r(r.P+r.F*n(200)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);