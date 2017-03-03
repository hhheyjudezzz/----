// 设置cookie
// 参数说明：name：cookie的名称，value:cookie的值,day:cookie的过期时间(天)
function setCookieFn(name, value, day) {
    var nowDate = new Date();
    var dayExpires = nowDate.getTime() + day * 24 * 60 * 60 * 1000;

    document.cookie = name + "=" + value + "; expires=" + new Date(dayExpires).toUTCString();
}

// 清除cookie
function removeCookieFn(name) {
    setCookieFn(name, "", -1);
}

// 获取cookie
function getCookieFn(name) {
    var cookieArr = document.cookie.split("; ");
    name += "=";
    // 遍历
    for (var i = 0; i < cookieArr.length; i++) {
        // 判断数组里面是否包含字符串
        if (cookieArr[i].indexOf(name) > -1) {
            return cookieArr[i].substring(name.length);
        }
    }
}
