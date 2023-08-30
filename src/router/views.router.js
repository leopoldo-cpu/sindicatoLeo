import express from "express";
import { checkUser } from "../../middlewares/auth.js";

const app = express()
export const viewsRouter = express.Router();


viewsRouter.get("/logout", (req, res) => {
    req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    req.session.destroy((err) => {
        if(err){
            return res.render("error", {msg: "no se pudo cerrar la session"});
        }
        return res.redirect("/login");
    })
})

viewsRouter.get("", (req, res) => {
    req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    return res.redirect("/login")
})

viewsRouter.get("/login", (req, res) => {
    req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    res.render("login");
})

viewsRouter.get("/register", (req, res) => {
    req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    res.render("register");
})

viewsRouter.get("/profile", checkUser ,(req, res) => {
    req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    res.render("profile", {user: req.session.user.Usuario});
})

viewsRouter.get("/failRegister", (req, res) => {
    req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    req.logger.error("ERROR A LA HORA DE REGISTRARSE, PORFAVOR INGRESE LOS DATOS BIEN")
    res.send("ERROR REGISTER")
})

viewsRouter.get("/failLogin", (req, res) => {
    req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    req.logger.error("ERROR A LA HORA DE LOGUEARSE, PORFAVOR INGRESE LOS DATOS BIEN")
    res.send("ERROR LOGIN")
})
