let isloggedin = localStorage.getItem("login");
let msg = document.getElementById("msg");
if (isloggedin) {
    msg.innerHTML = `¡Hola! ${localStorage.getItem("user")}`
}else{
    msg.innerHTML = `Porfavor inicia sesion`
}