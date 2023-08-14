export function checkUser(req, res, next) {
  console.log();
    if(req.session.user.Gmail){
      return next()
    }
    return res.status(401).render("error-page", {msg: "pls log in"})
  }