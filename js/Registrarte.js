var boton = document.querySelector(".button")
const API= 'localhost';
function registrate (){

    var usuario, contraseña, gmail;

    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    gmail= document.getElementById("gmail").value;
    alert ("tu nombre de usuario es :" + usuario +" y tu contraseña es: " + contraseña +" y tu gmail es:"+ gmail);
   
}
boton.addEventListener("click", async (e) =>{
    e.preventDefault();
    var usuario, contraseña, gmail;

    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    gmail= document.getElementById("gmail").value;
    alert ("tu nombre de usuario es :" + usuario +" y tu contraseña es: " + contraseña +" y tu gmail es:"+ gmail);    const registrarUsuario = await fetch(`${API}/registrarUsuario`,{
        method:"POST",
        headers:{"Content-Type":"application/json"
      },
      body: JSON.stringify(
        {
          nombre:usuario,
          mail:gmail,
          contraseña:contraseña

            
        })
      })
    let res = await registrarUsuario.json()
    console.log(res)
    // location.assign("./Producto.html");
})