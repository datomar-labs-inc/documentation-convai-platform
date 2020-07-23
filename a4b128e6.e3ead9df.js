(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(236)),c=n(238),l={id:"channel-link",title:"Channel Link",sidebar_label:"Channel Link"},o={id:"convai-studio/links/channel-link",title:"Channel Link",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/convai-studio/links/channel-link.mdx",permalink:"/convai-studio/links/channel-link",sidebar_label:"Channel Link",sidebar:"someSidebar",previous:{title:"Error Link",permalink:"/convai-studio/links/error-link"},next:{title:"Broadcast Type Link",permalink:"/convai-studio/links/broadcast-type-link"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Mode",id:"mode",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Channel Link is used to determine the flow on the channel. That is, if the current channel (we are executing the bot in Facebook/Twilio) is Facebook/Twilio, the flow continues to the node it is connected. "),Object(i.b)("img",{alt:"facebook/twilio",src:Object(c.a)("img/links/channel-link/image1.png")}),Object(i.b)("p",null,"If the current channel is Dev Console (we are executing the bot in Dev Console), the flow will not go to the connected Node."),Object(i.b)("img",{alt:"dev console",src:Object(c.a)("img/links/channel-link/image2.png")}),Object(i.b)("h2",{id:"mode"},"Mode"),Object(i.b)("p",null,"You can select multiple channels by Shift+Click"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"All")," - equivalent to AND (&&)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Any")," - equivalent to OR (||)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"None")," - equivalent to NOT (!)"))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Link Type"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type of the Link")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Priority"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Priority of the Link")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mode"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mode of Text Link checks")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Channels"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Channels to be selected")))))}p.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,O=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(O,l({ref:t},b,{components:n})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},237:function(e,t,n){"use strict";var r=n(0),a=n(49);t.a=function(){return Object(r.useContext)(a.a)}},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(239);var r=n(237);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},239:function(e,t,n){"use strict";var r=n(12),a=n(24),i=n(240),c="".startsWith;r(r.P+r.F*n(241)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,n):t.slice(n,n+r.length)===r}})},240:function(e,t,n){var r=n(73),a=n(25);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},241:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);