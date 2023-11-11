//引入express模块
const express = require("express")
//创建express实例
const app = express()
const env = require("./config/env")

const indexRouter = require("./routes/index.js")

app.use(express.json())

app.use("/",indexRouter)


module.exports = app