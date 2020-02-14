(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(1),n=a(6),b=(a(0),a(162)),l={id:"user-query-builder",title:"User Query Builder",sidebar_label:"User Query Builder"},u={id:"node-sdk/classes/user-query-builder",title:"User Query Builder",description:"User Query Builder class is used to stack conditions and build a single query to filter user results from the API.",source:"@site/docs/node-sdk/classes/user-query-builder.md",permalink:"/documentation-convai-platform/docs/node-sdk/classes/user-query-builder",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/classes/user-query-builder.md",sidebar_label:"User Query Builder",sidebar:"someSidebar",previous:{title:"Query Executions",permalink:"/documentation-convai-platform/docs/node-sdk/methods/query-executions"},next:{title:"Execution Matcher",permalink:"/documentation-convai-platform/docs/node-sdk/classes/execution-matcher"}},i=[{value:"Example",id:"example",children:[]},{value:"Constructor",id:"constructor",children:[]},{value:"Public Methods Summary",id:"public-methods-summary",children:[]},{value:"Public Methods",id:"public-methods",children:[]}],c={rightToc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"User Query Builder class is used to stack conditions and build a single query to filter user results from the API."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"new UserQueryBuilder(UserQueryMode.ALL)\n    .where('first-name')\n    .equals('John')\n    .where('number-of-interactions')\n    .greaterThan('5')\n    .setOffset(1)\n    .build()\n")),Object(b.b)("h2",{id:"constructor"},"Constructor"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Key"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mode"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"default : UserQueryMode.ALL"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"../enums/user-query-mode"}),"UserQueryMode"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"limit"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"optional"),Object(b.b)("li",null,"default: 10"))),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("h2",{id:"public-methods-summary"},"Public Methods Summary"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Public"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Method"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-setoffsetoffset--number-userquerybuilder"}),"setOffset"),"(offset : number) : UserQueryBuilder",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Set the offset of the query")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-wherefield--string-userquerybuilder"}),"where"),"(field : string): UserQueryBuilder",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Intialize the query to be performed. This method handles the 'key' part of the query")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-equalsvalue--string-userquerybuilder"}),"equals"),"(value : string[] : UserQueryBuilder)",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Denotes that the return set from where 'key' is equal to 'value'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-notequalsvalue--string-userquerybuilder"}),"notEquals"),"(value : string[]: UserQueryBuilder)",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Denotes that the return set from where 'key' doesn't equal 'value'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-startswithvalue--string-userquerybuilder"}),"startsWith"),"(value : string[]: UserQueryBuilder)",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Denotes that the return set from the where 'key' starts with 'value'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-greaterthanvalue--string-userquerybuilder"}),"greaterThan"),"(value : string[]: UserQueryBuilder)",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Denotes that the return set from the where 'key' should be greater than 'value'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-lessthanvalue--string-userquerybuilder"}),"lessThan"),"(value : string[]: UserQueryBuilder)",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Denotes that the return set from the where 'key' should be less than 'value'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-exists-userquerybuilder"}),"exists"),"(): UserQueryBuilder",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Denotes that the user data should have the where 'key'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-notexists-userquerybuilder"}),"notExists"),"(): UserQueryBuilder",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Denotes that the user data should not have the where 'key'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#public-build-userquery"}),"build"),"(): ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"../models/user-query"}),"UserQuery"),Object(b.b)("br",null),"\xa0","\xa0","\xa0","Build all the conditions into a single user query")))),Object(b.b)("h2",{id:"public-methods"},"Public Methods"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},Object(b.b)("strong",{parentName:"em"},"NOTE: All the methods defined below return the latest instance of UserQueryBuilder. This allows to stack different conditions as defined above"))),Object(b.b)("h4",{id:"public-setoffsetoffset--number-userquerybuilder"},Object(b.b)("inlineCode",{parentName:"h4"},"public setOffset(offset : number): UserQueryBuilder")),Object(b.b)("p",null,"setOffset() method is used to set the offset for the user query"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"offset"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Offset for the user query")))),Object(b.b)("h4",{id:"public-wherefield--string-userquerybuilder"},Object(b.b)("inlineCode",{parentName:"h4"},"public where(field : string): UserQueryBuilder")),Object(b.b)("p",null,"where() method is used to filter records. It is used to extract only those records that fulfill a specified condition. This method handles the 'key' part of the query."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"field"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of the key")))),Object(b.b)("h4",{id:"public-equalsvalue--string-userquerybuilder"},Object(b.b)("inlineCode",{parentName:"h4"},"public equals(value : string[]): UserQueryBuilder")),Object(b.b)("p",null,"equals() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('first-name').equals('John')")," would mean return the data set of all the users with ",Object(b.b)("inlineCode",{parentName:"p"},"first-name")," as ",Object(b.b)("inlineCode",{parentName:"p"},"John"),"."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value")))),Object(b.b)("h4",{id:"public-notequalsvalue--string-userquerybuilder"},Object(b.b)("inlineCode",{parentName:"h4"},"public notEquals(value : string[]): UserQueryBuilder")),Object(b.b)("p",null,"notEquals() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('first-name').notEquals('John')")," would mean return the data set of all the users with ",Object(b.b)("inlineCode",{parentName:"p"},"first-name")," ",Object(b.b)("em",{parentName:"p"},Object(b.b)("strong",{parentName:"em"},"not"))," as ",Object(b.b)("inlineCode",{parentName:"p"},"John"),"."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value")))),Object(b.b)("h4",{id:"public-startswithvalue--string-userquerybuilder"},Object(b.b)("inlineCode",{parentName:"h4"},"public startsWith(value : string[]): UserQueryBuilder")),Object(b.b)("p",null,"startsWith() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('first-name').startsWith('John')")," would mean return the data set of all the users with ",Object(b.b)("inlineCode",{parentName:"p"},"first-name")," starting from ",Object(b.b)("inlineCode",{parentName:"p"},"John"),"."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value")))),Object(b.b)("h4",{id:"public-greaterthanvalue--string-userquerybuilder"},Object(b.b)("inlineCode",{parentName:"h4"},"public greaterThan(value : string[]): UserQueryBuilder")),Object(b.b)("p",null,"greaterThan() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('number-of-interactions').greaterThan('2')")," would mean return the data set of all the users with ",Object(b.b)("inlineCode",{parentName:"p"},"number-of-interactions")," greater than ",Object(b.b)("inlineCode",{parentName:"p"},"2"),"."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value")))),Object(b.b)("h4",{id:"public-lessthanvalue--string-userquerybuilder"},Object(b.b)("inlineCode",{parentName:"h4"},"public lessThan(value : string[]): UserQueryBuilder")),Object(b.b)("p",null,"lessThan() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('number-of-interactions').lessThan('10')")," would mean return the data set of all the users with ",Object(b.b)("inlineCode",{parentName:"p"},"number-of-interactions")," less than ",Object(b.b)("inlineCode",{parentName:"p"},"10"),"."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Value")))),Object(b.b)("h4",{id:"public-exists-userquerybuilder"},Object(b.b)("inlineCode",{parentName:"h4"},"public exists(): UserQueryBuilder")),Object(b.b)("p",null,"exists() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('previous-live-chat').exists()")," would mean return the data set of all the users that has ",Object(b.b)("inlineCode",{parentName:"p"},"previous-live-chat'")," as a key in their data."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("h4",{id:"public-notexists-userquerybuilder"},Object(b.b)("inlineCode",{parentName:"h4"},"public notExists(): UserQueryBuilder")),Object(b.b)("p",null,"notExists() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('previous-live-chat').notExists()")," would mean return the data set of all the users that ",Object(b.b)("em",{parentName:"p"},Object(b.b)("strong",{parentName:"em"},"do not"))," have ",Object(b.b)("inlineCode",{parentName:"p"},"previous-live-chat'")," as a key in their data."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("h4",{id:"public-build-userquery"},Object(b.b)("inlineCode",{parentName:"h4"},"public build(): UserQuery")),Object(b.b)("p",null,"build() method is used to convert all the stacked conditions into a single ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"../models/user-query"}),"User Query")))}s.isMDXComponent=!0},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):u({},t,{},e)),a},o=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),o=s(a),p=r,O=o["".concat(l,".").concat(p)]||o[p]||d[p]||b;return a?n.a.createElement(O,u({ref:t},c,{components:a})):n.a.createElement(O,u({ref:t},c))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var c=2;c<b;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);