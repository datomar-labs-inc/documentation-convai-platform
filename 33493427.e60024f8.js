(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),b=(a(0),a(203)),l={id:"execution-matcher",title:"Execution Matcher",sidebar_label:"Execution Matcher"},c={id:"node-sdk/classes/execution-matcher",title:"Execution Matcher",description:"Execution Matcher class is used to stack conditions and build a single query to filter execution results from the API.",source:"@site/docs/node-sdk/classes/execution-matcher.mdx",permalink:"/docs/node-sdk/classes/execution-matcher",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/classes/execution-matcher.mdx",sidebar_label:"Execution Matcher",sidebar:"someSidebar",previous:{title:"Context Modifier",permalink:"/docs/node-sdk/classes/context-modifier"},next:{title:"Flaggable",permalink:"/docs/node-sdk/classes/flaggable"}},i=[{value:"Example",id:"example",children:[]},{value:"Constructor",id:"constructor",children:[]},{value:"Public Methods Summary",id:"public-methods-summary",children:[]},{value:"Public Methods",id:"public-methods",children:[]}],o={rightToc:i};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Execution Matcher class is used to stack conditions and build a single query to filter execution results from the API."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"new ExecutionMatcher(250)\n    .where('userId')\n    .equals('ef44ad85-b97a-477b-b314-abcdefghijkl')\n    .where('channel')\n    .equals('facebook')\n    .not()\n")),Object(b.b)("h2",{id:"constructor"},"Constructor"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"limit"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"optional"),Object(b.b)("li",null,"default: 10"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("h2",{id:"public-methods-summary"},"Public Methods Summary"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Public"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#public-setoffsetoffset--number-executionmatcher"}),"setOffset"),"(offset : number) : ExecutionMatcher",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Set the offset of the query")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#public-sortascfield-string-executionmatcher"}),"sortAsc"),"(field : string) : ExecutionMatcher",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Sort the executions by the field in ascending order")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#public-sortdescfield-string-executionmatcher"}),"sortDesc"),"(field : string) : ExecutionMatcher",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Sort the executions by the field in descending order")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#public-wherefield--string-executionmatcher"}),"where"),"(field: string) : ExecutionMatcher",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Intialize the query to be performed. This method handles the 'key' part of the query")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#public-not-executionmatcher"}),"not"),"() : ExecutionMatcher",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Negate a condition")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#public-equalsvalue--string-executionmatcher"}),"equals"),"(value: string[]) : ExecutionMatcher",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Denotes that the return set from where 'key' is equal to 'value'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#public-hasprefixprefix-string-executionmatcher"}),"hasPrefix"),"(prefix: string) : ExecutionMatcher",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Denotes that the return set from the where 'key' starts with 'prefix'")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#public-exists-executionmatcher"}),"exists"),"() : ExecutionMatcher",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Intialize the query to be performed. This method handles the 'key' part of the query")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#public-betweenlow-string-high-string-inclusive-boolean-executionmatcher"}),"between"),"(low: string, high: string, inclusive: boolean)) : ExecutionMatcher",Object(b.b)("br",null),"\xa0","\xa0","\xa0","Intialize the query to be performed. This method handles the 'key' part of the query")))),Object(b.b)("h2",{id:"public-methods"},"Public Methods"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},Object(b.b)("strong",{parentName:"em"},"NOTE: All the methods defined below return the latest instance of ExecutionMatcher. This allows to stack different conditions as defined above"))),Object(b.b)("h4",{id:"public-setoffsetoffset--number-executionmatcher"},Object(b.b)("inlineCode",{parentName:"h4"},"public setOffset(offset : number): ExecutionMatcher")),Object(b.b)("p",null,"setOffset() method is used to set the offset for the user query"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offset"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Offset for the user query")))),Object(b.b)("h4",{id:"public-sortascfield-string-executionmatcher"},Object(b.b)("inlineCode",{parentName:"h4"},"public sortAsc(field: string): ExecutionMatcher")),Object(b.b)("p",null,"sortAsc() method is used to sort the executions by the field in ascending order"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"field to sort the executions by")))),Object(b.b)("h4",{id:"public-sortdescfield-string-executionmatcher"},Object(b.b)("inlineCode",{parentName:"h4"},"public sortDesc(field: string): ExecutionMatcher")),Object(b.b)("p",null,"sortDesc() method is used to sort the executions by the field in descending order"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"field to sort the executions by")))),Object(b.b)("h4",{id:"public-wherefield--string-executionmatcher"},Object(b.b)("inlineCode",{parentName:"h4"},"public where(field : string): ExecutionMatcher")),Object(b.b)("p",null,"where() method is used to filter records. It is used to extract only those records that fulfill a specified condition. This method handles the 'key' part of the query."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"field"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")))),Object(b.b)("h4",{id:"public-not-executionmatcher"},Object(b.b)("inlineCode",{parentName:"h4"},"public not(): ExecutionMatcher")),Object(b.b)("p",null,"not() method is used to negate a condition. For example, if we want all the executions for a user except for the facebook channel"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"new ExecutionMatcher()\n    .where('userId')\n    .equals('ef44ad85-b97a-477b-b314-abcdefghijkl')\n    .where('channel')\n    .equals('facebook')\n    .not()\n")),Object(b.b)("h4",{id:"public-equalsvalue--string-executionmatcher"},Object(b.b)("inlineCode",{parentName:"h4"},"public equals(value : string[]): ExecutionMatcher")),Object(b.b)("p",null,"equals() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('userId').equals('ef44ad85-b97a-477b-b314-abcdefghijkl')")," would mean return the data set of all the executions with ",Object(b.b)("inlineCode",{parentName:"p"},"userId")," as ",Object(b.b)("inlineCode",{parentName:"p"},"ef44ad85-b97a-477b-b314-abcdefghijkl"),"."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value")))),Object(b.b)("h4",{id:"public-hasprefixprefix-string-executionmatcher"},Object(b.b)("inlineCode",{parentName:"h4"},"public hasPrefix(prefix: string): ExecutionMatcher")),Object(b.b)("p",null,"hasPrefix() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('channel').hasPrefix('mes')")," would mean return the data set of all the executions with ",Object(b.b)("inlineCode",{parentName:"p"},"channel")," that starts with ",Object(b.b)("inlineCode",{parentName:"p"},"mes"),"."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"prefix"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value")))),Object(b.b)("h4",{id:"public-exists-executionmatcher"},Object(b.b)("inlineCode",{parentName:"h4"},"public exists(): ExecutionMatcher")),Object(b.b)("p",null,"exists() method is used to compare the key and value. A ",Object(b.b)("inlineCode",{parentName:"p"},"where('userId').exists()")," would mean return the data set of all the executions that has ",Object(b.b)("inlineCode",{parentName:"p"},"userId'")," as a key in their data."),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("h4",{id:"public-betweenlow-string-high-string-inclusive-boolean-executionmatcher"},Object(b.b)("inlineCode",{parentName:"h4"},"public between(low: string, high: string, inclusive: boolean): ExecutionMatcher")),Object(b.b)("p",null,"between() method is used to compare the key and value. Denotes that the return set from the where 'key' should be between (low, high) for inclusive = false or ","[low, high]"," for inclusive = true"),Object(b.b)("p",null,"This method will return an error if a where method is not present."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"low"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The lower number")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"high"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The higher number")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"inclusive"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify if the lower and higher numbers should be inclusive or exclusive")))))}u.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},O=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=u(a),j=n,d=O["".concat(l,".").concat(j)]||O[j]||p[j]||b;return a?r.a.createElement(d,c({ref:t},o,{components:a})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);