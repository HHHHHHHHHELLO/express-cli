const express = require("express")
const router = express()

router.get("/",(req, res)=>{
    res.send("一级路由")
})

module.exports = router

