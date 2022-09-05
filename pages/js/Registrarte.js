var boton = document.querySelector("button")

function registrate (){

    var usuario, contraseña, gmail;

    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    gmail= document.getElementById("gmail").value;
    alert ("tu nombre de usuario es :" + usuario +" y tu contraseña es: " +contraseña +"y tu gamil es:"+ gmail);
    location.assign("./Producto.html")
}
boton.addEventListener("click", (e) =>{
    e.preventDefault();
    registrate();
})