export function checkUser(req, res, next) {
    if(req.session.Gmail){
      return next()
    }
    return res.status(401).render("error-page", {msg: "pls log in"})
  }