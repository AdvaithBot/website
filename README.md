# AdvaithBot
A multipurpose Discord bot, made with [discord.js](https://discord.js.org) and the [Spark framework](https://discordspark.tk).

How to install:
1. Clone this repo
2. Create a file titled `app.js` with the following format:
```js
const Spark = require("sparkbots")

Spark.start({
prefix: "PREFIX_HERE",
token: "TOKEN_HERE"
})

var ClientInjRe = require('./express.js')
```
Put your prefix and token where it says `PREFIX_HERE` and `TOKEN_HERE`.
