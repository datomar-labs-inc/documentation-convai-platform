---
id: broadcast
title: Broadcast
sidebar_label: Broadcast
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Use the broadcast() method to send an outgoing message to a set of users. The broadcast method returns a promise. The promise has a [BroadcastResult](../models/broadcast-result) object with the status of the broadcast and the number of users who were delivered the broadcast.

The broadcast() method expects an object of type [BroadcastInput](../models/broadcast-input).

## Example

1. We have the following setup in Convai. Our link is of broadcast type with the Broadcast Type as 'broadcast-type-set-in-convai'
<img alt="Broadcast Type Setup" src={useBaseUrl('img/node-sdk/methods/broadcast/1.png')} />

2. Then add the following code. Here we want to send a message on Facebook for all the users who have the firstName as John

```js
const {ConvaiAPIClient, UserQueryBuilder, UserQueryMode} = require('convai-sdk');

const convai = new ConvaiAPIClient(API_KEY);

// The build() method from UserQueryBuilder helps in building a UserQuery object
let userQuery = new UserQueryBuilder(UserQueryMode.ALL)
    .where('firstName')
    .equals('John')
    .build();

// Here we are changing the context of the conversation which will then be used
// in the broadcast response
let cm = new ContextModifier();

cm.set('comment', 'Convai is <3');
cm.setUser('saleBroadcastSentAt', new Date());

convai
    .broadcast({broadcastType: 'broadcast-type-set-in-convai', channel: 'facebook', userQuery: userQuery, contextModifier: cm})
    .then(response => console.log(response))
    .catch(error => console.log(error));
```

3. You can then extract the variable in Convai using ```{{ d "comment" }}```

#### Example Response

```js
{ status: 'ok', users: 5 }
```

## Reference

#### ```broadcast(input: BroadcastInput): Promise<BroadcastResult>```
<br></br>

| Name  | Type                                        | Attribute | Description                       |
| ----- | ------------------------------------------- | --------- | --------------------------------- |
| input | [BroadcastInput](../models/broadcast-input) | required  | Object to send broadcast to users |