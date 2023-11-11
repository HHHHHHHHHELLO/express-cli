const app = require("../app")
// const process = require("process");
const PORT =  process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`服务器端口 ${PORT} 启动`)
})