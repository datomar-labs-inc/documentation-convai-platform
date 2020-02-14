---
id: execution-matcher
title: Execution Matcher
sidebar_label: Execution Matcher
---

Execution Matcher class is used to stack conditions and build a single query to filter execution results from the API.

## Example

```js
new ExecutionMatcher(250)
    .where('userId')
    .equals('ef44ad85-b97a-477b-b314-abcdefghijkl')
    .where('channel')
    .equals('facebook')
    .not()
```

## Constructor

| Key   | Attribute                                      | Type   |
| ----- | ---------------------------------------------- | ------ |
| limit | <ul><li>optional</li><li>default: 10</li></ul> | number |

## Public Methods Summary

| Public | Method |
| ------ | --- |
| public | [setOffset](#public-setoffsetoffset--number-executionmatcher)(offset : number) : ExecutionMatcher<br></br>&nbsp;&nbsp;&nbsp;Set the offset of the query |
| public | [sortAsc](#public-sortascfield-string-executionmatcher)(field : string) : ExecutionMatcher<br></br>&nbsp;&nbsp;&nbsp;Sort the executions by the field in ascending order |
| public | [sortDesc](#public-sortdescfield-string-executionmatcher)(field : string) : ExecutionMatcher<br></br>&nbsp;&nbsp;&nbsp;Sort the executions by the field in descending order |
| public | [where](#public-wherefield--string-executionmatcher)(field: string) : ExecutionMatcher<br></br>&nbsp;&nbsp;&nbsp;Intialize the query to be performed. This method handles the 'key' part of the query |
| public | [not](#public-not-executionmatcher)() : ExecutionMatcher<br></br>&nbsp;&nbsp;&nbsp;Negate a condition |
| public | [equals](#public-equalsvalue--string-executionmatcher)(value: string[]) : ExecutionMatcher<br></br>&nbsp;&nbsp;&nbsp;Denotes that the return set from where 'key' is equal to 'value' |
| public | [hasPrefix](#public-hasprefixprefix-string-executionmatcher)(prefix: string) : ExecutionMatcher<br></br>&nbsp;&nbsp;&nbsp;Denotes that the return set from the where 'key' starts with 'prefix' |
| public | [exists](#public-exists-executionmatcher)() : ExecutionMatcher<br></br>&nbsp;&nbsp;&nbsp;Intialize the query to be performed. This method handles the 'key' part of the query |
| public | [between](#public-betweenlow-string-high-string-inclusive-boolean-executionmatcher)(low: string, high: string, inclusive: boolean)) : ExecutionMatcher<br></br>&nbsp;&nbsp;&nbsp;Intialize the query to be performed. This method handles the 'key' part of the query |

## Public Methods

_**NOTE: All the methods defined below return the latest instance of ExecutionMatcher. This allows to stack different conditions as defined above**_

#### ```public setOffset(offset : number): ExecutionMatcher```

setOffset() method is used to set the offset for the user query

| Name   | Type   | Attribute | Description               |
| ------ | ------ | --------- | ------------------------- |
| offset | number |           | Offset for the user query |

#### ```public sortAsc(field: string): ExecutionMatcher```

sortAsc() method is used to sort the executions by the field in ascending order

| Name  | Type   | Attribute | Description                     |
| ----- | ------ | --------- | ------------------------------- |
| field | string |           | field to sort the executions by |

#### ```public sortDesc(field: string): ExecutionMatcher```

sortDesc() method is used to sort the executions by the field in descending order

| Name  | Type   | Attribute | Description                     |
| ----- | ------ | --------- | ------------------------------- |
| field | string |           | field to sort the executions by |

#### ```public where(field : string): ExecutionMatcher```

where() method is used to filter records. It is used to extract only those records that fulfill a specified condition. This method handles the 'key' part of the query.

| Name  | Type   | Attribute | Description     |
| ----- | ------ | --------- | --------------- |
| field | string |           | Name of the key |

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