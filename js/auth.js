
function login(){
if(user.value=="admin" && pass.value=="admin123"){
localStorage.setItem("admin","true");
location="admin.html";
}else{
msg.innerText="Invalid login";
}
}

function logout(){
localStorage.removeItem("admin");
location="admin-login.html";
}
