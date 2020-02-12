---
id: query-users
title: Query Users
sidebar_label: Query Users
---

Use the queryUsers() method to query users from the Convai bot. The queryUsers() method returns a promise with an array of users.

*Note - All the queries use the data from the user scope for returning results.*

```js
const {ConvaiAPIClient, UserQueryBuilder, UserQueryMode} = require('convai-sdk');

const convai = new ConvaiAPIClient(API_KEY);

convai
    .queryUsers(new UserQueryBuilder(UserQueryMode.ALL).where('first-name').equals('John').build())
    .then(users => console.log(users));
```

To add multiple conditions, you can stack them on the UserQueryBuilder. For example,

```js
convai
    .queryUsers(new UserQueryBuilder(UserQueryMode.ALL).where('first-name').equals('John').where('last-name').equals('Snow').build())
    .then(users => console.log(users));
```

### Reference

#### User Query Mode Reference

| Name | Function |
| --- | --- |
| UserQueryMode.ALL | Equivalent of Inner Join. All the conditions must be true for the users. |
| UserQueryMode.ANY | Equivalent of Full Join. Atleast one condition should be true for the users. |
| UserQueryMode.NONE | Equivalent of not (!). None of the condition should be true for the users. |

#### User Query Builder Reference

| Name | Parameters | Function |
| --- | :---: | --- |
| where() | key | Intialize a query to be performed. This method handles the 'key' part of the query |
| equals() | value | Denotes that the return set from where 'key' is equal to 'value' |
| notEquals() | value | Denotes that the return set from where 'key' doesn't equal 'value' |
| startsWith() | value | Denotes that the return set from the where 'key' starts with 'value' |
| greaterThan() | value | Denotes that the return set from the where 'key' should be greater than 'value' |
| lessThan() | value | Denotes that the return set from the where 'key' should be less than 'value' |
| exists() |  | Denotes that the user data should have the where 'key' |
| notExists() |  | Denotes that the user data should not have the where 'key' |