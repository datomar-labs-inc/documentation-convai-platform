/*! For license information please see 05017529.199f26b9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(219)),i=n(221),c=n(228),s=n(229),l={id:"webhook",title:"Webhook Node",sidebar_label:"Webhook Node"},u={id:"convai-studio/nodes/stock/webhook",title:"Webhook Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/convai-studio/nodes/stock/webhook.mdx",permalink:"/convai-studio/nodes/stock/webhook",sidebar_label:"Webhook Node",sidebar:"someSidebar",previous:{title:"Set Data Node",permalink:"/convai-studio/nodes/stock/set-data"},next:{title:"Knowledge Node",permalink:"/convai-studio/nodes/knowledge-ai/knowledge"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Steps",id:"steps",children:[]}],b={rightToc:d};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The webhook node is used to send a POST request to a URL. The webhook node sends the current execution data along with the user data and expects back a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../node-sdk/classes/context-modifier.mdx"}),"ContextModifier")," Object to do any changes in the context."),Object(o.b)("h2",{id:"steps"},"Steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup your webhook url. You can directly input it in the webhook node but I have added it in the extensions graph in case I need to change it. You can also add it as an environment variable and then access it using ",Object(o.b)("inlineCode",{parentName:"p"},'{{ e "webhookUrl" }}'),"."),Object(o.b)("img",{alt:"Setup Webhook",src:Object(i.a)("img/nodes/stock/webhook/1.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Setup your webhook node. Here I am accessing my webhookUrl using ",Object(o.b)("inlineCode",{parentName:"p"},'{{ d "webhookUrl" }}')),Object(o.b)("img",{alt:"Setup Webhook",src:Object(i.a)("img/nodes/stock/webhook/2.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Send the context change back in the response. The response needs to be in a certain format as shown in the following code. If you don't want to do any code change, you can just send an empty object back as the response."))),Object(o.b)(c.a,{defaultValue:"withoutSdk",values:[{label:"Without SDK",value:"withoutSdk"},{label:"With SDK",value:"withSdk"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"withoutSdk",mdxType:"TabItem"},Object(o.b)("p",null,"You can read more about ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../node-sdk/models/context-change.mdx"}),"Change object"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../node-sdk/models/log-entry.mdx"}),"Log Entry")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../node-sdk/models/error.mdx"}),"Error object")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// In our example, we are setting a firstName and lastName for the user as John\n// and Snow respectively. Optionally, we are also logging in Convai that we\n// have changed the firstName\n\napp.post('/verifyByEmail', (req, res, next) => {\n\n    res.json({\n        changes: [\n            {\n                type: 2,\n                op: 0,\n                key: 'firstName',\n                data: 'John'\n            }, {\n                type: 2,\n                op: 0,\n                key: 'lastName',\n                data: 'Snow'\n            }\n        ],\n        logs: [\n            {\n                level: 10,\n                message: 'Changed firstName to John',\n                time: new Date()\n            }\n        ],\n        errors: []\n    });\n    \n})\n"))),Object(o.b)(s.a,{value:"withSdk",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const {ContextModifier} = require('convai-sdk')\n\n// In our example, we are setting a firstName and lastName for the user as John\n// and Snow respectively. Optionally, we are also logging in Convai that we\n// have changed the firstName\n\napp.post('/verifyByEmail', (req, res, next) => {\n    let cm = new ContextModifier();\n\n    cm.setUser('firstName', 'John');\n    cm.setUser('lastName', 'Snow');\n    cm.logInfo('Changed firstName to John');\n\n    res.json(cm);\n})\n")))))}p.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(i,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},220:function(e,t,n){"use strict";var r=n(0),a=n(49);t.a=function(){return Object(r.useContext)(a.a)}},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(222);var r=n(220);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},222:function(e,t,n){"use strict";var r=n(12),a=n(24),o=n(223),i="".startsWith;r(r.P+r.F*n(224)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},223:function(e,t,n){var r=n(73),a=n(25);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},224:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},225:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},228:function(e,t,n){"use strict";n(29),n(19),n(20);var r=n(0),a=n.n(r),o=n(225),i=n.n(o),c=n(124),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,d=Object(r.useState)(o),b=d[0],p=d[1],f=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:i()("tab-item",s.a.tabItem,{"tab-item--active":b===t}),key:t,ref:function(e){return f.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(f,e.target,e)},onFocus:function(){return p(t)},onClick:function(){return p(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===b}))[0]))}},229:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);