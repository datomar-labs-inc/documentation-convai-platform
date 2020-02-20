/*! For license information please see 0f037139.3634a3f2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{199:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t(9),i=t(0),l=t.n(i),o=t(201),c=(t(24),t(18),t(19),t(207)),d=t.n(c),s=t(124),u=t.n(s),b=37,f=39;var m=function(n){var e=n.block,t=n.children,a=n.defaultValue,r=n.values,o=Object(i.useState)(a),c=o[0],s=o[1],m=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:d()("tabs",{"tabs--block":e})},r.map((function(n){var e=n.value,t=n.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":c===e,className:d()("tab-item",u.a.tabItem,{"tab-item--active":c===e}),key:e,ref:function(n){return m.push(n)},onKeyDown:function(n){return function(n,e,t){switch(t.keyCode){case f:!function(n,e){var t=n.indexOf(e)+1;n[t]?n[t].focus():n[0].focus()}(n,e);break;case b:!function(n,e){var t=n.indexOf(e)-1;n[t]?n[t].focus():n[n.length-1].focus()}(n,e)}}(m,n.target,n)},onFocus:function(){return s(e)},onClick:function(){return s(e)}},t)}))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(t).filter((function(n){return n.props.value===c}))[0]))};var p=function(n){return l.a.createElement("div",null,n.children)};t.d(e,"frontMatter",(function(){return g})),t.d(e,"metadata",(function(){return y})),t.d(e,"rightToc",(function(){return h})),t.d(e,"default",(function(){return x}));var g={id:"query-executions",title:"Query Executions",sidebar_label:"Query Executions"},y={id:"node-sdk/methods/query-executions",title:"Query Executions",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/node-sdk/methods/query-executions.md",permalink:"/docs/node-sdk/methods/query-executions",editUrl:"https://github.com/datomar-labs-inc/documentation-convai-platform/docs/node-sdk/methods/query-executions.md",sidebar_label:"Query Executions",sidebar:"someSidebar",previous:{title:"Merge Users",permalink:"/docs/node-sdk/methods/merge-users"},next:{title:"Query Users",permalink:"/docs/node-sdk/methods/query-users"}},h=[{value:"Reference",id:"reference",children:[]}],j={rightToc:h};function x(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(o.b)("wrapper",Object(a.a)({},j,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use the queryExecutions() method to query executions from the Convai bot. The queryExecutions() method returns a promise with an array of executions. To be more precise, it returns a promise with a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../models/execution-query-result"}),"ExecutionQueryResult")," object."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const {ConvaiAPIClient, ExecutionMatcher} = require('convai-sdk');\n\nconst convai = new ConvaiAPIClient(API_KEY);\n\nconvai\n    .queryExecutions(new ExecutionMatcher().where('userId').equals('ef44ad85-b97a-477b-b314-abcdefghijkl'))\n    .then(executions => console.log(executions));\n")),Object(o.b)("p",null,"To add multiple conditions you can stack them on the execution matcher. For example, if we want executions for a user from just the facebook channel"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"convai\n    .queryExecutions(new ExecutionMatcher().where('userId').equals('ef44ad85-b97a-477b-b314-abcdefghijkl').where('channel').equals('facebook'))\n    .then(executions => console.log(executions));\n")),Object(o.b)("p",null,"You can also negate a condition. For example, if we want all the executions for a user except for the facebook channel"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"convai\n    .queryExecutions(new ExecutionMatcher().where('userId').equals('ef44ad85-b97a-477b-b314-abcdefghijkl').where('channel').equals('facebook').not())\n    .then(executions => console.log(executions));\n")),Object(o.b)("h4",{id:"example-response"},"Example Response"),Object(o.b)(m,{defaultValue:"condensed",values:[{label:"Condensed View",value:"condensed"},{label:"Detailed View",value:"detailed"}],mdxType:"Tabs"},Object(o.b)(p,{value:"condensed",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{ executions:\n   [ { id: '02b65ad6-0b98-45a3-97a5-bcd1493530ab',\n       userId: 'ef44ad85-b97a-477b-b314-abcdefghijkl',\n       channelUserId: 'dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a',\n       sessionId: '2a8ccc7f-ccc1-42bc-a8d5-100c767f4e7b',\n       environmentId: 'a3c36585-6a7d-4369-85b3-25b6cab01504',\n       blueprintId: 'acf748b1-3804-48ac-84e7-dee7ad32cc7c',\n       data: [Object],\n       userData: [Object],\n       sessionData: {},\n       text: 'hi',\n       channel: 'channel_dev',\n       source: null,\n       isStart: false,\n       isTrigger: false,\n       errors: [Array],\n       response: [Object],\n       logs: [Array],\n       executionDuration: 938,\n       startTime: '2020-02-11T20:50:10Z' },\n     { id: 'f18d4677-51e0-4f03-b994-275720b4a192',\n       userId: 'ef44ad85-b97a-477b-b314-abcdefghijkl',\n       channelUserId: 'dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a',\n       sessionId: '1ceacc04-c258-433d-aae8-32eb09ae6692',\n       environmentId: 'a3c36585-6a7d-4369-85b3-25b6cab01504',\n       blueprintId: 'acf748b1-3804-48ac-84e7-dee7ad32cc7c',\n       data: [Object],\n       userData: [Object],\n       sessionData: {},\n       text: 'hi',\n       channel: 'channel_dev',\n       source: null,\n       isStart: false,\n       isTrigger: false,\n       errors: [Array],\n       response: [Object],\n       logs: [Array],\n       executionDuration: 833,\n       startTime: '2020-02-12T19:43:02Z' } ],\n  total: 2 }\n"))),Object(o.b)(p,{value:"detailed",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "executions": [\n    {\n      "id": "02b65ad6-0b98-45a3-97a5-bcd1493530ab",\n      "userId": "ef44ad85-b97a-477b-b314-abcdefghijkl",\n      "channelUserId": "dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a",\n      "sessionId": "2a8ccc7f-ccc1-42bc-a8d5-100c767f4e7b",\n      "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n      "blueprintId": "acf748b1-3804-48ac-84e7-dee7ad32cc7c",\n      "data": {\n        "_dialogflowRawResponse": {\n          "query_result": {\n            "action": "input.welcome",\n            "all_required_params_present": true,\n            "fulfillment_messages": [\n              {\n                "Message": {\n                  "Text": {\n                    "text": [\n                      "Good day! What can I do for you today?"\n                    ]\n                  }\n                }\n              }\n            ],\n            "fulfillment_text": "Good day! What can I do for you today?",\n            "intent": {\n              "display_name": "Default Welcome Intent",\n              "name": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"\n            },\n            "intent_detection_confidence": 1,\n            "language_code": "en",\n            "parameters": {},\n            "query_text": "hi"\n          },\n          "response_id": "dd8c73aa-3b36-4ec5-abfa-a391c3e72f64-2e39b744"\n        },\n        "intent": "Default Welcome Intent",\n        "intentConfidence": 1,\n        "intentId": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"\n      },\n      "userData": {\n        "firstName": "Hasanpreet"\n      },\n      "sessionData": {},\n      "text": "hi",\n      "channel": "channel_dev",\n      "source": null,\n      "isStart": false,\n      "isTrigger": false,\n      "errors": [\n        {\n          "et": "node",\n          "graphId": -1,\n          "nodeId": 51,\n          "linkId": null,\n          "message": "missing dashbot config"\n        }\n      ],\n      "response": {\n        "messages": [\n          {\n            "text": "What is your phone number?",\n            "typingTime": 1000,\n            "shouldBatch": true,\n            "graphId": 1,\n            "nodeId": 55,\n            "blocks": null,\n            "seq": 7\n          }\n        ]\n      },\n      "logs": [\n        {\n          "gid": 0,\n          "nid": null,\n          "lid": null,\n          "ety": 2,\n          "eti": 0,\n          "cmo": {\n            "changes": [],\n            "logs": [],\n            "errors": []\n          }\n        },\n        {\n          "gid": -1,\n          "nid": 0,\n          "lid": null,\n          "ety": 1,\n          "eti": 5540,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 0,\n          "ety": 0,\n          "eti": 4097,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 40,\n          "ety": 0,\n          "eti": 1498,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": 4,\n          "lid": null,\n          "ety": 1,\n          "eti": 938200514,\n          "cmo": {\n            "changes": [\n              {\n                "type": 0,\n                "op": 0,\n                "key": "_dialogflowRawResponse",\n                "data": {\n                  "query_result": {\n                    "action": "input.welcome",\n                    "all_required_params_present": true,\n                    "fulfillment_messages": [\n                      {\n                        "Message": {\n                          "Text": {\n                            "text": [\n                              "Good day! What can I do for you today?"\n                            ]\n                          }\n                        }\n                      }\n                    ],\n                    "fulfillment_text": "Good day! What can I do for you today?",\n                    "intent": {\n                      "display_name": "Default Welcome Intent",\n                      "name": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"\n                    },\n                    "intent_detection_confidence": 1,\n                    "language_code": "en",\n                    "parameters": {},\n                    "query_text": "hi"\n                  },\n                  "response_id": "dd8c73aa-3b36-4ec5-abfa-a391c3e72f64-2e39b744"\n                }\n              },\n              {\n                "type": 0,\n                "op": 0,\n                "key": "intent",\n                "data": "Default Welcome Intent"\n              },\n              {\n                "type": 0,\n                "op": 0,\n                "key": "intentId",\n                "data": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"\n              },\n              {\n                "type": 0,\n                "op": 0,\n                "key": "intentConfidence",\n                "data": 1\n              }\n            ],\n            "logs": [],\n            "errors": []\n          }\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 7,\n          "ety": 0,\n          "eti": 3188,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 2,\n          "ety": 0,\n          "eti": 348,\n          "cmo": null\n        },\n        {\n          "gid": 0,\n          "nid": 0,\n          "lid": null,\n          "ety": 1,\n          "eti": 2131,\n          "cmo": null\n        },\n        {\n          "gid": 0,\n          "nid": null,\n          "lid": 5,\n          "ety": 0,\n          "eti": 2110,\n          "cmo": null\n        },\n        {\n          "gid": 1,\n          "nid": 0,\n          "lid": null,\n          "ety": 1,\n          "eti": 699,\n          "cmo": null\n        },\n        {\n          "gid": 1,\n          "nid": null,\n          "lid": 42,\n          "ety": 0,\n          "eti": 473,\n          "cmo": null\n        },\n        {\n          "gid": 1,\n          "nid": 55,\n          "lid": null,\n          "ety": 1,\n          "eti": 200378,\n          "cmo": {\n            "changes": [],\n            "logs": [],\n            "errors": []\n          }\n        },\n        {\n          "gid": 1,\n          "nid": null,\n          "lid": 45,\n          "ety": 0,\n          "eti": 989,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": 51,\n          "lid": null,\n          "ety": 1,\n          "eti": 23991,\n          "cmo": {\n            "changes": [],\n            "logs": [\n              {\n                "level": 20,\n                "message": "missing dashbot config",\n                "time": "2020-02-11T20:50:11.872416889Z"\n              }\n            ],\n            "errors": [\n              {\n                "et": "node",\n                "graphId": -1,\n                "nodeId": 51,\n                "linkId": null,\n                "message": "missing dashbot config"\n              }\n            ]\n          }\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 38,\n          "ety": 0,\n          "eti": 452,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": 3,\n          "lid": null,\n          "ety": 1,\n          "eti": 2240,\n          "cmo": {\n            "changes": [],\n            "logs": [],\n            "errors": []\n          }\n        }\n      ],\n      "executionDuration": 938,\n      "startTime": "2020-02-11T20:50:10Z"\n    },\n    {\n      "id": "f18d4677-51e0-4f03-b994-275720b4a192",\n      "userId": "ef44ad85-b97a-477b-b314-abcdefghijkl",\n      "channelUserId": "dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a",\n      "sessionId": "1ceacc04-c258-433d-aae8-32eb09ae6692",\n      "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",\n      "blueprintId": "acf748b1-3804-48ac-84e7-dee7ad32cc7c",\n      "data": {\n        "_dialogflowRawResponse": {\n          "query_result": {\n            "action": "input.welcome",\n            "all_required_params_present": true,\n            "fulfillment_messages": [\n              {\n                "Message": {\n                  "Text": {\n                    "text": [\n                      "Hello! How can I help you?"\n                    ]\n                  }\n                }\n              }\n            ],\n            "fulfillment_text": "Hello! How can I help you?",\n            "intent": {\n              "display_name": "Default Welcome Intent",\n              "name": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"\n            },\n            "intent_detection_confidence": 1,\n            "language_code": "en",\n            "parameters": {},\n            "query_text": "hi"\n          },\n          "response_id": "54f9e5d5-bd5d-4b20-8848-8805c3af1bdd-2e39b744"\n        },\n        "intent": "Default Welcome Intent",\n        "intentConfidence": 1,\n        "intentId": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"\n      },\n      "userData": {\n        "firstName": "Hasanpreet"\n      },\n      "sessionData": {},\n      "text": "hi",\n      "channel": "channel_dev",\n      "source": null,\n      "isStart": false,\n      "isTrigger": false,\n      "errors": [\n        {\n          "et": "node",\n          "graphId": -1,\n          "nodeId": 51,\n          "linkId": null,\n          "message": "missing dashbot config"\n        }\n      ],\n      "response": {\n        "messages": [\n          {\n            "text": "Hi Hasanpreet. How are you doing?",\n            "typingTime": 1000,\n            "shouldBatch": true,\n            "graphId": 1,\n            "nodeId": 66,\n            "blocks": null,\n            "seq": 7\n          }\n        ]\n      },\n      "logs": [\n        {\n          "gid": 0,\n          "nid": null,\n          "lid": null,\n          "ety": 2,\n          "eti": 0,\n          "cmo": {\n            "changes": [],\n            "logs": [],\n            "errors": []\n          }\n        },\n        {\n          "gid": -1,\n          "nid": 0,\n          "lid": null,\n          "ety": 1,\n          "eti": 4565,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 0,\n          "ety": 0,\n          "eti": 3316,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 40,\n          "ety": 0,\n          "eti": 1610,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": 4,\n          "lid": null,\n          "ety": 1,\n          "eti": 832518483,\n          "cmo": {\n            "changes": [\n              {\n                "type": 0,\n                "op": 0,\n                "key": "_dialogflowRawResponse",\n                "data": {\n                  "query_result": {\n                    "action": "input.welcome",\n                    "all_required_params_present": true,\n                    "fulfillment_messages": [\n                      {\n                        "Message": {\n                          "Text": {\n                            "text": [\n                              "Hello! How can I help you?"\n                            ]\n                          }\n                        }\n                      }\n                    ],\n                    "fulfillment_text": "Hello! How can I help you?",\n                    "intent": {\n                      "display_name": "Default Welcome Intent",\n                      "name": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"\n                    },\n                    "intent_detection_confidence": 1,\n                    "language_code": "en",\n                    "parameters": {},\n                    "query_text": "hi"\n                  },\n                  "response_id": "54f9e5d5-bd5d-4b20-8848-8805c3af1bdd-2e39b744"\n                }\n              },\n              {\n                "type": 0,\n                "op": 0,\n                "key": "intent",\n                "data": "Default Welcome Intent"\n              },\n              {\n                "type": 0,\n                "op": 0,\n                "key": "intentId",\n                "data": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"\n              },\n              {\n                "type": 0,\n                "op": 0,\n                "key": "intentConfidence",\n                "data": 1\n              }\n            ],\n            "logs": [],\n            "errors": []\n          }\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 7,\n          "ety": 0,\n          "eti": 2834,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 2,\n          "ety": 0,\n          "eti": 579,\n          "cmo": null\n        },\n        {\n          "gid": 0,\n          "nid": 0,\n          "lid": null,\n          "ety": 1,\n          "eti": 1633,\n          "cmo": null\n        },\n        {\n          "gid": 0,\n          "nid": null,\n          "lid": 5,\n          "ety": 0,\n          "eti": 1594,\n          "cmo": null\n        },\n        {\n          "gid": 1,\n          "nid": 0,\n          "lid": null,\n          "ety": 1,\n          "eti": 18085,\n          "cmo": null\n        },\n        {\n          "gid": 1,\n          "nid": null,\n          "lid": 42,\n          "ety": 0,\n          "eti": 659,\n          "cmo": null\n        },\n        {\n          "gid": 1,\n          "nid": 66,\n          "lid": null,\n          "ety": 1,\n          "eti": 514445,\n          "cmo": {\n            "changes": [],\n            "logs": [],\n            "errors": []\n          }\n        },\n        {\n          "gid": -1,\n          "nid": 51,\n          "lid": null,\n          "ety": 1,\n          "eti": 3940,\n          "cmo": {\n            "changes": [],\n            "logs": [\n              {\n                "level": 20,\n                "message": "missing dashbot config",\n                "time": "2020-02-12T19:43:03.703666352Z"\n              }\n            ],\n            "errors": [\n              {\n                "et": "node",\n                "graphId": -1,\n                "nodeId": 51,\n                "linkId": null,\n                "message": "missing dashbot config"\n              }\n            ]\n          }\n        },\n        {\n          "gid": -1,\n          "nid": null,\n          "lid": 38,\n          "ety": 0,\n          "eti": 1766,\n          "cmo": null\n        },\n        {\n          "gid": -1,\n          "nid": 3,\n          "lid": null,\n          "ety": 1,\n          "eti": 17464,\n          "cmo": {\n            "changes": [],\n            "logs": [],\n            "errors": []\n          }\n        }\n      ],\n      "executionDuration": 833,\n      "startTime": "2020-02-12T19:43:02Z"\n    }\n  ],\n  "total": 2\n}\n')))),Object(o.b)("h3",{id:"reference"},"Reference"),Object(o.b)("h4",{id:"queryexecutionsquery-executionmatcher-promiseexecutionqueryresult"},Object(o.b)("inlineCode",{parentName:"h4"},"queryExecutions(query: ExecutionMatcher): Promise<ExecutionQueryResult>")),Object(o.b)("br",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attribute"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"query"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"../classes/execution-matcher"}),"ExecutionMatcher")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Query to filter executions")))))}x.isMDXComponent=!0},201:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var d=r.a.createContext({}),s=function(n){var e=r.a.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):o({},e,{},n)),t},u=function(n){var e=s(n.components);return r.a.createElement(d.Provider,{value:e},n.children)},b={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},f=Object(a.forwardRef)((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,d=c(n,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(l,".").concat(f)]||u[f]||b[f]||i;return t?r.a.createElement(m,o({ref:e},d,{components:t})):r.a.createElement(m,o({ref:e},d))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o.mdxType="string"==typeof n?n:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},207:function(n,e,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var n=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)n.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&n.push(l)}else if("object"===i)for(var o in a)t.call(a,o)&&a[o]&&n.push(o)}}return n.join(" ")}n.exports?(r.default=r,n.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(n.exports=a)}()}}]);