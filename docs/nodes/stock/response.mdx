---
id: response
title: Response Node
sidebar_label: Response Node
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Usage

Response node is used to send a response to the user. We can send 2 types of responses:

1. Text Response

    * To send a text response, you can simply write it in text form
    <br></br>
    <br></br>
    
    ```go
    This is a response
    ```
    <img alt="Input Node explained" src={useBaseUrl('img/nodes/stock/response/1.png')} />
    <br></br>
    <br></br>

    * You can also extract variable data in the message script as well. You can use d, s or u depending on if the variable is saved in the execution, session or saved user data respectively. For example,
    <br></br>
    <br></br>

    ```go
    This is a {{ d "firstName" }}
    This is a {{ u "firstName" }}
    This is a {{ s "firstName" }}
    ```
    <img alt="Input Node explained" src={useBaseUrl('img/nodes/stock/response/2.png')} />
    <br></br>
    <br></br>

    * You can also add conditions based responses to the chatbot more. Refer to the [Go template documentation](https://golang.org/pkg/text/template/) for further tips and tricks
    <br></br>
    <br></br>

    ```go
    {{ if u "firstName" }}
    Hi {{ u "firstName" }}. How are you doing?
    {{ else }}
    Hi. How are you doing?
    {{ end }}
    ```
    <img alt="Input Node explained" src={useBaseUrl('img/nodes/stock/response/3.png')} />
    <br></br>
    <br></br>
    
    * To customize the response for a different channel, switch to the channel and add the response. If the channel response is not provided, the basic response will be sent on all the channels.
    <br></br>
    <br></br>
    <img alt="Input Node explained" src={useBaseUrl('img/nodes/stock/response/4.png')} />
    <br></br>
    <br></br>

2. Text Message with Quick Replies (QR)

    * To send a message with quick replies, just add `{{ qr “qr name” “qr value” }}`. Each QR has a name and value. Name is the text shown to the user but value is the text received back by the bot. If the value is not mentioned, the QR name is considered as the value by default. Examples, `{{ qr “One” }}` or `{{ qr “One” “1” }}`. Choose the format that works best for your case.
    <br></br>
    <br></br>

    ```go
    Hi. How are you doing today?
    {{ qr "Doing Great!!" "WELCOME_GOOD"}} {{ qr "Not a great start :(" "WELCOME_BAD"}}
    ```
    <img alt="Input Node explained" src={useBaseUrl('img/nodes/stock/response/5.png')} />
    <br></br>
    <br></br>

## Configuration

The configuration of the node is as defined below:

| Name                    | Required |                      Description                                     |
| ----------------------- | -------- | -------------------------------------------------------------------- |
| Title | Required | The title of the node |
| Send Now (Do not batch) | | Normally when a Convai request happens, all responses are collected and sent out at the end. When Send Now is enabled, the response will not wait until the request is finished. It will be sent immediately. Responses marked with Send Now will not be included when other batched messages are sent out at the end of a request. |
| Channel | Required | Responses can be configured differently for different channels |
| Message | Required | Message is a collection of messages. A single response can have more than 1 message. Click on <img alt="Input Node explained" src={useBaseUrl('img/nodes/stock/response/6.png')} /> to add more messages |
| Message Editor | Required | The message editor is a [templating](https://golang.org/pkg/text/template/) enabled field where you can compose your response |
| Typing Time | Required | Typing time defines the time to wait before sending the message to the user. During this time, the bot will show the typing indicator. |
