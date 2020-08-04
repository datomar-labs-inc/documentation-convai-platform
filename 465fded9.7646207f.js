(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),i=(n(0),n(269)),r=n(271),c={id:"concepts",title:"Concepts",sidebar_label:"Concepts"},s={id:"convai-studio/concepts",title:"Concepts",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/convai-studio/concepts.mdx",permalink:"/convai-studio/concepts",sidebar_label:"Concepts",sidebar:"someSidebar",previous:{title:"Introduction to Convai Studio",permalink:"/convai-studio/introduction"},next:{title:"Understanding Convai",permalink:"/convai-studio/simple-bot/understanding-convai"}},l=[{value:"Flow",id:"flow",children:[]},{value:"Data Scope",id:"data-scope",children:[]},{value:"Configuration Templator",id:"configuration-templator",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Keyboard Shortcuts",id:"keyboard-shortcuts",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Analytics",id:"analytics",children:[]},{value:"Key Interaction",id:"key-interaction",children:[]},{value:"Testing",id:"testing",children:[]}],u={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"flow"},"Flow"),Object(i.b)("p",null,"When bot executes, it starts from the extension graph through the nodes and links in it. Then go to the main graph through its nodes and links. If there are Modules, go to the Module's Graph, go through nodes and links in the module and then back to the main graph."),Object(i.b)("p",null,"In pesudo-code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"while(extension-graph){\n    main-graph(){\n        if meet-a-module {\n            go-to-module-graph () {\n                go-through-nodes-and-links()\n            }\n        }\n        go-through-nodes-and-links()\n    }\n}\n")),Object(i.b)("h2",{id:"data-scope"},"Data Scope"),Object(i.b)("p",null,"In Convai, we store data at four different scope levels:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Execution: Execution data is stored for a single execution. This data is tracked from the moment the request enters Convai till it leaves. If you are using an input node to wait for user data, note that all the execution data that was saved before the input node will not be available once the user provides their input. To reference/use execution data in any node, refer to the documentation of that node.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Session: Session data is stored for a single session. This data is tracked from the time a user interacts with the bot until the session expires. Session data is valid for 24 hours by default but the settings can be changed under the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#environments"}),"environment settings"),". To reference/use session data in any node, refer to the documentation of that node.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"User: User data is considered as persistent data, it exists as long as the user exists. To reference/use user data in any node, refer to the documentation of that node.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Module: Module data is only accessible in a module. This data is like setting up variables that can be used later in the module. The module data is initialized when the instance of the module is initialized. To reference/use module data in any node, refer to the documentation of that node."))),Object(i.b)("h2",{id:"configuration-templator"},"Configuration Templator"),Object(i.b)("p",null,"The Configuration Templator exists nearly every where in node's configurations."),Object(i.b)("p",null,"When you see such configuration editor, it is a Configuration Templator:"),Object(i.b)("img",{alt:"configuration templator",src:Object(r.a)("img/convai-studio/concepts/image1.png")}),Object(i.b)("p",null,"In Configuration Templator, you can access bot's ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/convai-studio/nodes/stock/script#context-object-structure"}),"Context Object"))," by using double curly braces ",Object(i.b)("inlineCode",{parentName:"p"},"{{statement}}")),Object(i.b)("p",null,"So using ",Object(i.b)("inlineCode",{parentName:"p"},"{{id}}")," is just like access ",Object(i.b)("inlineCode",{parentName:"p"},"ctx.id")),Object(i.b)("p",null,"Here is a list of frequent used access statements:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To access execution scope data: ",Object(i.b)("inlineCode",{parentName:"li"},"{{data.key}}")),Object(i.b)("li",{parentName:"ul"},"To access session scope data: ",Object(i.b)("inlineCode",{parentName:"li"},"{{session.data.key}}")),Object(i.b)("li",{parentName:"ul"},"To access user scope data: ",Object(i.b)("inlineCode",{parentName:"li"},"{{user.data.key}}")),Object(i.b)("li",{parentName:"ul"},"To access user input text: ",Object(i.b)("inlineCode",{parentName:"li"},"{{text}}"))),Object(i.b)("h2",{id:"environment"},"Environment"),Object(i.b)("p",null,"Most of the bot settings are configurable at an environment level. Consider an environment as a Github branch and the bot as a Github repository. Just like the build of a project is dependent on the branch, the build of a bot is dependent on the environment."),Object(i.b)("h2",{id:"keyboard-shortcuts"},"Keyboard Shortcuts"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy: ",Object(i.b)("inlineCode",{parentName:"li"},"Ctrl+C")," or ",Object(i.b)("inlineCode",{parentName:"li"},"CMD+C")),Object(i.b)("li",{parentName:"ul"},"Paste: ",Object(i.b)("inlineCode",{parentName:"li"},"Ctrl+V")," or ",Object(i.b)("inlineCode",{parentName:"li"},"CMD+V")),Object(i.b)("li",{parentName:"ul"},"Delte: ",Object(i.b)("inlineCode",{parentName:"li"},"Ctrl+D")," or ",Object(i.b)("inlineCode",{parentName:"li"},"CMD+D")),Object(i.b)("li",{parentName:"ul"},"Undo: ",Object(i.b)("inlineCode",{parentName:"li"},"Ctrl+Z")," or ",Object(i.b)("inlineCode",{parentName:"li"},"CMD+Z")),Object(i.b)("li",{parentName:"ul"},"Multi-select: ",Object(i.b)("inlineCode",{parentName:"li"},"Shift+Left Click"))),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("p",null,"For best practices, we should use versioning in the bot so in case you update the logic for the graph, it doesn\u2019t affect the production bot. Check ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"/convai-studio/simple-bot/deployment"}),"Deployment Documentation"))),Object(i.b)("h2",{id:"analytics"},"Analytics"),Object(i.b)("p",null,"Convai Bot has a Dashboard which shows the analytics of this bot."),Object(i.b)("h2",{id:"key-interaction"},"Key Interaction"),Object(i.b)("p",null,"Enable Key Interaction on some nodes will record the Key Interaction of user set name in the Dashboard analytics."),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("p",null,"User can record a flow test in the Dev Console to have an automated test."))}b.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,h=b["".concat(r,".").concat(p)]||b[p]||d[p]||i;return n?o.a.createElement(h,c({ref:t},l,{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},270:function(e,t,n){"use strict";var a=n(0),o=n(49);t.a=function(){return Object(a.useContext)(o.a)}},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(272);var a=n(270);function o(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},272:function(e,t,n){"use strict";var a=n(12),o=n(24),i=n(273),r="".startsWith;a(a.P+a.F*n(274)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return r?r.call(t,a,n):t.slice(n,n+a.length)===a}})},273:function(e,t,n){var a=n(73),o=n(25);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},274:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);