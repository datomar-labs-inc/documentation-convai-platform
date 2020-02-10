/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    someSidebar: {
        Nodes: [
            'nodes/introduction',
            {
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
        ]
    }
};
