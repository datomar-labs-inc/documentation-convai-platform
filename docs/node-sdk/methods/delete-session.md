---
id: delete-session
title: Delete Session
sidebar_label: Delete Session
---

deleteSession() method is used to delete the current session of a channel. The method returns the deleted session for the channel.

```js
const {ConvaiAPIClient} = require('convai-sdk');

const convai = new ConvaiAPIClient(API_KEY);

convai
    .deleteSession('dev-console-1e6bb9d7-d25d-4dc4-8342-2d69d9a4de3a')
    .then(user => console.log(user))
    .catch(error => console.log(error));
```

#### Example Response

The method returns the deleted channel user

```js
{
   "data":{
      "randomData":"random"
   },
   "stack":{
      "frames":[
         {
            "m":0,
            "n":0
         }
      ]
   },
   "ver":"",
   "id":"a524ce22-b926-490b-a173-c1cacae5c0a3"
}
```

## Reference

#### ```deleteSession(userId: string): Promise<Session>```
<br></br>

| Name   | Type   | Attribute | Description            |
| ------ | ------ | --------- | ---------------------- |
| userId | string | required  | Channel Id of the user |