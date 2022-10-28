const botonDonar = document.getElementById("botonDonar")

class usuario{
    constructor(id, usuario, donacion){
        this.id = id
        this.usuario = usuario
        this.donacion = donacion
    }
    
}

const guardarDona = (clave, valor) => {
    localStorage.setItem(clave, valor);
};


fetch("../json/DB.json")
    .then(res => res.json())
    .then(data => setTimeout(() => {
        let suma = 0
        function donar () {
            console.log(data.usuarios)
            data.usuarios.push(new usuario (4, "Leopoldo ", 24000))
            console.log(data.usuarios)
            for (u of data.usuarios) {
                suma += u.donacion
                console.log(suma)
            }
            guardarDona("DonacionArra", JSON.stringify(data.usuarios));
            let consultaDona = document.querySelector(".h2DonaP")
            consultaDona.innerHTML = `$${suma}`
        }
        
        botonDonar.addEventListener("click", (e) =>{
            e.preventDefault();
            
            donar();
            
        })
    }, 2000))

