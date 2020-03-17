/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  someSidebar: {
    Nodes: [
      "nodes/introduction",
      {
        type: "category",
        label: "Stock",
        items: [
          "nodes/stock/add-channel-user",
          "nodes/stock/basic",
          "nodes/stock/delete-data",
          "nodes/stock/input",
          "nodes/stock/merge-users",
          "nodes/stock/one-time-broadcast",
          "nodes/stock/response",
          "nodes/stock/script",
          "nodes/stock/set-data",
          "nodes/stock/webhook"
        ]
      },
      {
        type: "category",
        label: "Knowledge Ai",
        items: [
          "nodes/knowledge-ai/knowledge",
          "nodes/knowledge-ai/knowledge-feedback"
        ]
      },
      {
        type: "category",
        label: "NLP",
        items: ["nodes/nlp/nlp"]
      },
      {
        type: "category",
        label: "Facebook",
        items: [
          "nodes/facebook/facebook-mark-seen",
          "nodes/facebook/facebook-profile-info"
        ]
      },
      {
        type: "category",
        label: "Twilio",
        items: [
          "nodes/twilio/twilio-hang-up",
          "nodes/twilio/twilio-dial",
          "nodes/twilio/twilio-twiml"
        ]
      },
      {
        type: "category",
        label: "Analytics",
        items: ["nodes/analytics/dashbot"]
      }
    ],
    "NodeJs SDK": [
      "node-sdk/introduction",
      "node-sdk/installation",
      "node-sdk/setup",
      {
        type: "category",
        label: "Methods",
        items: [
          "node-sdk/methods/broadcast",
          "node-sdk/methods/delete-channel-user",
          "node-sdk/methods/delete-session",
          "node-sdk/methods/delete-super-user",
          "node-sdk/methods/merge-users",
          "node-sdk/methods/query-executions",
          "node-sdk/methods/query-users",
          "node-sdk/methods/query-users-reachable",
          "node-sdk/methods/update-session",
          "node-sdk/methods/update-user-data"
        ]
      },
      {
        type: "category",
        label: "Classes",
        items: [
          "node-sdk/classes/context-modifier",
          "node-sdk/classes/execution-matcher",
          "node-sdk/classes/flaggable",
          "node-sdk/classes/session",
          "node-sdk/classes/user-query-builder"
        ]
      },
      {
        type: "category",
        label: "Models",
        items: [
          "node-sdk/models/broadcast-input",
          "node-sdk/models/broadcast-result",
          "node-sdk/models/channel-user",
          "node-sdk/models/context-change",
          "node-sdk/models/error",
          "node-sdk/models/execution",
          "node-sdk/models/execution-log",
          "node-sdk/models/execution-query-result",
          "node-sdk/models/frame",
          "node-sdk/models/log-entry",
          "node-sdk/models/merge-users-request",
          "node-sdk/models/message",
          "node-sdk/models/query-check",
          "node-sdk/models/response",
          "node-sdk/models/response-block",
          "node-sdk/models/stack",
          "node-sdk/models/super-user",
          "node-sdk/models/update-user-input-data",
          "node-sdk/models/user-query",
          "node-sdk/models/user-query-reachable-result",
          "node-sdk/models/user-query-result"
        ]
      },
      {
        type: "category",
        label: "Enums",
        items: [
          "node-sdk/enums/context-modifier-type",
          "node-sdk/enums/context-modifier-operation",
          "node-sdk/enums/execution-operation",
          "node-sdk/enums/log-level",
          "node-sdk/enums/user-query-mode",
          "node-sdk/enums/user-query-operation"
        ]
      }
    ]
  }
};
