import express from 'express';
import passport from "passport";

export const loginRouter = express.Router();

loginRouter.post("/register", passport.authenticate("register", {failureRedirect: "/failRegister"}), async (req, res) => {
  req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    return res.redirect("/login");
})

loginRouter.post("/login", passport.authenticate("login", {failureRedirect: "/failLogin"}), async(req,res) => {
  req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
    req.session.user = {
      _id: req.user._id.toString(),
      Usuario: req.user.Usuario,
      Gmail: req.user.Gmail,
    };
      return res.redirect("/profile")
})