(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{155:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return o})),t.d(r,"default",(function(){return i}));var n=t(1),a=t(9),c=(t(0),t(227)),s={id:"query-users-reachable",title:"Query Users Reachable",sidebar_label:"Query Users Reachable"},u={id:"node-sdk/methods/query-users-reachable",title:"Query Users Reachable",description:"queryUsersReachable() method to used to get the number of users who are reachable for a certain user set. This user set is defined using [UserQuery](./../models/user-query.mdx). You can use the [build()](../classes/user-query-builder#public-build-userquery.mdx) method of [UserQueryBuilder](../classes/user-query-builder.mdx) to return a UserQuery.",source:"@site/docs/node-sdk/methods/query-users-reachable.mdx",permalink:"/node-sdk/methods/query-users-reachable",sidebar_label:"Query Users Reachable",sidebar:"someSidebar",previous:{title:"Query Users",permalink:"/node-sdk/methods/query-users"},next:{title:"Update Session",permalink:"/node-sdk/methods/update-session"}},o=[{value:"Reference",id:"reference",children:[]}],b={rightToc:o};function i(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"queryUsersReachable() method to used to get the number of users who are reachable for a certain user set. This user set is defined using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/node-sdk/models/user-query"}),"UserQuery"),". You can use the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../classes/user-query-builder#public-build-userquery.mdx"}),"build()")," method of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/node-sdk/classes/user-query-builder"}),"UserQueryBuilder")," to return a UserQuery."),Object(c.b)("p",null,"The queryUsersReachable() returns a promise with the number of reachable users"),Object(c.b)("div",{className:"admonition admonition-tip"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("em",{parentName:"p"},Object(c.b)("strong",{parentName:"em"},"All the queries use the data from the user scope for returning results."))))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const {ConvaiAPIClient, UserQueryBuilder, UserQueryMode} = require('convai-sdk');\n\nconst convai = new ConvaiAPIClient(API_KEY);\n\nconvai\n    .queryUsersReachable(new UserQueryBuilder(UserQueryMode.ALL).where('firstName').equals('John').build())\n    .then(count => console.log(count))\n    .catch(error => console.log(error));\n")),Object(c.b)("h4",{id:"example-response"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n  "count": 2,\n}\n')),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("h4",{id:"queryusersreachablequery-userquery-promiseuserqueryreachableresult"},Object(c.b)("inlineCode",{parentName:"h4"},"queryUsersReachable(query: UserQuery): Promise<UserQueryReachableResult>")),Object(c.b)("br",null),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"query"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/node-sdk/models/user-query"}),"UserQuery")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Query to filter user records")))))}i.isMDXComponent=!0},227:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),i=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):u({},r,{},e)),t},l=function(e){var r=i(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},p=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),l=i(t),p=n,m=l["".concat(s,".").concat(p)]||l[p]||d[p]||c;return t?a.a.createElement(m,u({ref:r},b,{components:t})):a.a.createElement(m,u({ref:r},b))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,s=new Array(c);s[0]=p;var u={};for(var o in r)hasOwnProperty.call(r,o)&&(u[o]=r[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,s[1]=u;for(var b=2;b<c;b++)s[b]=t[b];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);