(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(1),a=(n(0),n(147));n(149);const o={id:"merge-users",title:"Merge Users Node",sidebar_label:"Merge Users Node"},c={id:"nodes/stock/merge-users",title:"Merge Users Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/nodes/stock/merge-users.md",permalink:"/documentation-convai-platform/docs/nodes/stock/merge-users",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/nodes/stock/merge-users.md",sidebar_label:"Merge Users Node",sidebar:"someSidebar",previous:{title:"Add Channel User Node",permalink:"/documentation-convai-platform/docs/nodes/stock/add-channel-user"},next:{title:"Script Node",permalink:"/documentation-convai-platform/docs/nodes/stock/script"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Configuration",id:"configuration",children:[]}],l={rightToc:i};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"The Merge Users node is used to merge 2 users on different channels into single super user."),Object(a.b)("p",null,"Let's say a user has in the past interacted with the bot on SMS and on Facebook. Now when they provide their phone number via facebook, we know that it is the same user and we can merge the two user profiles."),Object(a.b)("h2",{id:"steps"},"Steps"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"})),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"The configuration of the node is as defined below:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Title"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The title of the node")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Asynchronous"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Determine if the message should be sent asynchronously or not")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mode"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Any - One of the condition should satisfy",Object(a.b)("br",null),"All - All the conditions should satisy",Object(a.b)("br",null),"None - None of the conditions should satisfy")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Script Editor"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Script to extract the data for the specific channel (Ex. Phone number for Twilio SMS)")))))}s.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},148:function(e,t,n){"use strict";var r=n(0),a=n(32);t.a=function(){return Object(r.useContext)(a.a)}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(148);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);