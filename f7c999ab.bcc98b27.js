(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),l=(n(0),n(216)),c={id:"delete-channel-user",title:"Delete Channel User",sidebar_label:"Delete Channel User"},o={id:"node-sdk/methods/delete-channel-user",title:"Delete Channel User",description:"deleteChannelUser() method is used to delete the channel for a user. The deleteChannelUser returns the channel user that was deleted.",source:"@site/docs/node-sdk/methods/delete-channel-user.mdx",permalink:"/node-sdk/methods/delete-channel-user",sidebar_label:"Delete Channel User",sidebar:"someSidebar",previous:{title:"Broadcast",permalink:"/node-sdk/methods/broadcast"},next:{title:"Delete Session",permalink:"/node-sdk/methods/delete-session"}},s=[{value:"Reference",id:"reference",children:[]}],i={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"deleteChannelUser() method is used to delete the channel for a user. The deleteChannelUser returns the channel user that was deleted."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {ConvaiAPIClient} = require('convai-sdk');\n\nconst convai = new ConvaiAPIClient(API_KEY);\n\nconvai\n    .deleteChannelUser('twilsms:+12042952222')\n    .then(user => console.log(user))\n    .catch(error => console.log(error));\n")),Object(l.b)("h4",{id:"example-response"},"Example Response"),Object(l.b)("p",null,"The method returns the deleted channel user"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'{\n   "channelId":"twilsms:+12042952222",\n   "environmentId":"a3c36585-6a7d-4369-85b3-abcdefghijkl",\n   "channel":"twilio_sms",\n   "superUserId":"4f65e63a-24ab-42b6-9e16-abcdefghijkl",\n   "session":null,\n   "createdAt":"2020-02-10T15:57:52.432184Z",\n   "updatedAt":"2020-02-10T15:57:52.432184Z"\n}\n')),Object(l.b)("h2",{id:"reference"},"Reference"),Object(l.b)("h4",{id:"deletechanneluseruserid-string-promisechanneluser"},Object(l.b)("inlineCode",{parentName:"h4"},"deleteChannelUser(userId: string): Promise<ChannelUser>")),Object(l.b)("br",null),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"userId"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Channel Id of the user")))))}b.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=r,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||l;return n?a.a.createElement(h,o({ref:t},i,{components:n})):a.a.createElement(h,o({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);