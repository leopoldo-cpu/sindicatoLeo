var boton = document.querySelector(".button")
let API= 'http://localhost:3120';
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
    alert ("tu nombre de usuario es :" + usuario +" y tu contraseña es: " + contraseña +" y tu gmail es:"+ gmail);   
    let registrarUsuario = await fetch(`${API}/registrarUsuario`,{
        method:"POST",
        headers:{"Content-Type":"application/json"
      },
      body: JSON.stringify(
        {
          Usuario:usuario,
          Gmail:gmail,
          Password:contraseña

            
        })
      })
    let res = await registrarUsuario.json()
    console.log(res)
    // location.assign("./Producto.html");
})