(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(1),i=n(9),a=(n(0),n(227)),r=n(229),s={id:"enhance-bot",title:"Enhance the Tutorial Bot",sidebar_label:"Enhance the Tutorial Bot",description:"Step by step guide to make your first simple bot on Convai Studio"},c={id:"convai-studio/simple-bot/building-a-bot/enhance-bot",title:"Enhance the Tutorial Bot",description:"Step by step guide to make your first simple bot on Convai Studio",source:"@site/docs/convai-studio/simple-bot/building-a-bot/enhance-bot.mdx",permalink:"/convai-studio/simple-bot/building-a-bot/enhance-bot",sidebar_label:"Enhance the Tutorial Bot"},l=[{value:"Enhance the Tutorial Bot",id:"enhance-the-tutorial-bot",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"enhance-the-tutorial-bot"},"Enhance the Tutorial Bot"),Object(a.b)("p",null,"In this section, we are going to add a challenge feature which allows the user to answer ten quiz questions and show the user\u2019s final score. And a Get Point feature allows the user to get its points and reset it. And Finally, add a welcome message to give a hint to the user on how to interact with the bot."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"On the Main Graph, create a module named \u201cChallenge\u201d and connect it to Any Time System Node with Challenge intent Link, enter its graph."),Object(a.b)("img",{alt:"add challenge module",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image24.png")}),Object(a.b)("p",{parentName:"li"},"The Challenge Intent in DialogFlow:"),Object(a.b)("img",{alt:"challenge intent contents",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image102.png")}),Object(a.b)("p",{parentName:"li"},"Create the graph like below (Set Loop Index is a Set Data Node):"),Object(a.b)("img",{alt:"challenge module graph",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image14.png")}),Object(a.b)("p",{parentName:"li"},"Notice that we are reusing the module we created before - Get Questions and Ask Question Module (Modules has an icon on its top-left corner). When you develop your own bot, think carefully about how to modularize your bot functionalities so that you can reuse them anywhere you need, this makes the development process very flexible.\nEdit the Challenge Starts Response Node:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"<response>\n    <message>\n        <text>Let's start the challenge!</text>\n    </message>\n</response>\n")),Object(a.b)("p",{parentName:"li"},"Remember in the Main graph, the Get Questions Module is connected to the Any Time system Node with AskQuestion intent link. Think Any Time Node as a User Input Node. Therefore, set the link between the User Input Node and Get Questions Module to be AskQuestion intent link."),Object(a.b)("img",{alt:"set ask question intent link",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image25.png")}),Object(a.b)("p",{parentName:"li"},"Click on the Get Questions Module, edit its module variable \u201cqAmount\u201d to 10 in order to get 10 questions from the Trivia API."),Object(a.b)("img",{alt:"set qAmount to 10",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image100.png")}),Object(a.b)("p",{parentName:"li"},"We have got 10 quiz questions from the Get Questions Module, then we need the user to answer these 10 questions. However, the Ask Question Module only asks and lets the user answer one question. Using a loop to loop 10 times of the Ask Question Module is a straightforward strategy here."),Object(a.b)("p",{parentName:"li"},"Edit the Set Loop Index Set Data Node:"),Object(a.b)("img",{alt:"set loop index",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image2.png")}),Object(a.b)("p",{parentName:"li"},"Edit Index++ Script Node:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'module.exports = async function main() {\n    //get index from Session Data\n    let index = ctx.session.get("index");\n    index++;\n    //set index in Session Data\n    setSession("index",index);\n}\n')),Object(a.b)("p",{parentName:"li"},"We need to determine when the loop is finished by using Data Equals Link."),Object(a.b)("img",{alt:"end loop",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image43.png")}),Object(a.b)("p",{parentName:"li"},"This loop can be illustrated in the following pseudo-code"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"index = 0 // Set Loop Index Node\nstart loop\n    Ask Questions\n    index++  // Index++ Node\n    if (index == 10)\n        end loop \n-> Delete Data Node\n")),Object(a.b)("p",{parentName:"li"},"Edit Delete Data Node:"),Object(a.b)("img",{alt:"delete index and questions",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image61.png")}),Object(a.b)("p",{parentName:"li"},"Remember that we have deleted s.currentQuestions inside the Ask Question Module, if we delete s.questions we got from the API call in that module then we are not able to make the bot ask the next 9 questions in the Challenge Module. So we delete s.questions outside of the Ask Question Module.\nEdit Final Score Response Node:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"<response>\n    <message>\n        <text>You have finished the challenge. Your final score is: {{user\\.data\\.point}}</text>\n    </message>\n</response>\n")),Object(a.b)("p",{parentName:"li"},"The execution of Challenge Module:"),Object(a.b)("img",{alt:"challenge module execution",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image1.gif")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"We have the Challenge Module ready, now we need a Get Point Module for the user to get its score or reset it. Create this Module on the Main graph and connect it to Any Time system Node with GetPoints intent link."),Object(a.b)("img",{alt:"add get points",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image36.png")}),Object(a.b)("p",{parentName:"li"},"GetPoints Intent in DialogFlow:"),Object(a.b)("img",{alt:"get points intent contents",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image45.png")}),Object(a.b)("p",{parentName:"li"},"Inside the module, create the graph (Reset Point is Set Data Node):"),Object(a.b)("img",{alt:"get points graph",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image23.png")}),Object(a.b)("p",{parentName:"li"},"Edit Your Score Response Node:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"<response>\n    <message>\n        <text>Your Score is: {{user.data.point}}. Do you want to reset your score to Zero?\n        </text>\n    </message>\n</response>\n")),Object(a.b)("p",{parentName:"li"},"This Response Prompts the user to reset its point or not. Use Affirm intent link to ensure that the flow goes to Reset Point Node if the user confirms to reset its point. Otherwise prompt a Continue message."),Object(a.b)("img",{alt:"continue or reset",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image97.png")}),Object(a.b)("p",{parentName:"li"},"Edit Reset Point Set Data Node:"),Object(a.b)("img",{alt:"reset point",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image69.png")}),Object(a.b)("p",{parentName:"li"},"Edit Continue Response Node:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"<response>\n    <message>\n        <text>You can continue on what you want to do.</text>\n    </message>\n</response>\n")),Object(a.b)("p",{parentName:"li"},"Edit Reseted Point Response Node:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"<response>\n    <message>\n        <text>Your score is set to Zero!</text>\n    </message>\n</response>\n")),Object(a.b)("p",{parentName:"li"},"The execution of Get Point Module:"),Object(a.b)("img",{alt:"get point execution",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image84.png")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"The main functionalities of this bot is set. But we do need a welcome message. A user is new to this bot, and has completely no idea how this bot works. Welcome message is an essential tool."),Object(a.b)("p",{parentName:"li"},"Create the Welcome Response Node, link it to Start and Any Time System Node with Welcome intent link."),Object(a.b)("img",{alt:"add welcome",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image55.png")}),"Welcome Intent in DialogFlow:",Object(a.b)("img",{alt:"welcome intent contents",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image8.png")}),Object(a.b)("p",{parentName:"li"},"Edit the Welcome Response Node:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),"<response>\n    <message>\n        <text>Hi I am the trivia bot. How can I help you?</text>\n    </message>\n</response>\n")),Object(a.b)("p",{parentName:"li"},"This is just a demonstration of the welcome message, you can add more information to optimize user experience."),Object(a.b)("p",{parentName:"li"},"The graph of the enhanced Tutorial Bot:"),Object(a.b)("img",{alt:"enhanced bot graph",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image83.png")}),Object(a.b)("p",{parentName:"li"},"The overall execution of the enhanced Tutorial Bot:"),Object(a.b)("img",{alt:"overall execution",src:Object(r.a)("img/convai-studio/simple-bot/building-bot/image82.gif")})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"That\u2019s it! You have learned how to create a bot with NLP and External APIs, and how to use Modules to make your development process flexible. Now let\u2019s proceed to integrate the bot into Facebook"))))}p.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=o,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||a;return n?i.a.createElement(d,s({ref:t},l,{components:n})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},228:function(e,t,n){"use strict";var o=n(0),i=n(49);t.a=function(){return Object(o.useContext)(i.a)}},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(230);var o=n(228);function i(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},230:function(e,t,n){"use strict";var o=n(12),i=n(24),a=n(231),r="".startsWith;o(o.P+o.F*n(232)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return r?r.call(t,o,n):t.slice(n,n+o.length)===o}})},231:function(e,t,n){var o=n(73),i=n(25);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},232:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);