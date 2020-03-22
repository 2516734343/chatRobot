var request = require("request");
var url=  "http://openapi.tuling123.com/openapi/api/v2";
var apiKey = "1bde2dec6b5045abb1af547a75ba7c1a";
var userId = "jmm"
module.exports = function chat(text,callback){
    var data = {//发送的数据
        "perception": {
            "inputText": {
                "text": text
            }
        },
        "userInfo": {
            "apiKey": apiKey,
            "userId": userId
        }
    }
    request(url,{
        method:'POST',
        body:JSON.stringify(data)   //请求体
    },function(err,resp,body){
        //err 错误消息
        // resp 响应对象
        //body 响应的消息体
        var obj = JSON.parse(body);
        var text = obj.results[0].values.text;
        // console.log(text);
        callback(text);
    })
}
