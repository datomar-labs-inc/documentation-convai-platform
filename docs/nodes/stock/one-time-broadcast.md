---
id: one-time-broadcast
title: One Time Broadcast Node
sidebar_label: One Time Broadcast Node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Usage

The one time broadcast is used to send an instant message to a user on any channel irrespective of the channel they are currently working on. It will only work if the channels are connected for the user.

For example, if the user is currently connected on Facebook Messenger and you want to send a verification code via SMS, add a one time broadcast node, select an SMS channel (like Twilio SMS) and then connect it to the flow you want to send.

Typically, a one time broadcast is followed by a response node.

<img alt="One Time Broadcast Node explained" src={useBaseUrl('img/nodes/stock/one-time-broadcast/1.png')} />

## Configuration

The configuration of the node is as defined below:

| Name          | Required |                      Description                                     |
| ------------- | -------- | -------------------------------------------------------------------- |
| Title         | Required | The title of the node                                                |
| Asynchronous  |          | Determine if the message should be sent asynchronously or not        |
| Channel       | Required | The channel on which the message should be sent                      |
| Broadcast Type |         | A custom name you can provide to the broadcast                       |
