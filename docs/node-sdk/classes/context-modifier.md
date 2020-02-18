---
id: context-modifier
title: Context Modifier
sidebar_label: Context Modifier
---

Context Modifier class is used to change the context of the conversation. We can use the class to set or delete variables in different scope of the conversation. For example, you can set variables that will be used in the current execution only like a message or if you want to save some data for the session, like liveChatStartedAt, you can save that in the session variable.

Refer to [Context Modifier Types](../enums/context-modifier-type.md) for more information on different variable scopes.

## Example

```js
let cm = new ContextModifier();

cm.set('message', 'Hi. Thanks for contacting us. An agent will be with you shortly');
cm.setSession('liveChatStartedAt', new Date());
```

## Public Methods Summary

| Public | Method |
| ------ | --- |
| public | [set]()(key: string, data: any): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Set the an execution scope variable |
| public | [setSession]()(key: string, data: any): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Set a session scope variable |
| public | [setUser]()(key: string, data: any): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Set a user scope variable |
| public | [setEnvironment]()(key: string, data: any): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Set an environment variable |
| public | [delete]()(key: string): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Delete an execution scoped variable |
| public | [deleteSession]()(key: string): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Delete a session scope variable |
| public | [deleteUser]()(key: string): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Delete a user scope variable |
| public | [deleteEnvironment]()(key: string): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Delete an environment variable |
| public | [clear]()(): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Clear all execution scoped variables |
| public | [clearSession]()(): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Clear all session scope variables |
| public | [clearUser]()(): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Clear all user scope variables |
| public | [clearEnvironment]()(): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Clear all environment variables |
| public | [logTrace]()(message: string): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Log a trace message |
| public | [logDebug]()(message: string): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Log a debug message |
| public | [logInfo]()(message: string): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Log an info message |
| public | [logWarning]()(message: string): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Log a warning message |
| public | [logError]()(message: string): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Log an error message |
| public | [error]()(err: [Error](../models/error)): ContextModifier<br></br>&nbsp;&nbsp;&nbsp;Send/throw an error |

## Public Methods

_**NOTE: All the methods defined below return the latest instance of Context Modifier.**_

#### ```public set(key: string, data: any): ContextModifier```

set() method is used to setup a variable that will only be used in the current execution of the bot. This variable can then be accessed using ```{{ d 'key-name-here' }}``` or ```d.key-name-here``` depending on the node you are using.

| Name | Type   | Attribute | Description       |
| ---- | ------ | --------- | ----------------- |
| key  | string |           | Name of the key   |
| data | any    |           | Value for the key |

#### ```public sortAsc(field: string): ExecutionMatcher```

sortAsc() method is used to sort the executions by the field in ascending order

| Name | Type   | Attribute | Description       |
| ---- | ------ | --------- | ----------------- |
| key  | string |           | Name of the key   |
| data | any    |           | Value for the key |

#### ```public sortDesc(field: string): ExecutionMatcher```

sortDesc() method is used to sort the executions by the field in descending order

| Name | Type   | Attribute | Description       |
| ---- | ------ | --------- | ----------------- |
| key  | string |           | Name of the key   |
| data | any    |           | Value for the key |

#### ```public where(field : string): ExecutionMatcher```

where() method is used to filter records. It is used to extract only those records that fulfill a specified condition. This method handles the 'key' part of the query.

| Name | Type   | Attribute | Description       |
| ---- | ------ | --------- | ----------------- |
| key  | string |           | Name of the key   |
| data | any    |           | Value for the key |

#### ```public not(): ExecutionMatcher```

not() method is used to negate a condition. For example, if we want all the executions for a user except for the facebook channel

```js
new ExecutionMatcher()
    .where('userId')
    .equals('ef44ad85-b97a-477b-b314-abcdefghijkl')
    .where('channel')
    .equals('facebook')
    .not()
```

#### ```public equals(value : string[]): ExecutionMatcher```

equals() method is used to compare the key and value. A ```where('userId').equals('ef44ad85-b97a-477b-b314-abcdefghijkl')``` would mean return the data set of all the executions with ```userId``` as ```ef44ad85-b97a-477b-b314-abcdefghijkl```.

This method will return an error if a where method is not present.

| Name  | Type   | Attribute | Description |
| ----- | ------ | --------- | ----------- |
| value | string |           | Value       |

#### ```public hasPrefix(prefix: string): ExecutionMatcher```

hasPrefix() method is used to compare the key and value. A ```where('channel').hasPrefix('mes')``` would mean return the data set of all the executions with ```channel``` that starts with ```mes```.

This method will return an error if a where method is not present.

| Name   | Type   | Attribute | Description |
| ------ | ------ | --------- | ----------- |
| prefix | string |           | Value       |

#### ```public exists(): ExecutionMatcher```

exists() method is used to compare the key and value. A ```where('userId').exists()``` would mean return the data set of all the executions that has ```userId'``` as a key in their data.

This method will return an error if a where method is not present.

#### ```public between(low: string, high: string, inclusive: boolean): ExecutionMatcher```

between() method is used to compare the key and value. Denotes that the return set from the where 'key' should be between (low, high) for inclusive = false or [low, high] for inclusive = true

This method will return an error if a where method is not present.

| Name   | Type   | Attribute | Description |
| ------ | ------ | --------- | ----------- |
| low | string | | The lower number |
| high | string | | The higher number |
| inclusive | boolean | | Specify if the lower and higher numbers should be inclusive or exclusive |