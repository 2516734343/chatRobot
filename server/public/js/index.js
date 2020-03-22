
var divContent = document.querySelector(".content");
var input = document.querySelector(".input input");
var btn = document.querySelector(".input button");

/**
 * 将文本框的消息发送给服务器
 */
function sendMsg() {
  if (!input.value) {
    return; //文本框没内容
  }
  appendContent("我", input.value);
  ajax("/chat?text=" + input.value, function(text) {
    // console.log(text)
    appendContent("小白", text);
  });
  input.value = "";
}

/**
 * 往div中添加p元素
 * @param {*} name 说话的人
 * @param {*} text 说话的内容
 */
function appendContent(name, text) {
  var p = document.createElement("p");
  p.innerHTML = name + ":" + text;
  divContent.appendChild(p);
}

btn.onclick = sendMsg;
input.onkeydown = function(e) {
  if (e.key === "Enter") {
    sendMsg();
  }
};
