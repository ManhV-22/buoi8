function login(){
    var username = document.getElementById("username").value;
    var pw = document.getElementById("pw").value;
    if(username === "admin" && pw === "admin"){
        alert("Hello");
    }else{
        alert("Tai khoan hoac mat khau sai. Vui long nhap lai!!!");
    }
}