(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),d=(n(0),n(201)),c={id:"update-user-data",title:"Update User Data",sidebar_label:"Update User Data"},o={id:"node-sdk/methods/update-user-data",title:"Update User Data",description:"updateUserData() method is used to update the user data of the super user. The method returns a promise with the updated super user data.",source:"@site/docs/node-sdk/methods/update-user-data.md",permalink:"/docs/node-sdk/methods/update-user-data",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/methods/update-user-data.md",sidebar_label:"Update User Data",sidebar:"someSidebar",previous:{title:"Update Session",permalink:"/docs/node-sdk/methods/update-session"},next:{title:"Context Modifier",permalink:"/docs/node-sdk/classes/context-modifier"}},s=[{value:"Reference",id:"reference",children:[]}],i={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(d.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(d.b)("p",null,"updateUserData() method is used to update the user data of the super user. The method returns a promise with the updated super user data."),Object(d.b)("h4",{id:"current-super-user"},"Current Super User"),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    "id":"ef44ad85-b97a-477b-1234-abcdefghijkl",\n    "environment_id":"a3c36585-6a7d-4369-1234-abcdefghijkl",\n    "data":{\n        "randomData" : "random"\n    },\n    "createdAt":"2020-02-03T16:23:06.081615Z",\n    "updatedAt":"2020-02-12T19:43:04.705694Z",\n    "channelUsers":[\n        {\n            "channelId":"twilsms:+12042222222",\n            "environmentId":"a3c36585-6a7d-4369-1234-abcdefghijkl",\n            "channel":"twilio_sms",\n            "superUserId":"ef44ad85-b97a-477b-1234-abcdefghijkl",\n            "session":null,\n            "createdAt":"2020-02-10T15:53:22.453729Z",\n            "updatedAt":"2020-02-10T15:53:22.453729Z"\n        },\n        {\n            "channelId":"dev-console-1e6bb9d7-d25d-4dc4-1234-abcdefghijkl",\n            "environmentId":"a3c36585-6a7d-4369-1234-abcdefghijkl",\n            "channel":"channel_dev",\n            "superUserId":"ef44ad85-b97a-477b-1234-abcdefghijkl",\n            "session":null,\n            "createdAt":"2020-02-03T16:23:06.081615Z",\n            "updatedAt":"2020-02-03T16:23:06.081615Z"\n        }\n    ]\n}\n')),Object(d.b)("h4",{id:"example-code"},"Example Code"),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const {ConvaiAPIClient} = require(\'convai-sdk\');\n\nconst convai = new ConvaiAPIClient(API_KEY);\n\nconvai.updateUserData(\'ef44ad85-b97a-477b-1234-abcdefghijkl\', {\n    set: {\n        "firstName": "John",\n        "lastName": "Snow"\n    },\n    delete: [\'randomData\']\n})\n    .then(user => console.log(user))\n    .catch(error => console.log(error));\n')),Object(d.b)("h4",{id:"example-response"},"Example Response"),Object(d.b)("pre",null,Object(d.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    "id":"ef44ad85-b97a-477b-1234-abcdefghijkl",\n    "environment_id":"a3c36585-6a7d-4369-1234-abcdefghijkl",\n    "data": {\n        "firstName": "John",\n        "lastName": "Snow"\n    },\n    "createdAt":"2020-02-03T16:23:06.081615Z",\n    "updatedAt":"2020-02-12T19:43:04.705694Z",\n    "channelUsers":[\n        {\n            "channelId":"twilsms:+12042222222",\n            "environmentId":"a3c36585-6a7d-4369-1234-abcdefghijkl",\n            "channel":"twilio_sms",\n            "superUserId":"ef44ad85-b97a-477b-1234-abcdefghijkl",\n            "session":null,\n            "createdAt":"2020-02-10T15:53:22.453729Z",\n            "updatedAt":"2020-02-10T15:53:22.453729Z"\n        },\n        {\n            "channelId":"dev-console-1e6bb9d7-d25d-4dc4-1234-abcdefghijkl",\n            "environmentId":"a3c36585-6a7d-4369-1234-abcdefghijkl",\n            "channel":"channel_dev",\n            "superUserId":"ef44ad85-b97a-477b-1234-abcdefghijkl",\n            "session":null,\n            "createdAt":"2020-02-03T16:23:06.081615Z",\n            "updatedAt":"2020-02-03T16:23:06.081615Z"\n        }\n    ]\n}\n')),Object(d.b)("h2",{id:"reference"},"Reference"),Object(d.b)("h4",{id:"updateuserdatasuperuserid-string-input-updateuserdatainput-promisesuperuser"},Object(d.b)("inlineCode",{parentName:"h4"},"updateUserData(superUserId: string, input: UpdateUserDataInput): Promise<SuperUser>")),Object(d.b)("br",null),Object(d.b)("table",null,Object(d.b)("thead",{parentName:"table"},Object(d.b)("tr",{parentName:"thead"},Object(d.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(d.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(d.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attribute"),Object(d.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(d.b)("tbody",{parentName:"table"},Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"superUserId"),Object(d.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(d.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(d.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Id of the super user")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"input"),Object(d.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(d.b)("a",Object(a.a)({parentName:"td"},{href:"../models/update-user-input-data"}),"UpdateUserDataInput")),Object(d.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(d.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))))}l.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,m=u["".concat(c,".").concat(p)]||u[p]||b[p]||d;return n?r.a.createElement(m,o({ref:t},i,{components:n})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,c=new Array(d);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<d;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);