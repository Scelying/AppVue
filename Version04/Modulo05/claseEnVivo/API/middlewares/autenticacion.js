const jsonwebtoken = require("jsonwebtoken");

//Middleware condigo que se ejecuta antes o despues del
//manejo de una ruta(path)
function authenticationToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return res.sendStatus(401);
  }

  jsonwebtoken.verify(
    token,
    process.env.TOKEN_SECRET.toString(),
    (err, resp) => {
      if (err) {
        return res.sendStatus(403);
      }

      next();
    }
  );
}

module.exports = {
  authenticationToken,
};
