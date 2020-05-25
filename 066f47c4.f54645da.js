(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{132:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return b})),n.d(e,"default",(function(){return u}));var a=n(1),r=n(9),i=(n(0),n(216)),o=n(218),c={id:"chatbase",title:"Chatbase Integration",sidebar_label:"Chatbase",description:"How to connect Chatbase with Convai Studio"},s={id:"convai-studio/integrations/analytics/chatbase",title:"Chatbase Integration",description:"How to connect Chatbase with Convai Studio",source:"@site/docs/convai-studio/integrations/analytics/chatbase.mdx",permalink:"/convai-studio/integrations/analytics/chatbase",sidebar_label:"Chatbase",sidebar:"someSidebar",previous:{title:"Dashbot Node",permalink:"/convai-studio/nodes/analytics/dashbot"},next:{title:"Dashbot Integration",permalink:"/convai-studio/integrations/analytics/dashbot"}},b=[],l={rightToc:b};function u(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document outlines the process to integrate Chatbase with Convai Studio."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Go to Settings and click edit on an environment you would like to configure.")),Object(i.b)("div",{className:"admonition admonition-tip"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"NOTE: If you are doing a new integration, add it into the Development environment before any other environments."))))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the integration settings, click on Add Integration and select Chatbase. You will see something like this:"),Object(i.b)("img",{alt:"Add Chatbase Integration",src:Object(o.a)("img/convai-studio/integrations/analytics/chatbase/image5.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on Chatbase and a dialog like below will open"),Object(i.b)("img",{alt:"Chatbase Dialog",src:Object(o.a)("img/convai-studio/integrations/analytics/chatbase/image3.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to your Chatbase account and click on Add a Bot. Add: A bot name, Country, Industry and Business Case."),Object(i.b)("img",{alt:"Add Chatbase Integration",src:Object(o.a)("img/convai-studio/integrations/analytics/chatbase/image4.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"After you click on continue, copy the API key"),Object(i.b)("img",{alt:"Add Chatbase Integration",src:Object(o.a)("img/convai-studio/integrations/analytics/chatbase/image1.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go back to Convai and paste the API key.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Chatbase is now connected to the environment. For usage, see chatbase nodes."))))}u.isMDXComponent=!0},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var b=r.a.createContext({}),l=function(t){var e=r.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},u=function(t){var e=l(t.components);return r.a.createElement(b.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,b=s(t,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return n?r.a.createElement(m,c({ref:e},b,{components:n})):r.a.createElement(m,c({ref:e},b))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},217:function(t,e,n){"use strict";var a=n(0),r=n(49);e.a=function(){return Object(a.useContext)(r.a)}},218:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(219);var a=n(217);function r(t){var e=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},219:function(t,e,n){"use strict";var a=n(12),r=n(24),i=n(220),o="".startsWith;a(a.P+a.F*n(221)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return o?o.call(e,a,n):e.slice(n,n+a.length)===a}})},220:function(t,e,n){var a=n(73),r=n(25);t.exports=function(t,e,n){if(a(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},221:function(t,e,n){var a=n(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,!"/./"[t](e)}catch(r){}}return!0}}}]);