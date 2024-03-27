function login_s() {
    var username = document.getElementById("message_2").value;
    var password = document.getElementById("userpassword").value;
    if( username == null || password == null || username == "" || password == ""){
        alert("用户名或者密码不能为空")
        return false;
    }
    if((username != "18587157927" || username != "18687899347@163.com") && password != "2020Yangsenxi"){
        alert("用户名或密码不正确");
        return false;
    }
    if((username == "18587157927" || username == "18687899347@163.com") && password == "2020Yangsenxi"){
        window.location.href="../page/login_turm.html"; 
        return true;
    }
    alert("用户名或密码不正确");
    return false;
}