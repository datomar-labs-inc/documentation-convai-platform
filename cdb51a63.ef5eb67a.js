(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),i=(n(0),n(269)),c=n(271),l={id:"text-link",title:"Text Link",sidebar_label:"Text Link"},o={id:"convai-studio/links/text-link",title:"Text Link",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/convai-studio/links/text-link.mdx",permalink:"/convai-studio/links/text-link",sidebar_label:"Text Link",sidebar:"someSidebar",previous:{title:"Data Equals Link",permalink:"/convai-studio/links/data-equals-link"},next:{title:"Error Link",permalink:"/convai-studio/links/error-link"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Mode",id:"mode",children:[]},{value:"Operations",id:"operations",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Text Link evaluates the user input text via its operation to determine the flow. This link should always be connected from an Input Node or Any Time System Node to another node."),Object(i.b)("img",{alt:"text link",src:Object(c.a)("img/links/text-link/image1.png")}),Object(i.b)("h2",{id:"mode"},"Mode"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"All")," - equivalent to AND (&&)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Any")," - equivalent to OR (||)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"None")," - equivalent to NOT (!)"))),Object(i.b)("h2",{id:"operations"},"Operations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"== text"),' - The user input should exact match "text"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"\\* text"),' - The user input has "text" exist')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"rx Regex")," - The user input matches the regular expression")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"^ text"),' - The user input starts with "text"'))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Link Type"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type of the Link")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Priority"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Priority of the Link")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mode"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mode of Text Link checks")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Match Value"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Match Value of text and operation")))))}p.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),O=r,d=p["".concat(c,".").concat(O)]||p[O]||s[O]||i;return n?a.a.createElement(d,l({ref:t},b,{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},270:function(e,t,n){"use strict";var r=n(0),a=n(49);t.a=function(){return Object(r.useContext)(a.a)}},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(272);var r=n(270);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},272:function(e,t,n){"use strict";var r=n(12),a=n(24),i=n(273),c="".startsWith;r(r.P+r.F*n(274)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,n):t.slice(n,n+r.length)===r}})},273:function(e,t,n){var r=n(73),a=n(25);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},274:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);