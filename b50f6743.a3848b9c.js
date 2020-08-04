(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{213:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),i=(r(0),r(269)),o=r(271),c={id:"error-link",title:"Error Link",sidebar_label:"Error Link"},l={id:"convai-studio/links/error-link",title:"Error Link",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/convai-studio/links/error-link.mdx",permalink:"/convai-studio/links/error-link",sidebar_label:"Error Link",sidebar:"someSidebar",previous:{title:"Text Link",permalink:"/convai-studio/links/text-link"},next:{title:"Channel Link",permalink:"/convai-studio/links/channel-link"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]},{value:"Configuration",id:"configuration",children:[]}],s={rightToc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Error Link determines the flow when the first of the two connected Nodes generates error."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"The Response Node Configuration has error"),Object(i.b)("img",{alt:"response node",src:Object(o.a)("img/links/error-link/image1.png")}),Object(i.b)("img",{alt:"error link",src:Object(o.a)("img/links/error-link/image2.png")}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Link Type"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of the Link")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Priority of the Link")))))}b.isMDXComponent=!0},269:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,d=b["".concat(o,".").concat(f)]||b[f]||p[f]||i;return r?a.a.createElement(d,c({ref:t},u,{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},270:function(e,t,r){"use strict";var n=r(0),a=r(49);t.a=function(){return Object(n.useContext)(a.a)}},271:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(272);var n=r(270);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},272:function(e,t,r){"use strict";var n=r(12),a=r(24),i=r(273),o="".startsWith;n(n.P+n.F*r(274)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,r):t.slice(r,r+n.length)===n}})},273:function(e,t,r){var n=r(73),a=r(25);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},274:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);