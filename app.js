const Spark = require("sparkbots")

Spark.start({
prefix: "!!",
token: process.env.TOKEN
})

var ClientInjRe = require('./express.js')