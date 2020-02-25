(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{159:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return o})),n.d(r,"rightToc",(function(){return u})),n.d(r,"default",(function(){return d}));var t=n(1),a=n(9),s=(n(0),n(203)),c={id:"query-users",title:"Query Users",sidebar_label:"Query Users"},o={id:"node-sdk/methods/query-users",title:"Query Users",description:"Use the queryUsers() method to query users from the Convai bot. The queryUsers() method returns a promise with an array of users. To be more precise, it returns a promise with a [UserQueryResult](../models/user-query-result.mdx) object.",source:"@site/docs/node-sdk/methods/query-users.mdx",permalink:"/docs/node-sdk/methods/query-users",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/methods/query-users.mdx",sidebar_label:"Query Users",sidebar:"someSidebar",previous:{title:"Query Executions",permalink:"/docs/node-sdk/methods/query-executions"},next:{title:"Query Users Reachable",permalink:"/docs/node-sdk/methods/query-users-reachable"}},u=[{value:"Reference",id:"reference",children:[]}],b={rightToc:u};function d(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},b,n,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Use the queryUsers() method to query users from the Convai bot. The queryUsers() method returns a promise with an array of users. To be more precise, it returns a promise with a ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/node-sdk/models/user-query-result"}),"UserQueryResult")," object."),Object(s.b)("p",null,"The queryUsers() expects an object of type ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/node-sdk/models/user-query"}),"UserQuery"),". You can use the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"../classes/user-query-builder#public-build-userquery.mdx"}),"build()")," method of ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/node-sdk/classes/user-query-builder"}),"UserQueryBuilder")," to return a UserQuery."),Object(s.b)("div",{className:"admonition admonition-note"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("div",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},Object(s.b)("em",{parentName:"p"},Object(s.b)("strong",{parentName:"em"},"All the queries use the data from the user scope for returning results."))))),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const {ConvaiAPIClient, UserQueryBuilder, UserQueryMode} = require('convai-sdk');\n\nconst convai = new ConvaiAPIClient(API_KEY);\n\nconvai\n    .queryUsers(new UserQueryBuilder(UserQueryMode.ALL).where('firstName').equals('John').build())\n    .then(users => console.log(users))\n    .catch(error => console.log(error));\n")),Object(s.b)("p",null,"To add multiple conditions, you can stack them on the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"../classes/user-query-builder"}),"UserQueryBuilder"),". For example,"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"convai\n    .queryUsers(new UserQueryBuilder(UserQueryMode.ALL).where('firstName').equals('John').where('lastName').equals('Snow').build())\n    .then(users => console.log(users))\n    .catch(error => console.log(error));\n")),Object(s.b)("h4",{id:"example-response"},"Example Response"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'{\n  "count": 2,\n  "users": [\n    {\n      "id": "4f65e63a-24ab-42b6-9e16-9849cd1a2774",\n      "environment_id": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n      "data": {\n        "firstName": "John",\n        "lastName": "Snow"\n      },\n      "createdAt": "2020-02-03T18:04:12.794583Z",\n      "updatedAt": "2020-02-10T15:59:44.696206Z",\n      "channelUsers": [\n        {\n          "channelId": "twilsms:+12042952222",\n          "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n          "channel": "twilio_sms",\n          "superUserId": "4f65e63a-24ab-42b6-9e16-9849cd1a2774",\n          "session": null,\n          "createdAt": "2020-02-10T15:57:52.432184Z",\n          "updatedAt": "2020-02-10T15:57:52.432184Z"\n        },\n        {\n          "channelId": "2372300866208557",\n          "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n          "channel": "facebook",\n          "superUserId": "4f65e63a-24ab-42b6-9e16-9849cd1a2774",\n          "session": null,\n          "createdAt": "2020-02-03T18:04:12.794583Z",\n          "updatedAt": "2020-02-03T18:04:12.794583Z"\n        }\n      ]\n    },\n    {\n      "id": "ef44ad85-b97a-477b-b314-7702c32249be",\n      "environment_id": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n      "data": {\n        "firstName": "John"\n      },\n      "createdAt": "2020-02-03T16:23:06.081615Z",\n      "updatedAt": "2020-02-12T19:43:04.705694Z",\n      "channelUsers": [\n        {\n          "channelId": "twilsms:+12042257890",\n          "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n          "channel": "twilio_sms",\n          "superUserId": "ef44ad85-b97a-477b-b314-7702c32249be",\n          "session": null,\n          "createdAt": "2020-02-10T15:53:22.453729Z",\n          "updatedAt": "2020-02-10T15:53:22.453729Z"\n        },\n        {\n          "channelId": "dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a",\n          "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n          "channel": "channel_dev",\n          "superUserId": "ef44ad85-b97a-477b-b314-7702c32249be",\n          "session": null,\n          "createdAt": "2020-02-03T16:23:06.081615Z",\n          "updatedAt": "2020-02-03T16:23:06.081615Z"\n        }\n      ]\n    }\n  ]\n}\n')),Object(s.b)("h2",{id:"reference"},"Reference"),Object(s.b)("h4",{id:"queryusersquery-userquery-promiseuserqueryresult"},Object(s.b)("inlineCode",{parentName:"h4"},"queryUsers(query: UserQuery): Promise<UserQueryResult>")),Object(s.b)("br",null),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Attribute"),Object(s.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"query"),Object(s.b)("td",Object(t.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(t.a)({parentName:"td"},{href:"/docs/node-sdk/models/user-query"}),"UserQuery")),Object(s.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"required"),Object(s.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Query to filter user records")))))}d.isMDXComponent=!0},203:function(e,r,n){"use strict";n.d(r,"a",(function(){return i})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),d=function(e){var r=a.a.useContext(b),n=r;return e&&(n="function"==typeof e?e(r):o({},r,{},e)),n},i=function(e){var r=d(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=Object(t.forwardRef)((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),i=d(n),p=t,m=i["".concat(c,".").concat(p)]||i[p]||l[p]||s;return n?a.a.createElement(m,o({ref:r},b,{components:n})):a.a.createElement(m,o({ref:r},b))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,c=new Array(s);c[0]=p;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var b=2;b<s;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);