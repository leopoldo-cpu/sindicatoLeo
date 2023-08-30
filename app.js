import express from "express";
import cors from "cors";
import handlebars from "express-handlebars";
const app = express()
import mongoose from "mongoose"
import {__dirname} from "./utils.js";
import {loginRouter} from "./src/router/login.router.js";
import {viewsRouter} from "./src/router/views.router.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import initializatePassport from "./src/config/passport.js";
import { addLogger } from "./utils/logger.js";
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
app.use(addLogger)
app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb://root:example@192.168.44.122:27017/registro?authSource=admin', ttl: 60 }),
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
initializatePassport()
app.use(passport.initialize())
app.use(passport.session())


app.use(cors())
mongoose.connect(MONGO_URI)//me conecto con URI
const dbname = "registro"
const coll = "usuarios"

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/api/session", loginRouter);
app.use("/", viewsRouter);

const esquemaUsuarios = new mongoose.Schema({
    Usuario: String,
    Gmail: String,
    Password: String,
})

export const modeloUsuario = mongoose.model(coll, esquemaUsuarios)

app.post("/inicioSesion",(req,res)=>{
    req.logger.info("Se conectó a la base de datos")
    req.logger.debug(req.body)
    res.send("funciona")
})


//main()
app.listen(3120,(port = 3120)=>{
    console.log("Hola mundo")
    console.log("Servidor corriendo en localhost:"+port)
})