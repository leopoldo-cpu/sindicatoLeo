import express from "express";
import cors from "cors";
import handlebars from "express-handlebars";
const app = express()
import mongoose from "mongoose"
import {__dirname} from "./utils.js";
import { MongoClient } from 'mongodb';

// import {loginRouter} from "./router/login.router.js";
// import {viewsRouter} from "./router/views.router.js";
import session from "express-session";
import MongoStore from "connect-mongo";
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

app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb://root:example@192.168.44.122:27017/registro?authSource=admin', ttl: 60 }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))



app.use(cors())
const client = new MongoClient(MONGO_URI) //me conecto con URI

mongoose.connect(MONGO_URI)//me conecto con URI
const dbname = "registro"   
const coll = "usuarios"
let coleccion = client.db(dbname).collection(coll) //creo el db.coll

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// app.use("/api/session", loginRouter);
// app.use("/", viewsRouter);

const esquemaUsuarios = new mongoose.Schema({
    Usuario: String,
    Gmail: String,
    Password: String,
})

export const modeloUsuario = mongoose.model(coll, esquemaUsuarios)

app.post("/inicioSesion",async(req,res)=>{
    console.log("Se conecto");
    console.log(req.body);
    let FindUser = await coleccion.findOne(req.body);
    if (FindUser == null) {
        res.send({
            msg:"Credenciales incorrectas",
            login:false,
        });
    }else{
        console.log(FindUser);
        res.send({
            msg:"Inicio de sesion exitoso",
            data:FindUser,
            login:true
        })
    }
    console.log(FindUser)
})
app.post("/registrarUsuario",async (req,res)=>{
    console.log(req.body);
    let insertar_usuario = await coleccion.insertOne(req.body);
    console.log(insertar_usuario)
    res.send({"msg":"funcionooooooooo"})
})

app.listen(3120,(port = 3120)=>{
    console.log("Hola mundo")
    console.log("Servidor corriendo en 127.0.0.1:"+port);
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                          