/*
@author 杨森喜
@学号：0411200429
@班级：软件A2004班
@js 文件属性 ：
1.登录界面密码显示的小眼睛，实现点击小眼睛显示密码，再次点击不显示密码
2.登录界面可以选择账号登录/验证码登录，两种选择，js 通过空着 div 的 display 的 none 和 block 属性来实现页面切换

*/


/* 账号登录小眼睛事件 */

    /* img 绑定事件 */
    var y_show = document.getElementById("y_show");//点击a标签
    var y_close = document.getElementById("y_close");//点击a标签

    //获取 div 的值
    var show_2 = document.getElementById("show_2");//不显示
    var show_1 = document.getElementById("show_1")//显示

    //获取密码
    var userpassword = document.getElementById("userpassword");
    y_close.onclick = function () {
        show_1.style.display = 'block';
        show_2.style.display = 'none';
        userpassword.type = 'text';
        return false;
    }

    y_show.onclick = function () {
        show_1.style.display = 'none';
        show_2.style.display = 'block';
        userpassword.type = 'password';
        return false;

    }


    /* 验证码登录显示---账号登录隐藏 */
    var sign_js = document.getElementById("sign_js");//账号登录点击值
    var sign_orc_js = document.getElementById("sign_orc_js");//获取验证码登录值

    //获取小眼睛密码
    var show_pwd = document.getElementById("show_pwd");//获取显示眼睛图标
    
    //获取账号登录
    var type_1 = document.getElementById("type_1");//账号登录
    //获取验证码登录
    var type_2 = document.getElementById("type_2");//验证码登录

    var h2_js = document.getElementById("h2_js");//账号登录四个字
    var h2_orc_js = document.getElementById("h2_orc_js");//验证码登录四个字

    sign_orc_js.onclick = function(){
        h2_js.style = 'border-bottom: 0px solid red';//隐藏账号登录下边框
        h2_orc_js.style = 'border-bottom: 3px solid red';//显示账号登录下边框
        show_pwd.style.display = 'block';//显示获取验证码
        type_1.style.display = 'none';//隐藏账号登录界面
        type_2.style.display = 'block';//显示验证码登录
        show_pwd.style.display = 'none';//隐藏小眼睛界面
        return false;

    }
    sign_js.onclick = function(){
        h2_js.style = 'border-bottom: 3px solid red';//显示账号登录下边框
        h2_orc_js.style = 'border-bottom: 0px solid red';//隐藏验证码登录下边框
        show_pwd.style.display = 'none';//隐藏获取验证码
        type_1.style.display = 'block';//显示登录账号界面
        type_2.style.display = 'none';//隐藏验证码登录界面
        show_pwd.style.display = 'block';//显示小眼睛界面
        return false;
    }