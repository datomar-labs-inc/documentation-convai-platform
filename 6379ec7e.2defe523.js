(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(203)),i=(n(205),{id:"facebook-profile-info",title:"Facebook Profile Info Node",sidebar_label:"Facebook Profile Info Node"}),c={id:"nodes/facebook/facebook-profile-info",title:"Facebook Profile Info Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/nodes/facebook/facebook-profile-info.mdx",permalink:"/docs/nodes/facebook/facebook-profile-info",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/nodes/facebook/facebook-profile-info.mdx",sidebar_label:"Facebook Profile Info Node",sidebar:"someSidebar",previous:{title:"Facebook Mark Seen Node",permalink:"/docs/nodes/facebook/facebook-mark-seen"},next:{title:"twilio-hang-up",permalink:"/docs/nodes/twilio/twilio-hang-up"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Facebook profile info node is used to get the user profile information from facebook. This only works if the user is either connected to the bot on the Facebook channel or has sent atleast 1 message to the bot in the past."),Object(o.b)("p",null,"The node saves the profile information in the current execution scope. So we can access the following information:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"First Name - ",Object(o.b)("inlineCode",{parentName:"li"},'{{d "fbProfile.firstName" }}')),Object(o.b)("li",{parentName:"ul"},"Last Name - ",Object(o.b)("inlineCode",{parentName:"li"},'{{d "fbProfile.lastName" }}')),Object(o.b)("li",{parentName:"ul"},"Gender - ",Object(o.b)("inlineCode",{parentName:"li"},'{{d "fbProfile.gender" }}')),Object(o.b)("li",{parentName:"ul"},"Locale - ",Object(o.b)("inlineCode",{parentName:"li"},'{{d "fbProfile.locale" }}')),Object(o.b)("li",{parentName:"ul"},"Name - ",Object(o.b)("inlineCode",{parentName:"li"},'{{d "fbProfile.name" }}')),Object(o.b)("li",{parentName:"ul"},"Profile picture - ",Object(o.b)("inlineCode",{parentName:"li"},'{{d "fbProfile.profilePicURL" }}')),Object(o.b)("li",{parentName:"ul"},"Timezone - ",Object(o.b)("inlineCode",{parentName:"li"},'{{d "fbProfile.timezone" }}'))),Object(o.b)("div",{className:"admonition admonition-tip"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Title")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The and title ",Object(o.b)("em",{parentName:"p"},"can")," include markdown."))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The configuration of the node is as defined below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Title"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The title of the node")))))}u.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=r,d=f["".concat(i,".").concat(p)]||f[p]||s[p]||o;return n?a.a.createElement(d,c({ref:t},b,{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(208);var r=n(204);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},206:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},207:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},208:function(e,t,n){"use strict";var r=n(17),a=n(34),o=n(206),i="".startsWith;r(r.P+r.F*n(207)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);