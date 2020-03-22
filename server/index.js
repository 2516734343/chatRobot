var express = require("express");
var chat = require("./chat.js");
var app = express();//创建一个web服务器对象

//将根路径的请求映射到public目录
app.use(express.static("public"));

//服务器可以处理请求地址为/chat,请求方法为get的请求,具体的处理方式为传递的函数
app.get("/chat",function(req,res){
    // console.log('收到了')
    //req:请求对象：可以获取请求中的信息
    //res:响应对象：可以对客户端进行响应
    //获取消息
    var text = req.query.text || "";
    chat(text,function(resp){
        //将回复的消息resp
        res.send(resp);//将机器人的回复响应给客户端
    })
    

  
})

app.listen(9527);//让服务器监听9527端口