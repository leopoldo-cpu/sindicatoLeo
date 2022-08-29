var boton = document.querySelector("button")

function registrate (){
    var usuario, contraseña;

    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    if (usuario == "Leopoldo" && contraseña == "1234" ){
        location.assign("./Producto.html")
    }
    else if (usuario == "Luca" && contraseña == "1234" ){
        location.assign("./Producto.html")
    }
    else if (usuario == "Gordo" && contraseña == "1234" ){
        location.assign("./Producto.html")
    }
    else if (usuario == "Pechu" && contraseña == "1234" ){
        location.assign("./Producto.html")
    }
    else if (usuario == "Chino" && contraseña == "1234" ){
        location.assign("./Producto.html")
    }

}
boton.addEventListener("click", (e) =>{
    e.preventDefault();
    registrate();
})