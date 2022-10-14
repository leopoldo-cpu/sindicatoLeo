const arrayDona = JSON.parse(localStorage.getItem("DonacionArra"))
console.log(arrayDona)

let consultaDona = document.querySelector(".donacion")
let contenedorDona = document.createElement("div")
contenedorDona.innerHTML = `Donador: ${arrayDona[4].usuario} - donado: ${arrayDona[length].donacion} `
consultaDona.appendChild(contenedorDona);
