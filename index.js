// hien thi password trong mot tg nhat dinh roi xoa di
function showPassword() {
    var icon = document.getElementById("icon");
    icon.onclick = ()=>{
        document.getElementById("password").setAttribute('type','text');
        setTimeout(() => document.getElementById("password").setAttribute('type','password'),2000);
        console.log("icon duoc click");
    }



showPassword();

