import express from "express";
import { checkUser } from "../middlewares/auth.js";

const app = express()
export const viewsRouter = express.Router();


viewsRouter.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if(err){
            return res.render("error", {msg: "no se pudo cerrar la session"});
        }
        return res.redirect("/login");
    })
})

viewsRouter.get("", (req, res) => {
    return res.redirect("/login")
})

viewsRouter.get("/login", (req, res) => {
    res.render("login");
})

viewsRouter.get("/register", (req, res) => {
    res.render("register");
})

viewsRouter.get("/profile", checkUser ,(req, res) => {
    res.render("profile", {user: req.session.Usuario});
})
