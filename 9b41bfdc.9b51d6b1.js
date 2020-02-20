(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(201)),c=n(203),i={id:"one-time-broadcast",title:"One Time Broadcast Node",sidebar_label:"One Time Broadcast Node"},l={id:"nodes/stock/one-time-broadcast",title:"One Time Broadcast Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/nodes/stock/one-time-broadcast.md",permalink:"/docs/nodes/stock/one-time-broadcast",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/nodes/stock/one-time-broadcast.md",sidebar_label:"One Time Broadcast Node",sidebar:"someSidebar",previous:{title:"Delete Data Node",permalink:"/docs/nodes/stock/delete-data"},next:{title:"Add Channel User Node",permalink:"/docs/nodes/stock/add-channel-user"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The one time broadcast is used to send an instant message to a user on any channel irrespective of the channel they are currently working on. It will only work if the channels are connected for the user."),Object(o.b)("p",null,"For example, if the user is currently connected on Facebook Messenger and you want to send a verification code via SMS, add a one time broadcast node, select an SMS channel (like Twilio SMS) and then connect it to the flow you want to send."),Object(o.b)("p",null,"Typically, a one time broadcast is followed by a response node."),Object(o.b)("img",{alt:"One Time Broadcast Node explained",src:Object(c.a)("img/nodes/stock/one-time-broadcast/1.png")}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The configuration of the node is as defined below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Title"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The title of the node")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Asynchronous"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Determine if the message should be sent asynchronously or not")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Channel"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The channel on which the message should be sent")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Broadcast Type"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A custom name you can provide to the broadcast")))))}u.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return n?a.a.createElement(m,i({ref:t},s,{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(206);var r=n(202);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},204:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},205:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},206:function(e,t,n){"use strict";var r=n(17),a=n(34),o=n(204),c="".startsWith;r(r.P+r.F*n(205)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);