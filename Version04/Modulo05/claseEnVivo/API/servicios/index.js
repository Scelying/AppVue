const jsonwebtoken = require("jsonwebtoken");
const dotenv = require("dotenv");
//Importamos el modelo Automviles
const { automovilModel } = require("../modelos/automovilesModelo");
//Importamos el modelo Usuarios
const { usuarioModel } = require("../modelos/usuariosModelo");

//Creamos una instancia a la importacion Automoviles
const automovilModelo = automovilModel;

//Creamos una instancia a la importacion USuarios
const usuarioModelo = usuarioModel;

//En esta linea me esta llamando las variables de entorno
dotenv.config();

exports.generarToken = (request, response) => {
  const palabraClave = process.env.TOKEN_SECRET;
  if (request.body.usuario === undefined) {
    response.status(403).send("Forbidden");
  }
  if (request.body.clave === undefined) {
    response.status(403).send("Forbidden");
  } else {
    const usuario = request.body.usuario;
    const clave = request.body.clave;
    usuarioModelo.find({ usuario: usuario, clave: clave }, (err, resp) => {
      if(resp.length === 0) {
        response.status(401).send("Access Denied");
      } else {
        response.json(jsonwebtoken.sign({ usuario: usuario, clave: clave }, palabraClave, {expiresIn: '1800s'}));
      }
    });
  }
};

exports.listarTodos = (req, response) => {
  automovilModelo.find((err, resp) => {
    console.log(resp);
    response.json(resp);
  });
};

exports.listarPorModelo = (req, response) => {
  const modelo = req.params.modelo;
  automovilModelo.find({ modelo: modelo }, (err, resp) => {
    response.json(resp);
  });
};

exports.listarPorColor = (req, response) => {
  const color = req.params.color;
  automovilModelo.find({ color: color }, (err, resp) => {
    response.json(resp);
  });
};

exports.listarPorColorYModelo = (req, response) => {
  const color = req.params.color;
  const modelo = req.params.modelo;

  automovilModelo.find({ color: color, modelo: modelo }, (err, resp) => {
    response.json(resp);
  });
};

exports.actualizarDatos = (req, response) => {
  //valla a db y traigame info
  response.send("ruta para operacion actualizar verbo PUT");
};

exports.eliminarDatos = (req, response) => {
  //valla a db y traigame info
  response.send("ruta para operacion eliminar verbo DELETE");
};

exports.paginaNoEncontrada = (req, response) => {
  response.send("Pagina no encontrada", 404);
};
