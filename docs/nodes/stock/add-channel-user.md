---
id: add-channel-user
title: Add Channel User Node
sidebar_label: Add Channel User Node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## TODO
Add images for the steps

## Usage

The Add Channel User node is used to add another channel for an existing user. For example, let's assume a user is talking to the bot on messenger and they provide their phone number. Now in order to reach them via sms in future, you can add a channel for them and save it.

_**It is important to note that Add Channel User automatically adds the new channel in the same Super User so we don't need to use the Merge Users node.**_

Steps:

1. Add a response node to ask for user phone number

2. Add an input node to gather the user response (assuming we are using dialogflow to capture the phone number)

3. Select Twilio SMS and add the script to extract the phone number.

<img alt="One Time Broadcast Node explained" src={useBaseUrl('img/nodes/stock/one-time-broadcast/1.png')} />

## Configuration

The configuration of the node is as defined below:

| Name          | Required |                      Description                                     |
| ------------- | -------- | -------------------------------------------------------------------- |
| Title         | Required | The title of the node                                                |
| Channel       | Required | The channel to be added                                              |
| Script Editor | Required | Script to extract the data for the specific channel (Ex. Phone number for Twilio SMS) |
