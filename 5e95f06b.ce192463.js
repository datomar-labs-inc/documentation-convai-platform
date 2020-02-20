(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(201)),i=n(203),c={id:"input",title:"Input Node",sidebar_label:"Input Node"},u={id:"nodes/stock/input",title:"Input Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/nodes/stock/input.md",permalink:"/docs/nodes/stock/input",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/nodes/stock/input.md",sidebar_label:"Input Node",sidebar:"someSidebar",previous:{title:"Basic Node",permalink:"/docs/nodes/stock/basic"},next:{title:"Response Node",permalink:"/docs/nodes/stock/response"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"The input node is used to gather data from the user. It is usually used after a response (Question) node. The input node pauses further interaction with the chatbot."),Object(a.b)("p",null,"In order to continue the conversation from the same place, add higher priority to the connecting link between the input and the next node. For example, in the picture below, the link between the \u201cUser Feedback\u201d has been given higher priority than the Normal Response."),Object(a.b)("p",null,"Also note, \u201cNo Feedback Response\u201d has been given the highest priority to factor for cases where the user doesn\u2019t want to provide feedback."),Object(a.b)("img",{alt:"Input Node explained",src:Object(i.a)("img/nodes/stock/input/1.png")}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"The configuration of the node is as defined below:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Title"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The title of the node")))))}p.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(f,c({ref:t},s,{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";var r=n(0),o=n(48);t.a=function(){return Object(r.useContext)(o.a)}},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(206);var r=n(202);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},204:function(e,t,n){var r=n(66),o=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},205:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}},206:function(e,t,n){"use strict";var r=n(17),o=n(34),a=n(204),i="".startsWith;r(r.P+r.F*n(205)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);