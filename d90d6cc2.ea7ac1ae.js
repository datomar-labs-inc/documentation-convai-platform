(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{204:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return u}));var r=n(1),i=n(9),o=(n(0),n(227)),a=(n(229),{id:"slack",title:"Slack Integration",sidebar_label:"Slack",description:"How to connect Slack with Convai Studio"}),c={id:"convai-studio/integrations/channels/slack",title:"Slack Integration",description:"How to connect Slack with Convai Studio",source:"@site/docs/convai-studio/integrations/channels/slack.mdx",permalink:"/convai-studio/integrations/channels/slack",sidebar_label:"Slack",sidebar:"someSidebar",previous:{title:"Facebook Integration",permalink:"/convai-studio/integrations/channels/facebook"},next:{title:"Twilio Integration",permalink:"/convai-studio/integrations/channels/twilio"}},s=[],l={rightToc:s};function u(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document outlines the process to integrate Slack with Convai Studio."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to Settings and click edit on an environment you would like to configure.")),Object(o.b)("div",{className:"admonition admonition-tip"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"NOTE: If you are doing a new integration, add it into the Development environment before any other environments."))))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"In the integration settings, click on Add Integration and select Slack. You will see something like this:")),Object(o.b)("p",null,"Coming Soon!!!"))}u.isMDXComponent=!0},227:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=i.a.createContext({}),u=function(t){var e=i.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},p=function(t){var e=u(t.components);return i.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},d=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(f,c({ref:e},l,{components:n})):i.a.createElement(f,c({ref:e},l))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},228:function(t,e,n){"use strict";var r=n(0),i=n(49);e.a=function(){return Object(r.useContext)(i.a)}},229:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(230);var r=n(228);function i(t){var e=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},230:function(t,e,n){"use strict";var r=n(12),i=n(24),o=n(231),a="".startsWith;r(r.P+r.F*n(232)("startsWith"),"String",{startsWith:function(t){var e=o(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},231:function(t,e,n){var r=n(73),i=n(25);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},232:function(t,e,n){var r=n(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}}}]);