let boton = document.querySelector(".button")

async function registrate (){
    let usuario, contraseña;

    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    const respuesta = fetch("127.0.0.1:3120/inicioSesion",{
        method:["POST"],
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify ({
            p})})
      
    let data = await (await respuesta).json();
    console.log(data);
    data.nombre.reverse();
    data.puntos.reverse();
}
boton.addEventListener("click", (e) =>{
    e.preventDefault();
    registrate();
})