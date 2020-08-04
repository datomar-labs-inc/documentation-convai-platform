(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{245:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(269)),c={id:"context-modifier-type",title:"Context Modifier Type",sidebar_label:"Context Modifier Type"},i={id:"node-sdk/enums/context-modifier-type",title:"Context Modifier Type",description:"## Reference",source:"@site/docs/node-sdk/enums/context-modifier-type.mdx",permalink:"/node-sdk/enums/context-modifier-type",sidebar_label:"Context Modifier Type",sidebar:"someSidebar",previous:{title:"User Query Result",permalink:"/node-sdk/models/user-query-result"},next:{title:"Context Modifier Operation",permalink:"/node-sdk/enums/context-modifier-operation"}},l=[{value:"Reference",id:"reference",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("p",null,"Different scoped variable types"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CONTEXT"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variable scope in the current execution only. For example, a message")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SESSION"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variable scope in the current session. For example, liveChatStartedAt")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USER"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variable scope in the user data. For example, firstName")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ENVIRONMENT"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variable scope in the bot environment. For example, GOOGLE_SHEET_KEY")))))}p.isMDXComponent=!0},269:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,O=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(O,i({ref:t},b,{components:r})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);