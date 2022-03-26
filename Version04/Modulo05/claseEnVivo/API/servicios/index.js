//Importamos el modelo
const { automovilModel } = require("../modelos/automovilesModelo");

//Creamos una instancia a la importacion
const automovilModelo = automovilModel;

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