(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{165:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return o})),n.d(r,"rightToc",(function(){return u})),n.d(r,"default",(function(){return i}));var t=n(1),a=n(9),s=(n(0),n(219)),c={id:"query-users",title:"Query Users",sidebar_label:"Query Users"},o={id:"node-sdk/methods/query-users",title:"Query Users",description:"Use the queryUsers() method to query users from the Convai bot. The queryUsers() method returns a promise with an array of users. To be more precise, it returns a promise with a [UserQueryResult](../models/user-query-result.mdx) object.",source:"@site/docs/node-sdk/methods/query-users.mdx",permalink:"/node-sdk/methods/query-users",sidebar_label:"Query Users",sidebar:"someSidebar",previous:{title:"Query Executions",permalink:"/node-sdk/methods/query-executions"},next:{title:"Query Users Reachable",permalink:"/node-sdk/methods/query-users-reachable"}},u=[{value:"Reference",id:"reference",children:[]}],b={rightToc:u};function i(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},b,n,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Use the queryUsers() method to query users from the Convai bot. The queryUsers() method returns a promise with an array of users. To be more precise, it returns a promise with a ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/node-sdk/models/user-query-result"}),"UserQueryResult")," object."),Object(s.b)("p",null,"The queryUsers() expects an object of type ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/node-sdk/models/user-query"}),"UserQuery"),". You can use the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"../classes/user-query-builder#public-build-userquery.mdx"}),"build()")," method of ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"/node-sdk/classes/user-query-builder"}),"UserQueryBuilder")," to return a UserQuery."),Object(s.b)("div",{className:"admonition admonition-tip"},Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("div",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(t.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Note")),Object(s.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},Object(s.b)("em",{parentName:"p"},Object(s.b)("strong",{parentName:"em"},"All the queries use the data from the user scope for returning results."))))),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const {ConvaiAPIClient, UserQueryBuilder, UserQueryMode} = require('convai-sdk');\n\nconst convai = new ConvaiAPIClient(API_KEY);\n\nconvai\n    .queryUsers(new UserQueryBuilder(UserQueryMode.ALL).where('firstName').equals('John').build())\n    .then(users => console.log(users))\n    .catch(error => console.log(error));\n")),Object(s.b)("p",null,"To add multiple conditions, you can stack them on the ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"../classes/user-query-builder"}),"UserQueryBuilder"),". For example,"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"convai\n    .queryUsers(new UserQueryBuilder(UserQueryMode.ALL).where('firstName').equals('John').where('lastName').equals('Snow').build())\n    .then(users => console.log(users))\n    .catch(error => console.log(error));\n")),Object(s.b)("h4",{id:"example-response"},"Example Response"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),'{\n  "count": 2,\n  "users": [\n    {\n      "id": "4f65e63a-24ab-42b6-9e16-9849cd1a2774",\n      "environment_id": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n      "data": {\n        "firstName": "John",\n        "lastName": "Snow"\n      },\n      "createdAt": "2020-02-03T18:04:12.794583Z",\n      "updatedAt": "2020-02-10T15:59:44.696206Z",\n      "channelUsers": [\n        {\n          "channelId": "twilsms:+12042952222",\n          "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n          "channel": "twilio_sms",\n          "superUserId": "4f65e63a-24ab-42b6-9e16-9849cd1a2774",\n          "session": null,\n          "createdAt": "2020-02-10T15:57:52.432184Z",\n          "updatedAt": "2020-02-10T15:57:52.432184Z"\n        },\n        {\n          "channelId": "2372300866208557",\n          "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n          "channel": "facebook",\n          "superUserId": "4f65e63a-24ab-42b6-9e16-9849cd1a2774",\n          "session": null,\n          "createdAt": "2020-02-03T18:04:12.794583Z",\n          "updatedAt": "2020-02-03T18:04:12.794583Z"\n        }\n      ]\n    },\n    {\n      "id": "ef44ad85-b97a-477b-b314-7702c32249be",\n      "environment_id": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n      "data": {\n        "firstName": "John"\n      },\n      "createdAt": "2020-02-03T16:23:06.081615Z",\n      "updatedAt": "2020-02-12T19:43:04.705694Z",\n      "channelUsers": [\n        {\n          "channelId": "twilsms:+12042257890",\n          "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n          "channel": "twilio_sms",\n          "superUserId": "ef44ad85-b97a-477b-b314-7702c32249be",\n          "session": null,\n          "createdAt": "2020-02-10T15:53:22.453729Z",\n          "updatedAt": "2020-02-10T15:53:22.453729Z"\n        },\n        {\n          "channelId": "dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a",\n          "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n          "channel": "channel_dev",\n          "superUserId": "ef44ad85-b97a-477b-b314-7702c32249be",\n          "session": null,\n          "createdAt": "2020-02-03T16:23:06.081615Z",\n          "updatedAt": "2020-02-03T16:23:06.081615Z"\n        }\n      ]\n    }\n  ]\n}\n')),Object(s.b)("h2",{id:"reference"},"Reference"),Object(s.b)("h4",{id:"queryusersquery-userquery-promiseuserqueryresult"},Object(s.b)("inlineCode",{parentName:"h4"},"queryUsers(query: UserQuery): Promise<UserQueryResult>")),Object(s.b)("br",null),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Name"),Object(s.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Type"),Object(s.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Attribute"),Object(s.b)("th",Object(t.a)({parentName:"tr"},{align:null}),"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"query"),Object(s.b)("td",Object(t.a)({parentName:"tr"},{align:null}),Object(s.b)("a",Object(t.a)({parentName:"td"},{href:"/node-sdk/models/user-query"}),"UserQuery")),Object(s.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"required"),Object(s.b)("td",Object(t.a)({parentName:"tr"},{align:null}),"Query to filter user records")))))}i.isMDXComponent=!0},219:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var r=a.a.useContext(b),n=r;return e&&(n="function"==typeof e?e(r):o({},r,{},e)),n},l=function(e){var r=i(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=Object(t.forwardRef)((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,c=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),l=i(n),p=t,m=l["".concat(c,".").concat(p)]||l[p]||d[p]||s;return n?a.a.createElement(m,o({ref:r},b,{components:n})):a.a.createElement(m,o({ref:r},b))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,c=new Array(s);c[0]=p;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var b=2;b<s;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);