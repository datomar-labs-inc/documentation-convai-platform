(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,s=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(s,i({ref:t},b,{components:n})):a.a.createElement(s,i({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(1),a=(n(0),n(147));const o={id:"context-modifier-type",title:"Context Modifier Type",sidebar_label:"Context Modifier Type"},c={id:"node-sdk/enums/context-modifier-type",title:"Context Modifier Type",description:"## Reference",source:"@site/docs/node-sdk/enums/context-modifier-type.md",permalink:"/documentation-convai-platform/docs/node-sdk/enums/context-modifier-type",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/enums/context-modifier-type.md",sidebar_label:"Context Modifier Type",sidebar:"someSidebar",previous:{title:"User Query Result",permalink:"/documentation-convai-platform/docs/node-sdk/models/user-query-result"},next:{title:"Context Modifier Operation",permalink:"/documentation-convai-platform/docs/node-sdk/enums/context-modifier-operation"}},i=[{value:"Reference",id:"reference",children:[]}],l={rightToc:i};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("p",null,"Different scoped variable types"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"CONTEXT"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"0"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Variable scope in the current execution only. For example, a message")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SESSION"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Variable scope in the current session. For example, liveChatStartedAt")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"USER"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Variable scope in the user data. For example, firstName")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ENVIRONMENT"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Variable scope in the bot environment. For example, GOOGLE_SHEET_KEY")))))}b.isMDXComponent=!0}}]);