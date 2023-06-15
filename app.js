const express = require('express')
const cors = require('cors')
const app = express()
const { MongoClient } = require('mongodb');
const {ObjectId} = require('mongodb')
const mongoose = require('mongoose')
const MONGO_HOST="localhost"
const MONGO_PUERTO="27017"
const MONGO_URI="mongodb://root:example@192.168.44.122:27017/registro?authSource=admin"


app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(
    express.json({
        type:"*/*"
    })
)





app.use(cors())
let vari = {
    "Nombre":"funcional",
    "Gmal":"funcional",
    "Contraseña":"funcional"
}
mongoose.connect(MONGO_URI)//me conecto con URI
const dbname = "registro"
const coll = "usuarios"

const esquemaUsuarios = new mongoose.Schema({
    Nombre: String,
    Gmal: String,
    Contraseña: String,
    prueba: String
})

const modeloUsuario = mongoose.model(coll, esquemaUsuarios)


app.get(("/"), async(rec,res)=>{
    let usuarios = await modeloUsuario.find()
    res.send({usuarios})
})



async function main(){
    let insertar = await  coleccion.insertOne(vari) //inserto un documento
    console.log(insertar);
}
//main()
app.listen(3120,(port = 3120)=>{
    console.log("Hola mundo")
    console.log("Servidor corriendo en 127.0.0.1:"+port);
})