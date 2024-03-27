/*
@author 杨森喜
@学号：0411200429
@班级：软件A2004班
@js 文件属性 ：
1.实现点击 登录/注册 a 标签之后，在当前页面出现一个注册/登录窗口
2.登录窗口/注册窗口显示在首页上方，且背景呈现透明遮罩
3。没有关闭登录/注册窗口，是无法操作首页的其他功能
4.实现点击 "叉叉" 按钮关闭登录/注册窗口

*/

/* 实现注册页面的弹出和显示遮罩背景 */
var login = document.getElementById('login');//获取注册页面 div
var bg = document.getElementById('bg');//获取背景遮罩
var reg_js = document.getElementById('reg_js');
reg_js.onclick = function () {
    login.style.display = 'block';
    bg.style.display = 'block';
    return false;
}

/* 点击关闭按钮可以实现关闭注册页面和显示遮罩背景 */
var closeBtn = document.getElementById('closeBtn');
closeBtn.onclick = function () {
    login.style.display = "none";
    bg.style.display = "none";
    return false;

}

var sign = document.getElementById("sign");//获取登录页面 div
var sign_in_js = document.getElementById("sign_in_js");//获取点击登录 a 标签
sign_in_js.onclick = function () {
    sign.style.display = 'block';
    bg.style.display = 'block';
    return false;
}

var closeBtn1 = document.getElementById('closeBtn1');//获取登录页面的关闭按钮
closeBtn1.onclick = function () {
    sign.style.display = 'none';
    bg.style.display = 'none';
    return false;
}