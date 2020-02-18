---
id: context-modifier-type
title: Context Modifier Type
sidebar_label: Context Modifier Type
---

## Reference

Different scoped variable types

| Name        | Value | Description                                                           |
| ----------- | ----- | --------------------------------------------------------------------- |
| CONTEXT     | 0     | Variable scope in the current execution only. For example, a message  |
| SESSION     | 1     | Variable scope in the current session. For example, liveChatStartedAt |
| USER        | 2     | Variable scope in the user data. For example, firstName               |
| ENVIRONMENT | 3     | Variable scope in the bot environment. For example, GOOGLE_SHEET_KEY  |