(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=(n(0),n(145)),o=n(147);const i={id:"nlp",title:"NLP Node",sidebar_label:"NLP Node"},c={id:"nodes/nlp/nlp",title:"NLP Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/nodes/nlp/nlp.md",permalink:"/documentation-convai-platform/docs/nodes/nlp/nlp",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/nodes/nlp/nlp.md",sidebar_label:"NLP Node",sidebar:"someSidebar",previous:{title:"Spout Feedback Node",permalink:"/documentation-convai-platform/docs/nodes/spout/spout-feedback"},next:{title:"Facebook Mark Seen Node",permalink:"/documentation-convai-platform/docs/nodes/facebook/facebook-mark-seen"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={rightToc:l};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"The NLP node is used to send a query via NLP and get the result back. The result is then saved in the execution scope (d.) and can be used to extract data."),Object(a.b)("p",null,"NLP node is usually used in the extension graph so the intent of the user query is already available."),Object(a.b)("img",{alt:"NLP Node explained",src:Object(o.a)("img/nodes/nlp/nlp/1.png")}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"The configuration of the node is as defined below:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Title"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The title of the node")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NLP Engine"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The NLP engine to be used. Configure your NLP connection in the settings section")))))}b.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return n?a.a.createElement(f,c({ref:t},u,{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},146:function(e,t,n){"use strict";var r=n(0),a=n(32);t.a=function(){return Object(r.useContext)(a.a)}},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(146);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);