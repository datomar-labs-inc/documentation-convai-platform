(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return p}));var n=a(1),b=a(9),r=(a(0),a(269)),l=a(271),c={id:"script",title:"Script Node",sidebar_label:"Script Node"},i={id:"convai-studio/nodes/stock/script",title:"Script Node",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/convai-studio/nodes/stock/script.mdx",permalink:"/convai-studio/nodes/stock/script",sidebar_label:"Script Node",sidebar:"someSidebar",previous:{title:"Response Node",permalink:"/convai-studio/nodes/stock/response"},next:{title:"Set Data Node",permalink:"/convai-studio/nodes/stock/set-data"}},O=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Context Object",id:"context-object",children:[]},{value:"Modification Methods on Context Object",id:"modification-methods-on-context-object",children:[]},{value:"Methods Summary",id:"methods-summary",children:[]},{value:"Environment Variable and Module Variable Access",id:"environment-variable-and-module-variable-access",children:[]}],j={rightToc:O};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"A script node is used to add custom functions/scripts in the bot. We use JavaScript for the scripting language. Refer to the documentation ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"}),"here")),Object(r.b)("div",{className:"admonition admonition-tip"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"You can use any NPM library in script. Script Nodes only support async/await."))))),Object(r.b)("img",{alt:"script node configuration",src:Object(l.a)("img/nodes/stock/script/script-node-config.png")}),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"The configuration of the node is as defined below:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Title"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The title of the node")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asynchronous"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Determine if the message should be sent asynchronously or not")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Include Convai SDK"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Include Convai SDK or not")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Include Twilio API Client"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Include Twilio API Client or not")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Script Editor"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Editor for writing the script")))),Object(r.b)("h2",{id:"context-object"},"Context Object"),Object(r.b)("p",null,"Convai provides a Context Object for you to access and modify data of different scopes in script."),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"module.exports = async function main() {\n    let d = ctx.user.data.key;\n    //print the user scope data - key\n    console.log(d)\n}\n")),Object(r.b)("h4",{id:"context-object-structure"},"Context Object Structure"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"ctx: {\n    id: string;\n    user: {\n        id: string;\n        channelId: string;\n        data: {\n            [key: string]: any\n        };\n    };\n\n    session: {\n        data: {\n            [key: string]: any\n        };\n    };\n\n    text: string;\n    channel: string;\n    source: any;\n    isStart: boolean;\n    isTrigger: boolean;\n    errors: {\n        message: string;\n    }[];\n    response: {\n        messages: {\n            data: {\n                text: string;\n            };\n        };\n    };\n}\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Context ID of current execution"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"e",".","g","."," 01cff307","-","0ebe","-","4009","-","b988","-","2105ecea7d3e")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"user",".","id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User ID of the current user"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","user",".","id"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"e",".","g","."," 056971c0","-","8775","-","446e","-","9c6a","-","69ea35b063e2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"user",".","channelId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Channel ID of the user"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","user",".","channelId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"e",".","g","."," 056971c0","-","8775","-","446e","-","9c6a","-","69ea35b063e2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data in current context/execution scope"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","data",".","[","key","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value of corresponding key","-","value pair in Context/Execution Scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"user",".","data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data in current user scope"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","user",".","data",".","[","key","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value of corresponding key","-","value pair in User Scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"session",".","data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data in current session scope"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","session",".","data",".","[","key","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value of corresponding key","-","value pair in Session Scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text of the user\u2019s input text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User input text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"channel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Channel of the current context"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","channel"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Channel name of the current context")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"source"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source of the current context"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","source"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Source of the current context")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isStart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If current context is Start"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","isStart"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True or False")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isTrigger"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If current context is Trigger"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","isTrigger"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True or False")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"errors"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Error of the current context"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","errors"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of errors objects")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","errors","[","i","]",".","message"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text of an error message of index i")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"response"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Responses of the current context"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","response"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of response objects")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","response",".","messages","[","i","]",".","data",".","text"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text of a response message of index i")))),Object(r.b)("p",null,"Convai also provides a method to get data in different scopes conveniently."),Object(r.b)("h4",{id:"getkey-string-value"},Object(r.b)("inlineCode",{parentName:"h4"},"get(key: string): value")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get data from context/execution scope"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","get","(",'"',"[","key","]",'"',")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value of corresponding key","-","value pair in Context/Execution Scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get data from session scope"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","session",".","get","(",'"',"[","key","]",'"',")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value of corresponding key","-","value pair in Session Scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get data from user scope"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ctx",".","user",".","get","(",'"',"[","key","]",'"',")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value of corresponding key","-","value pair in User Scope")))),Object(r.b)("h2",{id:"modification-methods-on-context-object"},"Modification Methods on Context Object"),Object(r.b)("p",null,"The Modification Methods basically do edits on data in different data scopes of the Context Object."),Object(r.b)("h2",{id:"methods-summary"},"Methods Summary"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set","(","key: string, data: any",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add/Set a key","-","value pair in the context/execution scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setUser","(","key: string, data: any",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add/Set a key","-","value pair in the user scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setSession","(","key: string, data: any",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add/Set a key","-","value pair in the session scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"del","(","key: string",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete a key","-","value pair in the context/execution scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"delUser","(","key: string",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete a key","-","value pair in the user scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"delSession","(","key: string",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete a key","-","value pair in the session scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clear","(",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clear all the key","-","value pairs in the context/execution scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clearUser","(",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clear all the key","-","value pairs in the user scope")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clearSession","(",")"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clear all the key","-","value pairs in the session scope")))),Object(r.b)("h4",{id:"setkey-string-data-any"},Object(r.b)("inlineCode",{parentName:"h4"},"set(key: string, data: any)")),Object(r.b)("p",null,"Add/Set a key-value pair in the context/execution scope"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value for the key")))),Object(r.b)("h4",{id:"example-1"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set","(",'"key", "val"',")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example set",src:Object(l.a)("img/nodes/stock/script/image10.png")}))))),Object(r.b)("h4",{id:"setuserkey-string-data-any"},Object(r.b)("inlineCode",{parentName:"h4"},"setUser(key: string, data: any)")),Object(r.b)("p",null,"Add/Set a key-value pair in the user scope"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value for the key")))),Object(r.b)("h4",{id:"example-2"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setUser","(",'"key", "val"',")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example setUser",src:Object(l.a)("img/nodes/stock/script/image12.png")}))))),Object(r.b)("h4",{id:"setsessionkey-string-data-any"},Object(r.b)("inlineCode",{parentName:"h4"},"setSession(key: string, data: any)")),Object(r.b)("p",null,"Add/Set a key-value pair in the session scope"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value for the key")))),Object(r.b)("h4",{id:"example-3"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setSession","(",'"key", "val"',")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example setSession",src:Object(l.a)("img/nodes/stock/script/image6.png")}))))),Object(r.b)("h4",{id:"delkey-string"},Object(r.b)("inlineCode",{parentName:"h4"},"del(key: string)")),Object(r.b)("p",null,"Delete a key-value pair in the context/execution scope"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")))),Object(r.b)("h4",{id:"example-4"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set","(",'"key", "val"',")",";",Object(r.b)("br",null)," set","(",'"nonDeleteKey", "nonDeleteVal"',")",";",Object(r.b)("br",null)," del","(",'"key"',")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example del",src:Object(l.a)("img/nodes/stock/script/image4.png")}))))),Object(r.b)("h4",{id:"deluserkey-string"},Object(r.b)("inlineCode",{parentName:"h4"},"delUser(key: string)")),Object(r.b)("p",null,"Delete a key-value pair in the user scope"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")))),Object(r.b)("h4",{id:"example-5"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setUser","(",'"key", "val"',")",";",Object(r.b)("br",null)," setUser","(",'"nonDeleteKey", "nonDeleteVal"',")",";",Object(r.b)("br",null)," delUser","(",'"key"',")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example delUser",src:Object(l.a)("img/nodes/stock/script/image5.png")}))))),Object(r.b)("h4",{id:"delsessionkey-string"},Object(r.b)("inlineCode",{parentName:"h4"},"delSession(key: string)")),Object(r.b)("p",null,"Delete a key-value pair in the session scope"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Attribute"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the key")))),Object(r.b)("h4",{id:"example-6"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"setSession","(",'"key", "val"',")",";",Object(r.b)("br",null)," setSession","(",'"nonDeleteKey", "nonDeleteVal"',")",";",Object(r.b)("br",null)," delSession","(",'"key"',")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example delSession",src:Object(l.a)("img/nodes/stock/script/image7.png")}))))),Object(r.b)("h4",{id:"clear"},Object(r.b)("inlineCode",{parentName:"h4"},"clear()")),Object(r.b)("p",null,"Clear all the key-value pairs in the context/execution scope"),Object(r.b)("h4",{id:"example-7"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set","(",'"key", "val"',")",";",Object(r.b)("br",null)," set","(",'"nonDeleteKey", "nonDeleteVal"',")",";",Object(r.b)("br",null)," clear","(",")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example clear",src:Object(l.a)("img/nodes/stock/script/image9.png")}))))),Object(r.b)("h4",{id:"clearuser"},Object(r.b)("inlineCode",{parentName:"h4"},"clearUser()")),Object(r.b)("p",null,"Clear all the key-value pairs in the user scope"),Object(r.b)("h4",{id:"example-8"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set","(",'"key", "val"',")",";",Object(r.b)("br",null)," set","(",'"nonDeleteKey", "nonDeleteVal"',")",";",Object(r.b)("br",null)," clearUser","(",")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example clearUser",src:Object(l.a)("img/nodes/stock/script/image13.png")}))))),Object(r.b)("h4",{id:"clearsession"},Object(r.b)("inlineCode",{parentName:"h4"},"clearSession()")),Object(r.b)("p",null,"Clear all the key-value pairs in the session scope"),Object(r.b)("h4",{id:"example-9"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"set","(",'"key", "val"',")",";",Object(r.b)("br",null)," set","(",'"nonDeleteKey", "nonDeleteVal"',")",";",Object(r.b)("br",null)," clear","(",")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example clearSession",src:Object(l.a)("img/nodes/stock/script/image11.png")}))))),Object(r.b)("h2",{id:"environment-variable-and-module-variable-access"},"Environment Variable and Module Variable Access"),Object(r.b)("p",null,"Convai provides ways to access Environment Variables and Module Variables"),Object(r.b)("h4",{id:"processenvkey"},Object(r.b)("inlineCode",{parentName:"h4"},"process.env.[key]")),Object(r.b)("p",null,"This gives the value of the environment variable with corresponding key-value pair."),Object(r.b)("h4",{id:"example-10"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Environment Variable Setting"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example env setting",src:Object(l.a)("img/nodes/stock/script/image3.png")})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"console",".","log","(","process",".","env",".","ENV","_","VAR",")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example process.env output",src:Object(l.a)("img/nodes/stock/script/image1.png")}))))),Object(r.b)("h4",{id:"envkey"},Object(r.b)("inlineCode",{parentName:"h4"},"env.[key]")),Object(r.b)("p",null,"This gives exactly the same output as process.env.","[","key","]","."),Object(r.b)("h4",{id:"example-11"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Environment Variable Setting"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example env setting",src:Object(l.a)("img/nodes/stock/script/image3.png")})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"console",".","log","(","env",".","ENV","_","VAR",")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example env output",src:Object(l.a)("img/nodes/stock/script/image1.png")}))))),Object(r.b)("h4",{id:"modvarskey"},Object(r.b)("inlineCode",{parentName:"h4"},"modvars.[key]")),Object(r.b)("p",null,"This gives the value of the Module Variable with corresponding key-value pair."),Object(r.b)("h4",{id:"example-12"},"Example"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Module Variable Setting"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Input"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Output"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example modvar setting",src:Object(l.a)("img/nodes/stock/script/image8.png")})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"console",".","log","(","modvars",".","moduleVar",")",";"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("img",{alt:"example modvars output",src:Object(l.a)("img/nodes/stock/script/image2.png")}))))))}p.isMDXComponent=!0},269:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),p=j(a),d=n,u=p["".concat(l,".").concat(d)]||p[d]||o[d]||r;return a?b.a.createElement(u,c({ref:t},O,{components:a})):b.a.createElement(u,c({ref:t},O))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var O=2;O<r;O++)l[O]=a[O];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},270:function(e,t,a){"use strict";var n=a(0),b=a(49);t.a=function(){return Object(n.useContext)(b.a)}},271:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));a(272);var n=a(270);function b(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},272:function(e,t,a){"use strict";var n=a(12),b=a(24),r=a(273),l="".startsWith;n(n.P+n.F*a(274)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),a=b(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return l?l.call(t,n,a):t.slice(a,a+n.length)===n}})},273:function(e,t,a){var n=a(73),b=a(25);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(b(e))}},274:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(b){}}return!0}}}]);