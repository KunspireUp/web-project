/*
@author 杨森喜
@学号：0411200429
@班级：软件A2004班
@js 文件属性 ：
1.实现登录界面点击 "快速注册" 跳转至 注册界面
2.实现注册界面点击 "登录" 跳转至登录界面
*/

/* 注册界面跳转登录界面 */
var turn_sign = document.getElementById("turn_sign");
turn_sign.onclick = function(){
    login.style.display = 'none';
    sign.style.display = 'block';
    return false;
}

/* 登录界面跳转注册界面 */
var turn_login = document.getElementById("turn_login");
turn_login.onclick = function(){
    login.style.display = 'block';
    sign.style.display = 'none';
    return false;
}