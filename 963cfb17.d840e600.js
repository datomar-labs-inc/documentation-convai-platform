(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),o=(n(0),n(201)),s={id:"update-session",title:"Update Session",sidebar_label:"Update Session"},c={id:"node-sdk/methods/update-session",title:"Update Session",description:"updateSession() method is used to update the session data of a session. The method returns a promise with the updated [Session](../classes/session).",source:"@site/docs/node-sdk/methods/update-session.md",permalink:"/docs/node-sdk/methods/update-session",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/methods/update-session.md",sidebar_label:"Update Session",sidebar:"someSidebar",previous:{title:"Query Users Reachable",permalink:"/docs/node-sdk/methods/query-users-reachable"},next:{title:"Update User Data",permalink:"/docs/node-sdk/methods/update-user-data"}},i=[{value:"Reference",id:"reference",children:[]}],d={rightToc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"updateSession() method is used to update the session data of a session. The method returns a promise with the updated ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../classes/session"}),"Session"),"."),Object(o.b)("h4",{id:"current-session"},"Current Session"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n   "data":{\n      "randomData":"random"\n   },\n   "stack":{\n      "frames":[\n         {\n            "m":0,\n            "n":0\n         }\n      ]\n   },\n   "ver":"",\n   "id":"9045d142-8155-4837-808a-f2ea371ffcd0"\n}\n')),Object(o.b)("h4",{id:"example-code"},"Example Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const {ConvaiAPIClient} = require(\'convai-sdk\');\n\nconst convai = new ConvaiAPIClient(API_KEY);\n\nconvai.updateSession(\'dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a\', {\n    set: {\n        "firstName": "John",\n        "lastName": "Snow"\n    },\n    delete: [\'randomData\']\n})\n    .then(user => console.log(user))\n    .catch(error => console.log(error));\n')),Object(o.b)("h4",{id:"example-response"},"Example Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "data": {\n    "firstName": "John",\n    "lastName": "Snow"\n  },\n  "stack": {\n    "frames": [\n      {\n        "m": 0,\n        "n": 0\n      }\n    ]\n  },\n  "ver": "",\n  "id": "9045d142-8155-4837-808a-f2ea371ffcd0"\n}\n')),Object(o.b)("h2",{id:"reference"},"Reference"),Object(o.b)("h4",{id:"updatesessionuserid-string-input-updateuserdatainput-promisesession"},Object(o.b)("inlineCode",{parentName:"h4"},"updateSession(userId: string, input: UpdateUserDataInput): Promise<Session>")),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attribute"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"userId"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Channel Id of the user")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"input"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"../models/update-user-input-data"}),"UpdateUserDataInput")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))))}l.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,m=b["".concat(s,".").concat(u)]||b[u]||p[u]||o;return n?r.a.createElement(m,c({ref:t},d,{components:n})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var d=2;d<o;d++)s[d]=n[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);