---
id: script
title: Script Node
sidebar_label: Script Node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## TODO
Add image

## Usage

A script node is used to add custom functions/scripts in the bot. We use Lua for the scripting language. Refer to the documentation [here](https://devhints.io/lua)

<img alt="One Time Broadcast Node explained" src={useBaseUrl('img/nodes/stock/script/1.png')} />

## Configuration

The configuration of the node is as defined below:

| Name          | Required |                      Description                                     |
| ------------- | -------- | -------------------------------------------------------------------- |
| Title         | Required | The title of the node                                                |
| Asynchronous  |          | Determine if the message should be sent asynchronously or not        |
| Script Editor | Required | Editor for writing the script                                        |
