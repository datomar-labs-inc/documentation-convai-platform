---
id: query-users
title: Query Users
sidebar_label: Query Users
---

Use the queryUsers() method to query users from the Convai bot. The queryUsers() method returns a promise with an array of users.

The queryUsers() expects an object of type [UserQuery](./../models/user-query). You can use the [build()](../classes/user-query-builder#public-build-userquery) method of [UserQueryBuilder](../classes/user-query-builder) to return a UserQuery.

*Note - All the queries use the data from the user scope for returning results.*

```js
const {ConvaiAPIClient, UserQueryBuilder, UserQueryMode} = require('convai-sdk');

const convai = new ConvaiAPIClient(API_KEY);

convai
    .queryUsers(new UserQueryBuilder(UserQueryMode.ALL).where('first-name').equals('John').build())
    .then(users => console.log(users))
    .catch(error => console.log(error));
```

To add multiple conditions, you can stack them on the [UserQueryBuilder](../classes/user-query-builder). For example,

```js
convai
    .queryUsers(new UserQueryBuilder(UserQueryMode.ALL).where('first-name').equals('John').where('last-name').equals('Snow').build())
    .then(users => console.log(users))
    .catch(error => console.log(error));
```

## Reference

#### ```queryUsers(query: UserQuery): Promise<UserQueryResult>```
<br></br>

| Name  | Type                              | Attribute | Description                  |
| ----- | --------------------------------- | --------- | ---------------------------- |
| query | [UserQuery](../models/user-query) | required  | Query to filter user records |
