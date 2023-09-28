import passport from "passport";
import local from "passport-local"
import {modeloUsuario} from "../../app.js"
import { createHash, isValidPassword } from "../../utils.js";

const localStrategy = local.Strategy;
const initializatePassport = () => {
  passport.use("register", new localStrategy(
    {passReqToCallback: true, usernameField: "Gmail", passwordField: "Password"}, async (req, username, password, done) => {
      const {Usuario, Gmail} = req.body;
      console.log(req.body);
      try{
        let user = await modeloUsuario.findOne({Gmail: username});
        if(user){
          console.log("User already exist");
          return done(null, false)
        }
        const newUser = {
          Usuario,
          Gmail,          
          Password: createHash(password)
        }
        let result = await modeloUsuario.create(newUser)
        return done(null, result)
      }catch(error){
        return done("Error al obtener el usuario " + error)
      }

      
    }

  ))
  passport.use("login", new localStrategy({usernameField: "Usuario", passwordField: "Password"}, async(username, password, done) => {
    try{
      const user = await modeloUsuario.findOne({Usuario: username})
      if(!user){
        console.log("User dont exist");
        return done(null, false)
      }
      console.log(user);
      if(!isValidPassword(user, password)) return done(null, false);
      return done(null, user)
    } catch(error) {
      return done(error)
    }
  }))
  passport.serializeUser((user, done) => {
    done(null, user._id)
    })

  passport.deserializeUser(async (id, done) => {
    let user = await modeloUsuario.findById(id);
    done(null, user)
  })
}
export default initializatePassport;