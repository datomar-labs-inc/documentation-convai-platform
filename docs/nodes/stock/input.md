---
id: input
title: Input Node
sidebar_label: Input Node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Usage

The input node is used to gather data from the user. It is usually used after a response (Question) node. The input node pauses further interaction with the chatbot.

In order to continue the conversation from the same place, add higher priority to the connecting link between the input and the next node. For example, in the picture below, the link between the “User Feedback” has been given higher priority than the Normal Response.

Also note, “No Feedback Response” has been given the highest priority to factor for cases where the user doesn’t want to provide feedback.

<img alt="Input Node explained" src={useBaseUrl('img/nodes/stock/input/1.png')} />

## Configuration

The configuration of the node is as defined below:

| Name          | Required |                      Description                                     |
| ------------- | -------- | -------------------------------------------------------------------- |
| Title         | Required | The title of the node                                                |