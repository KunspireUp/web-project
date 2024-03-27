/*
@author 杨森喜
@学号：0411200429
@班级：软件A2004班
@js 文件属性 ：
1.用于登录界面/注册界面
2.验证输入的手机号码是否是11位数
3.验证输入的验证码是否是6位数
4.验证输入的邮箱是否符合邮箱的格式
5。验证输入的密码是否包含大小写字母、数字，且不超过20位数字,并且不低于8位数

*/


/* 1.JS 实现 input 表单控件显示警告信息和验证是否符合要求*/
    /* 2.JS 实现选项框选中之后提示消息自动隐藏 */
    window.onload = function () {


        /* 注册界面动态验证 JS */
        var userphone = document.getElementById("userphone");//获取输入的手机号码
        var phone_1 = document.getElementById("phone_1");//或许显示信息

        var userorc = document.getElementById("userorc");//获取输入的验证码
        var orc_1 = document.getElementById("orc_1");//获取显示信息

        var checkbox = document.getElementById("checkbox");//获取选项框
        var box_time = document.getElementById("box_time");//获取显示信息

        //给文本绑定激活事件
        userphone.onfocus = function () {
            //让 span 显示
            phone_1.style.visibility = 'visible';//设置为显示
            
        }

        userorc.onfocus = function(){
            orc_1.style.visibility = 'visible';
        }

        checkbox.onfocus = function(){
            box_time.style.visibility = 'visible';
        }

        /* 1.电话号码，给文本绑定失去焦点 */
        userphone.onblur = function () {
            var userphoneNumber = this.value;//获取当前值
            if (userphoneNumber.length == 11 && isNaN(userphoneNumber) == false) {//判断输入的字符长度是否等于11
                phone_1.style.visibility = 'hidden';//设置为隐藏，但是空间依然占据
            } else {
                phone_1.style.visibility = 'visible';
            }
        }

        /*2.验证码 给文本绑定失去焦点 */
        userorc.onblur = function () {
            var userorcNumber = this.value;//获取当前值
            if (userorcNumber.length == 6 && isNaN(userorcNumber) == false) {//判断输入的字符长度是否等于6
                orc_1.style.visibility = 'hidden';
            } else {
                orc_1.style.visibility = 'visible';
            }
        }
        /* 3.选项框 给选项框失去焦点 */
        checkbox.onblur = function(){
            check1 = document.getElementById("checkbox").checked;
            console.log(check1);
            if(check1 == true){
                box_time.style.visibility = 'hidden';
            }else{
                box_time.style.visibility = 'visible';
            }
        }



        /* 注册界面动态验证 JS */
    var userphone_2 = document.getElementById("userphone_2");//获取输入的手机号码
    var phone_2 = document.getElementById("phone_2");//或许显示信息

    var userorc_2 = document.getElementById("userorc_2");//获取输入的验证码
    var orc_2 = document.getElementById("orc_2");//获取显示信息

    //给文本绑定激活事件
    userphone_2.onfocus = function () {
        //让 span 显示
        phone_2.style.visibility = 'visible';//设置为显示

    }

    userorc_2.onfocus = function () {
        orc_2.style.visibility = 'visible';
    }

    /* 1.电话号码，给文本绑定失去焦点 */
    userphone_2.onblur = function () {
        var userphoneNumber2 = this.value;//获取当前值
        if (userphoneNumber2.length == 11 && isNaN(userphoneNumber2) == false) {//判断输入的字符长度是否等于11
            phone_2.style.visibility = 'hidden';//设置为隐藏，但是空间依然占据
        } else {
            phone_2.style.visibility = 'visible';
        }
    }

    /*2.验证码 给文本绑定失去焦点 */
    userorc_2.onblur = function () {
        var userorcNumber2 = this.value;//获取当前值
        if (userorcNumber2.length == 6 && isNaN(userorcNumber2) == false) {//判断输入的字符长度是否等于6
            orc_2.style.visibility = 'hidden';
        } else {
            orc_2.style.visibility = 'visible';
        }
    }


        /* 实现登录界面 JS 动态验证 */
        var message_2 = document.getElementById("message_2");//获取输入的信息
        var message = document.getElementById("message");//或许显示信息

        var userpassword = document.getElementById("userpassword");//获取输入密码
        var pwd_1 = document.getElementById("pwd_1");//获取显示信息

        /* 输入账号文本激活事件 */
        message_2.onfocus = function () {
            //让 span 显示
            message.style.visibility = 'visible';//设置为显示
        }
        /* 输入账号文本激活事件 */
        userpassword.onfocus = function() {
            pwd_1.style.visibility = 'visible';
        }

        /* 1.电话号码，给文本绑定失去焦点 */
        message_2.onblur = function () {
            var message_2Number = this.value;//获取当前值
            if (message_2Number.length == 11 && isNaN(message_2Number) == false || message_2Number.match(/^\w+@\w+\.\w+$/i)) {//判断输入的字符长度是否等于11
                message.style.visibility = 'hidden';//设置为隐藏，但是空间依然占据
            } else {
                message.style.visibility = 'visible';
            }
        }

        /*2.验证码 给文本绑定失去焦点 */
        userpassword.onblur = function () {
            var userpasswordNumber = this.value;//获取当前值
            if (userpasswordNumber.length == 20 && isNaN(userpasswordNumber) == false || userpasswordNumber.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/)) {//判断输入的字符长度是否等于6
                pwd_1.style.visibility = 'hidden';
            } else {
                pwd_1.style.visibility = 'visible';
            }
        }
    }