---
id: query-executions
title: Query Executions
sidebar_label: Query Executions
---

Use the queryExecutions() method to query executions from the Convai bot. The queryExecutions() method returns a promise with an array of executions.

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

### Reference

#### Execution Matcher Reference

| Name | Parameters | Function |
| --- | :---: | --- |
| where() | key | Intialize a query to be performed. This method handles the 'key' part of the query |
| not() | | Negate a condition |
| equals() | value | Denotes that the return set from where 'key' is equal to 'value' |
| exists() | | Denotes that the execution data should have the where 'key' |
| hasPrefix() | value | Denotes that the return set from the where 'key' starts with 'value' |
| between() | low, high, inclusive | Denotes that the return set from the where 'key' should be between (low, high) for inclusive = false or [low, high] for inclusive = true |
| setLimit() | limit | Set the limit on results |
| setOffset() | offset | Set the offset on results |
| sortAsc() | field | Sort the executions by the field in ascending order |
| sortDesc() | field | Sort the executions by the field in descending order |