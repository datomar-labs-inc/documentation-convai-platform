---
id: add-channel-user
title: Add Channel User Node
sidebar_label: Add Channel User Node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Usage

The Add Channel User node is used to add another channel for an existing user. For example, let's assume a user is talking to the bot on messenger and they provide their phone number. Now in order to reach them via sms in future, you can add a channel for them and save it.

_**It is important to note that Add Channel User automatically adds the new channel in the same Super User so we don't need to use the Merge Users node.**_

## Steps:

In order to understand the full flow, we currently have the following setup.
<img alt="One Time Broadcast Node explained" src={useBaseUrl('img/nodes/stock/add-channel-user/1.png')} />

1. Add a response node to ask for user phone number
<img alt="Response to ask phone number" src={useBaseUrl('img/nodes/stock/add-channel-user/2.png')} />

2. Add an input node to gather the user response.

3. Assuming that we are using NLP to capture and define the phone number, if the user response doesn't have a proper phone number, we fallback it to get the phone number again.

4. If a phone number is provided, we attempt to add the Twilio SMS user.
<img alt="Response to ask phone number" src={useBaseUrl('img/nodes/stock/add-channel-user/3.png')} />

5. _Bonus_ - Twilio SMS will return an error which we can capture and fallback to a user response. This can be in cases where user mentions an arbitrary phone number like 1234567890.

## Configuration

The configuration of the node is as defined below:

| Name          | Required |                      Description                                     |
| ------------- | -------- | -------------------------------------------------------------------- |
| Title         | Required | The title of the node                                                |
| Channel       | Required | The channel to be added                                              |
| Script Editor | Required | Script to extract the data for the specific channel (Ex. Phone number for Twilio SMS) |
