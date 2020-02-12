---
id: merge-users
title: Merge Users Node
sidebar_label: Merge Users Node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Usage

The Merge Users node is used to merge 2 users on different channels into single super user.

Let's say a user has in the past interacted with the bot on SMS and on Facebook. Now when they provide their phone number via facebook, we know that it is the same user and we can merge the two user profiles.

## Steps

1. 

## Configuration

The configuration of the node is as defined below:

| Name | Required |                      Description                                     |
| ------------- | -------- | -------------------------------------------------------------------- |
| Title         | Required | The title of the node                                                |
| Asynchronous  |          | Determine if the message should be sent asynchronously or not        |
| Mode          | Required | Any - One of the condition should satisfy<br></br>All - All the conditions should satisy<br></br>None - None of the conditions should satisfy|
| Script Editor | Required | Script to extract the data for the specific channel (Ex. Phone number for Twilio SMS) |