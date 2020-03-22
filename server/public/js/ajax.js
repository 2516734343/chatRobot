function ajax(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback && callback(xhr.responseText);
        }
    }
    xhr.send();
}