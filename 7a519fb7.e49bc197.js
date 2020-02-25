(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),o=(r(0),r(203)),c={id:"user-query-mode",title:"User Query Mode",sidebar_label:"User Query Mode"},l={id:"node-sdk/enums/user-query-mode",title:"User Query Mode",description:"## Reference",source:"@site/docs/node-sdk/enums/user-query-mode.mdx",permalink:"/docs/node-sdk/enums/user-query-mode",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/enums/user-query-mode.mdx",sidebar_label:"User Query Mode",sidebar:"someSidebar",previous:{title:"Log Level",permalink:"/docs/node-sdk/enums/log-level"},next:{title:"User Query Operation",permalink:"/docs/node-sdk/enums/user-query-operation"}},i=[{value:"Reference",id:"reference",children:[]}],u={rightToc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("p",null,"Different query modes available for filtering"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ANY"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Equivalent of Full Join. Atleast one condition should be true for the users.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ALL"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Equivalent of Inner Join. All the conditions must be true for the users.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NONE"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Equivalent of not (!). None of the condition should be true for the users.")))))}b.isMDXComponent=!0},203:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},d=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=b(r),s=n,m=d["".concat(c,".").concat(s)]||d[s]||p[s]||o;return r?a.a.createElement(m,l({ref:t},u,{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);