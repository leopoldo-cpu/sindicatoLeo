let boton = document.querySelector(".button")

async function registrate (){
    let usuario, contraseña;

    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    const respuesta = fetch("http://127.0.0.1:3120/inicioSesion",{
        method:["POST"],
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify ({
            nombre:usuario,
            contraseña:contraseña
            })})
      
    let data = await (await respuesta).json();
    console.log(data);
    let msg = document.getElementById("msg");
    if(data.login){
        msg.innerHTML = `${data.msg}`
        localStorage.setItem("user",data.data.nombre);
        localStorage.setItem("login",true);
        setTimeout(() => {
            window.location.href = 'producto.html'
        }, 2000);
    }else{
        msg.innerHTML = `${data.msg}`
        
    }
}
boton.addEventListener("click", (e) =>{
    e.preventDefault();
    registrate();
})