---
id: query-executions
title: Query Executions
sidebar_label: Query Executions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Use the queryExecutions() method to query executions from the Convai bot. The queryExecutions() method returns a promise with an array of executions. To be more precise, it returns a promise with a [ExecutionQueryResult](../models/execution-query-result) object.

```js
const {ConvaiAPIClient, ExecutionMatcher} = require('convai-sdk');

const convai = new ConvaiAPIClient(API_KEY);

convai
    .queryExecutions(new ExecutionMatcher().where('userId').equals('ef44ad85-b97a-477b-b314-abcdefghijkl'))
    .then(executions => console.log(executions));
```

To add multiple conditions you can stack them on the execution matcher. For example, if we want executions for a user from just the facebook channel

```js
convai
    .queryExecutions(new ExecutionMatcher().where('userId').equals('ef44ad85-b97a-477b-b314-abcdefghijkl').where('channel').equals('facebook'))
    .then(executions => console.log(executions));
```

You can also negate a condition. For example, if we want all the executions for a user except for the facebook channel

```js
convai
    .queryExecutions(new ExecutionMatcher().where('userId').equals('ef44ad85-b97a-477b-b314-abcdefghijkl').where('channel').equals('facebook').not())
    .then(executions => console.log(executions));
```

#### Example Response

<Tabs
  defaultValue="condensed"
  values={[
    { label: 'Condensed View', value: 'condensed', },
    { label: 'Detailed View', value: 'detailed', },
  ]
}>
<TabItem value="condensed">

```js
{ executions:
   [ { id: '02b65ad6-0b98-45a3-97a5-bcd1493530ab',
       userId: 'ef44ad85-b97a-477b-b314-abcdefghijkl',
       channelUserId: 'dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a',
       sessionId: '2a8ccc7f-ccc1-42bc-a8d5-100c767f4e7b',
       environmentId: 'a3c36585-6a7d-4369-85b3-25b6cab01504',
       blueprintId: 'acf748b1-3804-48ac-84e7-dee7ad32cc7c',
       data: [Object],
       userData: [Object],
       sessionData: {},
       text: 'hi',
       channel: 'channel_dev',
       source: null,
       isStart: false,
       isTrigger: false,
       errors: [Array],
       response: [Object],
       logs: [Array],
       executionDuration: 938,
       startTime: '2020-02-11T20:50:10Z' },
     { id: 'f18d4677-51e0-4f03-b994-275720b4a192',
       userId: 'ef44ad85-b97a-477b-b314-abcdefghijkl',
       channelUserId: 'dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a',
       sessionId: '1ceacc04-c258-433d-aae8-32eb09ae6692',
       environmentId: 'a3c36585-6a7d-4369-85b3-25b6cab01504',
       blueprintId: 'acf748b1-3804-48ac-84e7-dee7ad32cc7c',
       data: [Object],
       userData: [Object],
       sessionData: {},
       text: 'hi',
       channel: 'channel_dev',
       source: null,
       isStart: false,
       isTrigger: false,
       errors: [Array],
       response: [Object],
       logs: [Array],
       executionDuration: 833,
       startTime: '2020-02-12T19:43:02Z' } ],
  total: 2 }
```

</TabItem>
<TabItem value="detailed">

