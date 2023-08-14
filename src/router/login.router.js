import express from 'express';
import passport from "passport";

export const loginRouter = express.Router();

loginRouter.post("/register", passport.authenticate("register"), async (req, res) => {
    return res.redirect("/login");
})

loginRouter.post("/login", passport.authenticate("login") ,async(req,res) => {
    req.session.user = {
      _id: req.user._id.toString(),
      Usuario: req.user.Usuario,
      Gmail: req.user.Gmail,
    };
      return res.redirect("/profile")
})