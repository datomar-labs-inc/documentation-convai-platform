---
id: setup
title: Setup
sidebar_label: Setup
---

Before using any methods for Convai, you would need to config the Convai Client.

You can create an API key from ```Bot > Development > API Keys > Create Key```

```js
const {ConvaiAPIClient} = require('convai-sdk');

const convai = new ConvaiAPIClient(API_KEY);
```