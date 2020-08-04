(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(269)),o={id:"twilio-dial",title:"Twilio Dial Node",sidebar_label:"Twilio Dial Node"},l={id:"convai-studio/nodes/twilio/twilio-dial",title:"Twilio Dial Node",description:"## Usage",source:"@site/docs/convai-studio/nodes/twilio/twilio-dial.mdx",permalink:"/convai-studio/nodes/twilio/twilio-dial",sidebar_label:"Twilio Dial Node",sidebar:"someSidebar",previous:{title:"Twilio Hang Up Node",permalink:"/convai-studio/nodes/twilio/twilio-hang-up"},next:{title:"Twilio TwiML Node",permalink:"/convai-studio/nodes/twilio/twilio-twiml"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],b={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"The Twilio Dial Node transfers the current calling session to call the number in the node's configuration. User is allowed to set the time limit of the call and choose to record the call. In addition, user can use custom ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://www.twilio.com/docs/voice/twiml"}),"TwiML"))," to have additional Twilio settings of the call."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Title"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The title of the node")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Number To Call"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The number to call")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Answer on bridge"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Select to answer on bridge")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Time Limit"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Time limit of the call")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Record"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Choose recording type or do not record")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Custom TwiML"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User can use additional TwiML if this configuration is selected.")))))}u.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=u(n),O=r,s=d["".concat(o,".").concat(O)]||d[O]||p[O]||i;return n?a.a.createElement(s,l({ref:t},b,{components:n})):a.a.createElement(s,l({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);