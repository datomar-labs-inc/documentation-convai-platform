/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    someSidebar: {
        Nodes: [
            'nodes/introduction', {
                type: 'category',
                label: 'Stock',
                items: [
                    'nodes/stock/basic',
                    'nodes/stock/input',
                    'nodes/stock/response',
                    'nodes/stock/set-data',
                    'nodes/stock/delete-data',
                    'nodes/stock/one-time-broadcast',
                    'nodes/stock/add-channel-user',
                    'nodes/stock/merge-users',
                    'nodes/stock/script',
                    'nodes/stock/webhook'
                ]
            }, {
                type: 'category',
                label: 'Spout',
                items: ['nodes/spout/spout', 'nodes/spout/spout-feedback']
            }, {
                type: 'category',
                label: 'NLP',
                items: ['nodes/nlp/nlp']
            }, {
                type: 'category',
                label: 'Facebook',
                items: ['nodes/facebook/facebook-mark-seen', 'nodes/facebook/facebook-profile-info']
            }, {
                type: 'category',
                label: 'Twilio',
                items: ['nodes/twilio/twilio-hang-up', 'nodes/twilio/twilio-dial', 'nodes/twilio/twilio-twiml']
            }, {
                type: 'category',
                label: 'Analytics',
                items: ['nodes/analytics/dashbot']
            }
        ],
        'NodeJs SDK': [
            'node-sdk/introduction',
            'node-sdk/installation', 'node-sdk/setup',
             {
                type: 'category',
                label: 'Methods',
                items: [
                    'node-sdk/methods/query-executions',
                    'node-sdk/methods/query-users',
                ]
            }, {
                type: 'category',
                label: 'Classes',
                items: [
                    'node-sdk/classes/context-modifier',
                    'node-sdk/classes/execution-matcher',
                    'node-sdk/classes/flaggable',
                    'node-sdk/classes/session',
                    'node-sdk/classes/user-query-builder',
                ]
            }, 
            {
                type: 'category',
                label: 'Models',
                items: [
                    'node-sdk/models/channel-user',
                    'node-sdk/models/context-change',
                    'node-sdk/models/error',
                    'node-sdk/models/frame',
                    'node-sdk/models/log-entry',
                    'node-sdk/models/query-check',
                    'node-sdk/models/stack',
                    'node-sdk/models/super-user',
                    'node-sdk/models/user-query',
                    'node-sdk/models/user-query-result',
                ]
            }, {
                type: 'category',
                label: 'Enums',
                items: [
                    'node-sdk/enums/context-modifier-type',
                    'node-sdk/enums/context-modifier-operation',
                    'node-sdk/enums/execution-operation',
                    'node-sdk/enums/log-level',
                    'node-sdk/enums/user-query-mode',
                    'node-sdk/enums/user-query-operation',
                ]
            }
        ]
    }
};
