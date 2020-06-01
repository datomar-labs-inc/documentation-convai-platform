(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(1),a=n(9),o=(n(0),n(219)),r=n(221),s={id:"understanding-convai",title:"Understanding Convai",sidebar_label:"1. Understanding Convai",description:"Step by step guide to make your first simple bot on Convai Studio"},c={id:"convai-studio/simple-bot/understanding-convai",title:"Understanding Convai",description:"Step by step guide to make your first simple bot on Convai Studio",source:"@site/docs/convai-studio/simple-bot/1-understanding-convai.mdx",permalink:"/convai-studio/simple-bot/understanding-convai",sidebar_label:"1. Understanding Convai",sidebar:"someSidebar",previous:{title:"Introduction to Convai Studio",permalink:"/convai-studio/introduction"},next:{title:"Building a Bot",permalink:"/convai-studio/simple-bot/building-a-bot"}},l=[{value:"Analogy for easy understanding",id:"analogy-for-easy-understanding",children:[]},{value:"Understanding Organizations, Accounts and Permissions",id:"understanding-organizations-accounts-and-permissions",children:[{value:"Accounts",id:"accounts",children:[]},{value:"Organizations",id:"organizations",children:[]},{value:"Permissions",id:"permissions",children:[]}]},{value:"Understanding Environments",id:"understanding-environments",children:[]},{value:"Integrations",id:"integrations",children:[]}],b={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before we start, let's understand some of the concepts/pre-requisites required to make bots on Convai. "),Object(o.b)("h2",{id:"analogy-for-easy-understanding"},"Analogy for easy understanding"),Object(o.b)("p",null,"Here is an analogy for easy understanding. Keep this analogy in mind and it will be easier as we proceed further."),Object(o.b)("img",{className:"mb--10",alt:"Create Bot",src:Object(r.a)("img/convai-studio/simple-bot/image1.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Organization - Github team"),Object(o.b)("li",{parentName:"ul"},"Bot - Github Repository"),Object(o.b)("li",{parentName:"ul"},"Bot Environment - Github branch"),Object(o.b)("li",{parentName:"ul"},"Graph - Consider a Graph as a file where different modules are written."),Object(o.b)("li",{parentName:"ul"},"Modules - A module is like a function. It is a defined collection of a Bot logic that is reusable everywhere in the graph"),Object(o.b)("li",{parentName:"ul"},"Links - Links can be compared to the Conditional Logic statements. They are basically if-else loops"),Object(o.b)("li",{parentName:"ul"},"Nodes - Nodes are like a single line of code. It defines the logic of how the context is being modified. (or any other action in the bot)")),Object(o.b)("h2",{id:"understanding-organizations-accounts-and-permissions"},"Understanding Organizations, Accounts and Permissions"),Object(o.b)("h3",{id:"accounts"},"Accounts"),Object(o.b)("p",null,"An account is a single email account that has access to the Convai Platform"),Object(o.b)("h3",{id:"organizations"},"Organizations"),Object(o.b)("p",null,"Each bot is part of an organization. Each email account is therefore a part of an organization and has access to a bot as long as they are in the organization. "),Object(o.b)("p",null,"Accounts and Organizations are like a many-to-many relationship which means that each organization can have multiple accounts under them and each account can be a part of multiple organizations. For example, my email is a part of 2 organizations:"),Object(o.b)("img",{alt:"Create Bot",src:Object(r.a)("img/convai-studio/simple-bot/image2.png")}),Object(o.b)("h3",{id:"permissions"},"Permissions"),Object(o.b)("p",null,"There are 2 levels of permissions in Convai. Organization level permissions and Bot level permissions."),Object(o.b)("h4",{id:"organization-level-permissions"},"Organization Level Permissions"),Object(o.b)("p",null,"The organization permission settings are accessible at Organizations > Select an organization > Organization Permissions."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Account Permissions")," - Accounts with these permissions can add and remove accounts from an organization."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Bot Permissions")," - Accounts with these permissions can add, edit and delete every bot in the organization.")),Object(o.b)("div",{className:"admonition admonition-note"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"System Admin permissions are currently on Convai level and can only be managed by Datomar Labs."))),Object(o.b)("img",{alt:"Organization level permissions",src:Object(r.a)("img/convai-studio/simple-bot/image3.png")}),Object(o.b)("h4",{id:"bot-level-permissions"},"Bot level permissions"),Object(o.b)("p",null,"Bot level permissions are there to provide access for a bot to an account. The bot permission settings are accessible at Bots > Select a bot > Settings > Bot Permissions. The account in this case doesn\u2019t need to be a part of the organization. Each account in the Bot permissions has the view permissions for the bot."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Edit")," Bot - Can edit a bot"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Edit")," environments - Can edit an environment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Delete")," environments - Can delete an environment")),Object(o.b)("img",{alt:"Bot level permissions",src:Object(r.a)("img/convai-studio/simple-bot/image4.png")}),Object(o.b)("h2",{id:"understanding-environments"},"Understanding Environments"),Object(o.b)("p",null,"Most of the bot settings are configurable at an environment level. Consider an environment as a Github branch and the bot as a Github repository. Just like the build of a project is dependent on the branch, the build of a bot is dependent on the environment."),Object(o.b)("p",null,"A Development Environment is added to every bot by default. To create an environment:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to Bots > Select a bot > Settings > Create Environment"),Object(o.b)("li",{parentName:"ol"},"Click on Create Environment"),Object(o.b)("li",{parentName:"ol"},"Add a name for the environment (For example, Production)"),Object(o.b)("li",{parentName:"ol"},"Click on Create")),Object(o.b)("img",{className:"mb--10",alt:"Create an environment",src:Object(r.a)("img/convai-studio/simple-bot/image5.png")}),Object(o.b)("p",null,"Each environment has the following settings:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name and Session Length"),Object(o.b)("li",{parentName:"ul"},"Version Select (this is only visible if the bot has at least 1 version. We will talk about versions in the deployment section)"),Object(o.b)("li",{parentName:"ul"},"Environment Variables"),Object(o.b)("li",{parentName:"ul"},"Integrations")),Object(o.b)("h2",{id:"integrations"},"Integrations"),Object(o.b)("p",null,"Convai offers a lot of different type of integrations like NLP, CMS, Analytics etc. We are adding more as we go. For the tutorial, add:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Facebook and Twilio for the channel"),Object(o.b)("li",{parentName:"ol"},"Dialogflow for NLP"),Object(o.b)("li",{parentName:"ol"},"Dashbot for Analytics")))}d.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=i,p=d["".concat(r,".").concat(m)]||d[m]||u[m]||o;return n?a.a.createElement(p,s({ref:t},l,{components:n})):a.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},220:function(e,t,n){"use strict";var i=n(0),a=n(49);t.a=function(){return Object(i.useContext)(a.a)}},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(222);var i=n(220);function a(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},222:function(e,t,n){"use strict";var i=n(12),a=n(24),o=n(223),r="".startsWith;i(i.P+i.F*n(224)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return r?r.call(t,i,n):t.slice(n,n+i.length)===i}})},223:function(e,t,n){var i=n(73),a=n(25);e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},224:function(e,t,n){var i=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);