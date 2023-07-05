import express from 'express';
import { modeloUsuario } from '../app.js';

export const loginRouter = express.Router();

loginRouter.post("/register", async (req, res) => {
  const { Usuario, Gmail, Password} = req.body;
  
  if (!Usuario || !Gmail || !Password) {
    return res.status(400).render('error', { msg: 'faltan datos' });
  }
  try{
    await modeloUsuario.create({ Usuario, Gmail, Password})
    req.session.Usuario = Usuario
    req.session.Gmail = Gmail
    req.session.Password = Password
    return res.redirect("/login");
  }
  catch (e){
    console.log(e);
    return res.status(400).render("error", {msg: "controla tu mail y intenta mas tarde"})
  }
})

loginRouter.post("/login", async(req,res) => {
  const { Gmail, Password} = req.body
  if(!Gmail || !Password) {
    return res.status(400).render("error", {msg: "faltan datos"})
  }
  try{
    const userFinded = await modeloUsuario.find({Gmail: Gmail, Password: Password})
    if(userFinded && userFinded[0].Password === Password){
      req.session.Usuario = userFinded[0].Usuario
      req.session.Gmail = userFinded[0].Gmail
      req.session.Password = userFinded[0].Password
      return res.redirect("/profile")
    }else {
      return res.status(400).render("error", {msg: "El email o la contraseña estan incorrectas"})
    }
  }
  catch (e){
    console.log(e);
    return res.status(400).render("error", {msg: "Hubo un error inesperado"})
  }
})