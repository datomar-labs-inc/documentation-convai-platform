(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),b=(a(0),a(269)),i={id:"context-modifier",title:"Context Modifier",sidebar_label:"Context Modifier"},c={id:"go-sdk/methods/context-modifier",title:"Context Modifier",description:"Context Modifier is used to change the context of the conversation, it is usually used in the **[Broadcast](../apis/broadcast)** API. We can use its methods to set or delete variables in different scope of the conversation. For example, you can set variables that will be used in the current execution only like a message or if you want to save some data for the session, like ```liveChatStartedAt```, you can save that in the session scope data.",source:"@site/docs/go-sdk/methods/context-modifier.mdx",permalink:"/go-sdk/methods/context-modifier",sidebar_label:"Context Modifier",sidebar:"someSidebar",previous:{title:"Execution Matcher",permalink:"/go-sdk/methods/execution-matcher"},next:{title:"Flaggable",permalink:"/go-sdk/methods/flaggable"}},o=[{value:"Example",id:"example",children:[]},{value:"Methods Summary",id:"methods-summary",children:[]},{value:"Methods",id:"methods",children:[]}],l={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Context Modifier is used to change the context of the conversation, it is usually used in the ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"../apis/broadcast"}),"Broadcast"))," API. We can use its methods to set or delete variables in different scope of the conversation. For example, you can set variables that will be used in the current execution only like a message or if you want to save some data for the session, like ",Object(b.b)("inlineCode",{parentName:"p"},"liveChatStartedAt"),", you can save that in the session scope data."),Object(b.b)("p",null,"Refer to ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"../types#contextmodifier"}),"ContextModifier"))," for more type information."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'cm := NewContextModifier()\n\ncm.Set("message", "Hi. Thanks for contacting us. An agent will be with you shortly")\ncm.SetUser("numberOfAgents", 12)\n')),Object(b.b)("h2",{id:"methods-summary"},"Methods Summary"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#newcontextmodifier-contextmodifier"}),"NewContextModifier"),"() ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Constructor of the ",Object(b.b)("strong",{parentName:"td"},"ContextModifier")," type")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-errorerr-execerror-contextmodifier"}),"Error"),"(err ExecError) ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Append an error in the Context Modifier")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-setsessionkey-string-data-interface-contextmodifier"}),"SetSession"),"(key string, data interface{}) ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set a session scope variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-setkey-string-data-interface-contextmodifier"}),"Set"),"(key string, data interface{}) ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set a context/execution scope variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-setuserkey-string-data-interface-contextmodifier"}),"SetUser"),"(key string, data interface{}) ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set a user scope variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-setenvironmentkey-string-data-interface-contextmodifier"}),"SetEnvironment"),"(key string, data interface{})"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set an environment variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-deletesessionkey-string-contextmodifier"}),"DeleteSession"),"(key string) ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete a session scope variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-deletekey-string-contextmodifier"}),"Delete"),"(key string) ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete an execution scoped variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-deleteuserkey-string-contextmodifier"}),"DeleteUser"),"(key string) ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete a user scope variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-deleteenvironmentkey-string-contextmodifier"}),"DeleteEnvironment"),"(key string) ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete an environment variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-clearsession-contextmodifier"}),"ClearSession"),"() ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clear all session scope variables")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-clearuser-contextmodifier"}),"ClearUser"),"() ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clear all execution scoped variables")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-clearenvironment-contextmodifier"}),"ClearEnvironment"),"() ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clear all user scope variables")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-clearcontext-contextmodifier"}),"ClearContext"),"() ","*","ContextModifier"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clear all environment variables")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-logtracemessage-string-contextmodifier"}),"LogTrace"),"(message string)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Append Log of trace message in the Context Modifier")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-logdebugmessage-string-contextmodifier"}),"LogDebug"),"(message string)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Append Log of debug message in the Context Modifier")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-loginfomessage-string-contextmodifier"}),"LogInfo"),"(message string)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Append Log of info message in the Context Modifier")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-logwarningmessage-string-contextmodifier"}),"LogWarning"),"(message string)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Append Log of warning message in the Context Modifier")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(cm ","*","ContextModifier) ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#cm-contextmodifier-logerrormessage-string-contextmodifier"}),"LogError"),"(message string)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Append Log of error message in the Context Modifier")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h4",{id:"newcontextmodifier-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"NewContextModifier() *ContextModifier")),Object(b.b)("p",null,"The NewContextModifier() is the constructor of ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"../types#contextmodifier"}),"ContextModifer"))," type."),Object(b.b)("h4",{id:"cm-contextmodifier-errorerr-execerror-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) Error(err ExecError) *ContextModifier")),Object(b.b)("p",null,"The Error() method is used to append an error in the Context Modifier."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"err"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"../types#execerror"}),"ExecError"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ExecError type")))),Object(b.b)("h4",{id:"cm-contextmodifier-setsessionkey-string-data-interface-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) SetSession(key string, data interface{}) *ContextModifier")),Object(b.b)("p",null,"The SetSession() method is used to setup a variable that can be used in the current session of the user."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key of the variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interface{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value of the data")))),Object(b.b)("h4",{id:"cm-contextmodifier-setkey-string-data-interface-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) Set(key string, data interface{}) *ContextModifier")),Object(b.b)("p",null,"The Set() method is used to setup a variable that will only be used in the current execution of the bot."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key of the variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interface{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value of the data")))),Object(b.b)("h4",{id:"cm-contextmodifier-setuserkey-string-data-interface-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) SetUser(key string, data interface{}) *ContextModifier")),Object(b.b)("p",null,"The SetUser() method is used to add a key-value pair in the user data."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key of the variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interface{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value of the data")))),Object(b.b)("h4",{id:"cm-contextmodifier-setenvironmentkey-string-data-interface-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) SetEnvironment(key string, data interface{}) *ContextModifier")),Object(b.b)("p",null,"The SetEnvironment() method is used to setup an environment variable for the bot."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key of the variable")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"interface{}"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value of the data")))),Object(b.b)("h4",{id:"cm-contextmodifier-deletesessionkey-string-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) DeleteSession(key string) *ContextModifier")),Object(b.b)("p",null,"The DeleteSession() method is used to delete a session scoped variable."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key of the variable")))),Object(b.b)("h4",{id:"cm-contextmodifier-deletekey-string-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) Delete(key string) *ContextModifier")),Object(b.b)("p",null,"The Delete() method is used to delete a current execution scope variable."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key of the variable")))),Object(b.b)("h4",{id:"cm-contextmodifier-deleteuserkey-string-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) DeleteUser(key string) *ContextModifier")),Object(b.b)("p",null,"The DeleteUser() method is used to delete a user's key-value pair."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key of the variable")))),Object(b.b)("h4",{id:"cm-contextmodifier-deleteenvironmentkey-string-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) DeleteEnvironment(key string) *ContextModifier")),Object(b.b)("p",null,"The DeleteEnvironment() method is used to delete an environment variable."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key of the variable")))),Object(b.b)("h4",{id:"cm-contextmodifier-clearsession-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) ClearSession() *ContextModifier")),Object(b.b)("p",null,"The ClearSession() method is used to delete all the session scope variables."),Object(b.b)("h4",{id:"cm-contextmodifier-clearuser-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) ClearUser() *ContextModifier")),Object(b.b)("p",null,"The ClearUser() method is used to delete all the user data."),Object(b.b)("h4",{id:"cm-contextmodifier-clearenvironment-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) ClearEnvironment() *ContextModifier")),Object(b.b)("p",null,"The ClearEnvironment() method is used to delete all the environment variables."),Object(b.b)("h4",{id:"cm-contextmodifier-clearcontext-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) ClearContext() *ContextModifier")),Object(b.b)("p",null,"The ClearContext() method is used to delete all the execution scope variables."),Object(b.b)("h4",{id:"cm-contextmodifier-logtracemessage-string-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) LogTrace(message string) *ContextModifier")),Object(b.b)("p",null,"The LogTrace() method is used to append a log of trace message in the Context Modifier."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message of the log")))),Object(b.b)("h4",{id:"cm-contextmodifier-logdebugmessage-string-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) LogDebug(message string) *ContextModifier")),Object(b.b)("p",null,"The LogTrace() method is used to append a log of debug message in the Context Modifier."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message of the log")))),Object(b.b)("h4",{id:"cm-contextmodifier-loginfomessage-string-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) LogInfo(message string) *ContextModifier")),Object(b.b)("p",null,"The LogTrace() method is used to append a log of info message in the Context Modifier."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message of the log")))),Object(b.b)("h4",{id:"cm-contextmodifier-logwarningmessage-string-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) LogWarning(message string) *ContextModifier")),Object(b.b)("p",null,"The LogTrace() method is used to append a log of warning message in the Context Modifier."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message of the log")))),Object(b.b)("h4",{id:"cm-contextmodifier-logerrormessage-string-contextmodifier"},Object(b.b)("inlineCode",{parentName:"h4"},"(cm *ContextModifier) LogError(message string) *ContextModifier")),Object(b.b)("p",null,"The LogTrace() method is used to append a log of error message in the Context Modifier."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message of the log")))))}d.isMDXComponent=!0},269:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},m=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(a),j=n,s=m["".concat(i,".").concat(j)]||m[j]||O[j]||b;return a?r.a.createElement(s,c({ref:t},l,{components:a})):r.a.createElement(s,c({ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=j;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<b;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);