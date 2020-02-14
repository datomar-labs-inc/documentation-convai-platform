(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),o=(n(0),n(145)),c=n(147),i={id:"delete-data",title:"Delete Data Node",sidebar_label:"Delete Data Node"},l={id:"nodes/stock/delete-data",title:"Delete Data Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/nodes/stock/delete-data.md",permalink:"/documentation-convai-platform/docs/nodes/stock/delete-data",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/nodes/stock/delete-data.md",sidebar_label:"Delete Data Node",sidebar:"someSidebar",previous:{title:"Set Data Node",permalink:"/documentation-convai-platform/docs/nodes/stock/set-data"},next:{title:"One Time Broadcast Node",permalink:"/documentation-convai-platform/docs/nodes/stock/one-time-broadcast"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={rightToc:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The delete node is used to delete a key-value pair. The pair can be deleted from the execution scope data (d.), session scope data (s.) and user data (u.)"),Object(o.b)("img",{alt:"Delete Data Node explained",src:Object(c.a)("img/nodes/stock/delete-data/1.png")}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The configuration of the node is as defined below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Title"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The title of the node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Field Name"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of the variable to be deleted. Format (scope.variableName)")))))}b.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),u=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(c,".").concat(p)]||b[p]||s[p]||o;return n?r.a.createElement(m,i({ref:t},d,{components:n})):r.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},146:function(e,t,n){"use strict";var a=n(0),r=n(32);t.a=function(){return Object(a.useContext)(r.a)}},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(146);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);