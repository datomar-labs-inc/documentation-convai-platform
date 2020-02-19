---
id: execution-log
title: Execution Log
sidebar_label: Execution Log
---

| Key | Attribute | Type            | Description                                     |
| --- | :-------: | --------------- | ----------------------------------------------- |
| gid |           | number          | Id of the graph                                 |
| nid | optional  | number          | Id of the node                                  |
| lid | optional  | number          | Id of the link                                  |
| ety | <ul><li>Link - 0</li><li>Node - 1</li></ul> | number | Execution Type |
| eti |           | number          | Execution Time in Nanosecond                    |
| cmo | optional  | ContextModifier | [Context Modifier](../classes/context-modifier) |