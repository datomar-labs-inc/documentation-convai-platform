(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(1),b=a(9),r=(a(0),a(203)),l={id:"context-modifier",title:"Context Modifier",sidebar_label:"Context Modifier"},c={id:"node-sdk/classes/context-modifier",title:"Context Modifier",description:"Context Modifier class is used to change the context of the conversation. We can use the class to set or delete variables in different scope of the conversation. For example, you can set variables that will be used in the current execution only like a message or if you want to save some data for the session, like liveChatStartedAt, you can save that in the session variable.",source:"@site/docs/node-sdk/classes/context-modifier.mdx",permalink:"/docs/node-sdk/classes/context-modifier",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/classes/context-modifier.mdx",sidebar_label:"Context Modifier",sidebar:"someSidebar",previous:{title:"Update User Data",permalink:"/docs/node-sdk/methods/update-user-data"},next:{title:"Execution Matcher",permalink:"/docs/node-sdk/classes/execution-matcher"}},i=[{value:"Example",id:"example",children:[]},{value:"Public Methods Summary",id:"public-methods-summary",children:[]},{value:"Public Methods",id:"public-methods",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Context Modifier class is used to change the context of the conversation. We can use the class to set or delete variables in different scope of the conversation. For example, you can set variables that will be used in the current execution only like a message or if you want to save some data for the session, like liveChatStartedAt, you can save that in the session variable."),Object(r.b)("p",null,"Refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/node-sdk/enums/context-modifier-type"}),"Context Modifier Types")," for more information on different variable scopes."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let cm = new ContextModifier();\n\ncm.set('message', 'Hi. Thanks for contacting us. An agent will be with you shortly');\ncm.setSession('liveChatStartedAt', new Date());\n")),Object(r.b)("h2",{id:"public-methods-summary"},"Public Methods Summary"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Public"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-setkey-string-data-any-contextmodifier"}),"set"),"(key: string, data: any): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Set the an execution scope variable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-setsessionkey-string-data-any-contextmodifier"}),"setSession"),"(key: string, data: any): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Set a session scope variable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-setuserkey-string-data-any-contextmodifier"}),"setUser"),"(key: string, data: any): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Set a user scope variable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-setenvironmentkey-string-data-any-contextmodifier"}),"setEnvironment"),"(key: string, data: any): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Set an environment variable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-deletekey-string-contextmodifier"}),"delete"),"(key: string): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Delete an execution scoped variable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-deletesessionkey-string-contextmodifier"}),"deleteSession"),"(key: string): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Delete a session scope variable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-deleteuserkey-string-contextmodifier"}),"deleteUser"),"(key: string): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Delete a user scope variable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-deleteenvironmentkey-string-contextmodifier"}),"deleteEnvironment"),"(key: string): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Delete an environment variable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-clear-contextmodifier"}),"clear"),"(): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Clear all execution scoped variables")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-clearsession-contextmodifier"}),"clearSession"),"(): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Clear all session scope variables")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-clearuser-contextmodifier"}),"clearUser"),"(): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Clear all user scope variables")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-clearenvironment-contextmodifier"}),"clearEnvironment"),"(): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Clear all environment variables")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-logtracemessage-string-contextmodifier"}),"logTrace"),"(message: string): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Log a trace message")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-logdebugmessage-string-contextmodifier"}),"logDebug"),"(message: string): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Log a debug message")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-loginfomessage-string-contextmodifier"}),"logInfo"),"(message: string): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Log an info message")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-logwarningmessage-string-contextmodifier"}),"logWarning"),"(message: string): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Log a warning message")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-logerrormessage-string-contextmodifier"}),"logError"),"(message: string): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Log an error message")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"public"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#public-errorerr-error-contextmodifier"}),"error"),"(err: ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/node-sdk/models/error"}),"Error"),"): ContextModifier",Object(r.b)("br",null),"\xa0","\xa0","\xa0","Send/throw an error")))),Object(r.b)("h2",{id:"public-methods"},"Public Methods"),Object(r.b)("div",{className:"admonition admonition-note"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"NOTE: All the methods defined below return the latest instance of Context Modifier."))))),Object(r.b)("h4",{id:"public-setkey-string-data-any-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public set(key: string, data: any): ContextModifier")),Object(r.b)("p",null,"set() method is used to setup a variable that will only be used in the current execution of the bot. This variable can then be accessed using ",Object(r.b)("inlineCode",{parentName:"p"},"{{ d 'key-name-here' }}")," or ",Object(r.b)("inlineCode",{parentName:"p"},"d.key-name-here")," depending on the node you are using."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value for the key")))),Object(r.b)("h4",{id:"public-setsessionkey-string-data-any-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public setSession(key: string, data: any): ContextModifier")),Object(r.b)("p",null,"setSession() method is used to setup a variable that can be used in the current session of the user. This variable can then be accessed using ",Object(r.b)("inlineCode",{parentName:"p"},"{{ s 'key-name-here' }}")," or ",Object(r.b)("inlineCode",{parentName:"p"},"s.key-name-here")," depending on the node you are using."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value for the key")))),Object(r.b)("h4",{id:"public-setuserkey-string-data-any-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public setUser(key: string, data: any): ContextModifier")),Object(r.b)("p",null,"setUser() method is used to add a key-value pair in the user data. This variable can then be accessed using ",Object(r.b)("inlineCode",{parentName:"p"},"{{ u 'key-name-here' }}")," or ",Object(r.b)("inlineCode",{parentName:"p"},"u.key-name-here")," depending on the node you are using."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value for the key")))),Object(r.b)("h4",{id:"public-setenvironmentkey-string-data-any-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public setEnvironment(key: string, data: any): ContextModifier")),Object(r.b)("p",null,"setEnvironment() method is used to setup a variable for the bot. This variable can then be accessed using ",Object(r.b)("inlineCode",{parentName:"p"},"{{ e 'key-name-here' }}")," or ",Object(r.b)("inlineCode",{parentName:"p"},"e.key-name-here")," depending on the node you are using."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value for the key")))),Object(r.b)("h4",{id:"public-deletekey-string-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public delete(key: string): ContextModifier")),Object(r.b)("p",null,"delete() method is used to delete a current execution scope variable."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")))),Object(r.b)("h4",{id:"public-deletesessionkey-string-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public deleteSession(key: string): ContextModifier")),Object(r.b)("p",null,"deleteSession() method is used to delete a session scoped variable."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")))),Object(r.b)("h4",{id:"public-deleteuserkey-string-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public deleteUser(key: string): ContextModifier")),Object(r.b)("p",null,"deleteUser() method is used to delete a user's key-value pair."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")))),Object(r.b)("h4",{id:"public-deleteenvironmentkey-string-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public deleteEnvironment(key: string): ContextModifier")),Object(r.b)("p",null,"deleteEnvironment() method is used to delete an environment variable."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")))),Object(r.b)("h4",{id:"public-clear-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public clear(): ContextModifier")),Object(r.b)("p",null,"clear() method is used to delete all the execution scope variables."),Object(r.b)("h4",{id:"public-clearsession-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public clearSession(): ContextModifier")),Object(r.b)("p",null,"clearSession() method is used to delete all the session scope variables."),Object(r.b)("h4",{id:"public-clearuser-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public clearUser(): ContextModifier")),Object(r.b)("p",null,"clearUser() method is used to delete all the user data."),Object(r.b)("h4",{id:"public-clearenvironment-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public clearEnvironment(): ContextModifier")),Object(r.b)("p",null,"clearEnvironment() method is used to delete all the environment variables."),Object(r.b)("h4",{id:"public-logtracemessage-string-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public logTrace(message: string): ContextModifier")),Object(r.b)("p",null,"logTrace() method is used to log a trace message."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message to be logged")))),Object(r.b)("h4",{id:"public-logdebugmessage-string-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public logDebug(message: string): ContextModifier")),Object(r.b)("p",null,"logDebug() method is used to log a debug message."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message to be logged")))),Object(r.b)("h4",{id:"public-loginfomessage-string-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public logInfo(message: string): ContextModifier")),Object(r.b)("p",null,"logInfo() method is used to log an info message."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message to be logged")))),Object(r.b)("h4",{id:"public-logwarningmessage-string-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public logWarning(message: string): ContextModifier")),Object(r.b)("p",null,"logWarning() method is used to log a warning message."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message to be logged")))),Object(r.b)("h4",{id:"public-logerrormessage-string-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public logError(message: string): ContextModifier")),Object(r.b)("p",null,"logError() method is used to log an error message."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message to be logged")))),Object(r.b)("h4",{id:"public-errorerr-error-contextmodifier"},Object(r.b)("inlineCode",{parentName:"h4"},"public error(err: Error): ContextModifier")),Object(r.b)("p",null,"error() method is used to throw an error."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"err"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/node-sdk/models/error"}),"Error")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Error to be thrown")))))}O.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return m}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),O=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},j=function(e){var t=O(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=O(a),p=n,m=j["".concat(l,".").concat(p)]||j[p]||d[p]||r;return a?b.a.createElement(m,c({ref:t},o,{components:a})):b.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<r;o++)l[o]=a[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);