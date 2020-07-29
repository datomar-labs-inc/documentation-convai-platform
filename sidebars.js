/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const goSdk =[
    "go-sdk/introduction",
    "go-sdk/installation",
    "go-sdk/setup",
    {
        type: "category",
        label: "APIs",
        items:[
            "go-sdk/apis/query-users",
            "go-sdk/apis/query-users-reachable",
            "go-sdk/apis/merge-users",
            "go-sdk/apis/delete-channel-user",
            "go-sdk/apis/delete-super-user",
            "go-sdk/apis/update-user-data",
            "go-sdk/apis/query-executions",
            "go-sdk/apis/update-session",
            "go-sdk/apis/delete-session",
            "go-sdk/apis/broadcast",
            "go-sdk/apis/create-channel-user",
            "go-sdk/apis/create-super-user",
            "go-sdk/apis/trigger"
        ]
    },
    {
        type: "category",
        label: "Methods",
        items:[
            "go-sdk/methods/user-query-builder",
            "go-sdk/methods/execution-matcher",
            "go-sdk/methods/context-modifier",
            "go-sdk/methods/flaggable",
            "go-sdk/methods/request-context",
            "go-sdk/methods/webhook"
        ]        
    },
    "go-sdk/types"
];

const links = [
    "convai-studio/links/introduction",
    "convai-studio/links/basic-link",
    "convai-studio/links/intent-link",
    "convai-studio/links/data-equals-link",
    "convai-studio/links/text-link",
    "convai-studio/links/error-link",
    "convai-studio/links/channel-link",
    "convai-studio/links/broadcast-type-link",
    "convai-studio/links/priority-link"
]

const nodes = [
	"convai-studio/nodes/introduction",
	{
		type: "category",
		label: "Stock",
		items: [
			"convai-studio/nodes/stock/add-channel-user",
			"convai-studio/nodes/stock/basic",
			"convai-studio/nodes/stock/delete-data",
			"convai-studio/nodes/stock/input",
			"convai-studio/nodes/stock/merge-users",
			"convai-studio/nodes/stock/one-time-broadcast",
			"convai-studio/nodes/stock/response",
			"convai-studio/nodes/stock/script",
			"convai-studio/nodes/stock/set-data",
			"convai-studio/nodes/stock/webhook",
		],
	},
	{
		type: "category",
		label: "Knowledge AI",
		items: [
			"convai-studio/nodes/knowledge-ai/knowledge",
			"convai-studio/nodes/knowledge-ai/knowledge-feedback",
		],
	},
	{
		type: "category",
		label: "NLP",
		items: ["convai-studio/nodes/nlp/nlp"],
	},
	{
		type: "category",
		label: "Facebook",
		items: [
			"convai-studio/nodes/facebook/facebook-mark-seen",
			"convai-studio/nodes/facebook/facebook-profile-info",
		],
	},
	{
		type: "category",
		label: "Twilio",
		items: [
			"convai-studio/nodes/twilio/twilio-hang-up",
			"convai-studio/nodes/twilio/twilio-dial",
			"convai-studio/nodes/twilio/twilio-twiml",
		],
	},
	{
		type: "category",
		label: "Analytics",
		items: ["convai-studio/nodes/analytics/dashbot"],
	},
];

const nodeSdk = [
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
			"node-sdk/methods/update-user-data",
		],
	},
	{
		type: "category",
		label: "Classes",
		items: [
			"node-sdk/classes/context-modifier",
			"node-sdk/classes/execution-matcher",
			"node-sdk/classes/flaggable",
			"node-sdk/classes/session",
			"node-sdk/classes/user-query-builder",
		],
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
			"node-sdk/models/user-query-result",
		],
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
			"node-sdk/enums/user-query-operation",
		],
	},
];

const analyticsIntegrations = [
	"convai-studio/integrations/analytics/chatbase",
	"convai-studio/integrations/analytics/dashbot",
];

const channelIntegrations = [
	"convai-studio/integrations/channels/facebook",
	"convai-studio/integrations/channels/slack",
	"convai-studio/integrations/channels/twilio",
];

const nlpIntegrations = ["convai-studio/integrations/nlp/dialogflow"];

const integrations = [
	{
		type: "category",
		label: "Analytics",
		items: analyticsIntegrations,
	},
	{
		type: "category",
		label: "Channels",
		items: channelIntegrations,
	},
	{
		type: "category",
		label: "NLP",
		items: nlpIntegrations,
	},
];

const simpleBot = [
	"convai-studio/simple-bot/understanding-convai",
	"convai-studio/simple-bot/building-a-bot",
	"convai-studio/simple-bot/adding-fallback",
	"convai-studio/simple-bot/adding-channels",
	"convai-studio/simple-bot/deployment",
];

const convaiStudio = [
	"convai-studio/introduction",
	{
		type: "category",
		label: "Create a Simple Bot",
		items: simpleBot,
	},
	{
		type: "category",
		label: "Nodes",
		items: nodes,
    },
    {
        type: "category",
        label: "Links",
        items: links,
    },
	{
		type: "category",
		label: "Integrations",
		items: integrations,
	},
];

module.exports = {
	someSidebar: {
		"Convai Studio": convaiStudio,
        "NodeJs SDK": nodeSdk,
        "GO SDK": goSdk,
	},
};
