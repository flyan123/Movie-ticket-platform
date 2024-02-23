const express = require("express");
// npm i --save express 
const app =express();
const router = require("./router");
const bodyparser = require("body-parser")
const cors = require("cors");

// 跨域配置
app.use(cors());
app.use(bodyparser.urlencoded({
    extended:true
}))


app.use("/api",router)



app.listen(3300,()=>{
    console.log("服务器运行在3300端口")
})