```js
{
  "executions": [
    {
      "id": "02b65ad6-0b98-45a3-97a5-bcd1493530ab",
      "userId": "ef44ad85-b97a-477b-b314-abcdefghijkl",
      "channelUserId": "dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a",
      "sessionId": "2a8ccc7f-ccc1-42bc-a8d5-100c767f4e7b",
      "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",
      "blueprintId": "acf748b1-3804-48ac-84e7-dee7ad32cc7c",
      "data": {
        "_dialogflowRawResponse": {
          "query_result": {
            "action": "input.welcome",
            "all_required_params_present": true,
            "fulfillment_messages": [
              {
                "Message": {
                  "Text": {
                    "text": [
                      "Good day! What can I do for you today?"
                    ]
                  }
                }
              }
            ],
            "fulfillment_text": "Good day! What can I do for you today?",
            "intent": {
              "display_name": "Default Welcome Intent",
              "name": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"
            },
            "intent_detection_confidence": 1,
            "language_code": "en",
            "parameters": {},
            "query_text": "hi"
          },
          "response_id": "dd8c73aa-3b36-4ec5-abfa-a391c3e72f64-2e39b744"
        },
        "intent": "Default Welcome Intent",
        "intentConfidence": 1,
        "intentId": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"
      },
      "userData": {
        "firstName": "Hasanpreet"
      },
      "sessionData": {},
      "text": "hi",
      "channel": "channel_dev",
      "source": null,
      "isStart": false,
      "isTrigger": false,
      "errors": [
        {
          "et": "node",
          "graphId": -1,
          "nodeId": 51,
          "linkId": null,
          "message": "missing dashbot config"
        }
      ],
      "response": {
        "messages": [
          {
            "text": "What is your phone number?",
            "typingTime": 1000,
            "shouldBatch": true,
            "graphId": 1,
            "nodeId": 55,
            "blocks": null,
            "seq": 7
          }
        ]
      },
      "logs": [
        {
          "gid": 0,
          "nid": null,
          "lid": null,
          "ety": 2,
          "eti": 0,
          "cmo": {
            "changes": [],
            "logs": [],
            "errors": []
          }
        },
        {
          "gid": -1,
          "nid": 0,
          "lid": null,
          "ety": 1,
          "eti": 5540,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 0,
          "ety": 0,
          "eti": 4097,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 40,
          "ety": 0,
          "eti": 1498,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": 4,
          "lid": null,
          "ety": 1,
          "eti": 938200514,
          "cmo": {
            "changes": [
              {
                "type": 0,
                "op": 0,
                "key": "_dialogflowRawResponse",
                "data": {
                  "query_result": {
                    "action": "input.welcome",
                    "all_required_params_present": true,
                    "fulfillment_messages": [
                      {
                        "Message": {
                          "Text": {
                            "text": [
                              "Good day! What can I do for you today?"
                            ]
                          }
                        }
                      }
                    ],
                    "fulfillment_text": "Good day! What can I do for you today?",
                    "intent": {
                      "display_name": "Default Welcome Intent",
                      "name": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"
                    },
                    "intent_detection_confidence": 1,
                    "language_code": "en",
                    "parameters": {},
                    "query_text": "hi"
                  },
                  "response_id": "dd8c73aa-3b36-4ec5-abfa-a391c3e72f64-2e39b744"
                }
              },
              {
                "type": 0,
                "op": 0,
                "key": "intent",
                "data": "Default Welcome Intent"
              },
              {
                "type": 0,
                "op": 0,
                "key": "intentId",
                "data": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"
              },
              {
                "type": 0,
                "op": 0,
                "key": "intentConfidence",
                "data": 1
              }
            ],
            "logs": [],
            "errors": []
          }
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 7,
          "ety": 0,
          "eti": 3188,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 2,
          "ety": 0,
          "eti": 348,
          "cmo": null
        },
        {
          "gid": 0,
          "nid": 0,
          "lid": null,
          "ety": 1,
          "eti": 2131,
          "cmo": null
        },
        {
          "gid": 0,
          "nid": null,
          "lid": 5,
          "ety": 0,
          "eti": 2110,
          "cmo": null
        },
        {
          "gid": 1,
          "nid": 0,
          "lid": null,
          "ety": 1,
          "eti": 699,
          "cmo": null
        },
        {
          "gid": 1,
          "nid": null,
          "lid": 42,
          "ety": 0,
          "eti": 473,
          "cmo": null
        },
        {
          "gid": 1,
          "nid": 55,
          "lid": null,
          "ety": 1,
          "eti": 200378,
          "cmo": {
            "changes": [],
            "logs": [],
            "errors": []
          }
        },
        {
          "gid": 1,
          "nid": null,
          "lid": 45,
          "ety": 0,
          "eti": 989,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": 51,
          "lid": null,
          "ety": 1,
          "eti": 23991,
          "cmo": {
            "changes": [],
            "logs": [
              {
                "level": 20,
                "message": "missing dashbot config",
                "time": "2020-02-11T20:50:11.872416889Z"
              }
            ],
            "errors": [
              {
                "et": "node",
                "graphId": -1,
                "nodeId": 51,
                "linkId": null,
                "message": "missing dashbot config"
              }
            ]
          }
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 38,
          "ety": 0,
          "eti": 452,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": 3,
          "lid": null,
          "ety": 1,
          "eti": 2240,
          "cmo": {
            "changes": [],
            "logs": [],
            "errors": []
          }
        }
      ],
      "executionDuration": 938,
      "startTime": "2020-02-11T20:50:10Z"
    },
    {
      "id": "f18d4677-51e0-4f03-b994-275720b4a192",
      "userId": "ef44ad85-b97a-477b-b314-abcdefghijkl",
      "channelUserId": "dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a",
      "sessionId": "1ceacc04-c258-433d-aae8-32eb09ae6692",
      "environmentId": "a3c36585-6a7d-4369-85b3-25b6cab01504",
      "blueprintId": "acf748b1-3804-48ac-84e7-dee7ad32cc7c",
      "data": {
        "_dialogflowRawResponse": {
          "query_result": {
            "action": "input.welcome",
            "all_required_params_present": true,
            "fulfillment_messages": [
              {
                "Message": {
                  "Text": {
                    "text": [
                      "Hello! How can I help you?"
                    ]
                  }
                }
              }
            ],
            "fulfillment_text": "Hello! How can I help you?",
            "intent": {
              "display_name": "Default Welcome Intent",
              "name": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"
            },
            "intent_detection_confidence": 1,
            "language_code": "en",
            "parameters": {},
            "query_text": "hi"
          },
          "response_id": "54f9e5d5-bd5d-4b20-8848-8805c3af1bdd-2e39b744"
        },
        "intent": "Default Welcome Intent",
        "intentConfidence": 1,
        "intentId": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"
      },
      "userData": {
        "firstName": "Hasanpreet"
      },
      "sessionData": {},
      "text": "hi",
      "channel": "channel_dev",
      "source": null,
      "isStart": false,
      "isTrigger": false,
      "errors": [
        {
          "et": "node",
          "graphId": -1,
          "nodeId": 51,
          "linkId": null,
          "message": "missing dashbot config"
        }
      ],
      "response": {
        "messages": [
          {
            "text": "Hi Hasanpreet. How are you doing?",
            "typingTime": 1000,
            "shouldBatch": true,
            "graphId": 1,
            "nodeId": 66,
            "blocks": null,
            "seq": 7
          }
        ]
      },
      "logs": [
        {
          "gid": 0,
          "nid": null,
          "lid": null,
          "ety": 2,
          "eti": 0,
          "cmo": {
            "changes": [],
            "logs": [],
            "errors": []
          }
        },
        {
          "gid": -1,
          "nid": 0,
          "lid": null,
          "ety": 1,
          "eti": 4565,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 0,
          "ety": 0,
          "eti": 3316,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 40,
          "ety": 0,
          "eti": 1610,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": 4,
          "lid": null,
          "ety": 1,
          "eti": 832518483,
          "cmo": {
            "changes": [
              {
                "type": 0,
                "op": 0,
                "key": "_dialogflowRawResponse",
                "data": {
                  "query_result": {
                    "action": "input.welcome",
                    "all_required_params_present": true,
                    "fulfillment_messages": [
                      {
                        "Message": {
                          "Text": {
                            "text": [
                              "Hello! How can I help you?"
                            ]
                          }
                        }
                      }
                    ],
                    "fulfillment_text": "Hello! How can I help you?",
                    "intent": {
                      "display_name": "Default Welcome Intent",
                      "name": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"
                    },
                    "intent_detection_confidence": 1,
                    "language_code": "en",
                    "parameters": {},
                    "query_text": "hi"
                  },
                  "response_id": "54f9e5d5-bd5d-4b20-8848-8805c3af1bdd-2e39b744"
                }
              },
              {
                "type": 0,
                "op": 0,
                "key": "intent",
                "data": "Default Welcome Intent"
              },
              {
                "type": 0,
                "op": 0,
                "key": "intentId",
                "data": "projects/convaitest-ewgkjg/agent/intents/d41b8f20-e4af-49cb-bef3-fb84a89a6bda"
              },
              {
                "type": 0,
                "op": 0,
                "key": "intentConfidence",
                "data": 1
              }
            ],
            "logs": [],
            "errors": []
          }
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 7,
          "ety": 0,
          "eti": 2834,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 2,
          "ety": 0,
          "eti": 579,
          "cmo": null
        },
        {
          "gid": 0,
          "nid": 0,
          "lid": null,
          "ety": 1,
          "eti": 1633,
          "cmo": null
        },
        {
          "gid": 0,
          "nid": null,
          "lid": 5,
          "ety": 0,
          "eti": 1594,
          "cmo": null
        },
        {
          "gid": 1,
          "nid": 0,
          "lid": null,
          "ety": 1,
          "eti": 18085,
          "cmo": null
        },
        {
          "gid": 1,
          "nid": null,
          "lid": 42,
          "ety": 0,
          "eti": 659,
          "cmo": null
        },
        {
          "gid": 1,
          "nid": 66,
          "lid": null,
          "ety": 1,
          "eti": 514445,
          "cmo": {
            "changes": [],
            "logs": [],
            "errors": []
          }
        },
        {
          "gid": -1,
          "nid": 51,
          "lid": null,
          "ety": 1,
          "eti": 3940,
          "cmo": {
            "changes": [],
            "logs": [
              {
                "level": 20,
                "message": "missing dashbot config",
                "time": "2020-02-12T19:43:03.703666352Z"
              }
            ],
            "errors": [
              {
                "et": "node",
                "graphId": -1,
                "nodeId": 51,
                "linkId": null,
                "message": "missing dashbot config"
              }
            ]
          }
        },
        {
          "gid": -1,
          "nid": null,
          "lid": 38,
          "ety": 0,
          "eti": 1766,
          "cmo": null
        },
        {
          "gid": -1,
          "nid": 3,
          "lid": null,
          "ety": 1,
          "eti": 17464,
          "cmo": {
            "changes": [],
            "logs": [],
            "errors": []
          }
        }
      ],
      "executionDuration": 833,
      "startTime": "2020-02-12T19:43:02Z"
    }
  ],
  "total": 2
}
```

</TabItem>
</Tabs>

### Reference

#### ```queryExecutions(query: ExecutionMatcher): Promise<ExecutionQueryResult>```
<br></br>

| Name  | Type                                             | Attribute | Description                |
| ----- | ------------------------------------------------ | --------- | -------------------------- |
| query | [ExecutionMatcher](../classes/execution-matcher) | required  | Query to filter executions |