//importar y usamos mongoose
const mongoose = require("mongoose");

//Crear un esquema de Vehiculo
const automovilesSchema = mongoose.Schema(
  {
    modelo: Number,
    color: String,
    marca: String,
    tipo: String,
  },
  {
    versionKey: false,
  }
);

//Crecar el modelo en mongoose
const automovilesModel = mongoose.model("automoviles", automovilesSchema);

exports.listarTodos = (req, response) => {
  automovilesModel.find((err, resp) => {
    response.json(resp);
  });
};

exports.listarPorModelo = (req, response) => {
  const modelo = req.params.modelo;
  automovilesModel.find({ modelo: modelo }, (err, resp) => {
    response.json(resp);
  });
};

exports.listarPorColor = (req, response) => {
  const color = req.params.color;
  automovilesModel.find({ color: color }, (err, resp) => {
    response.json(resp);
  });
};

exports.listarPorColorYModelo = (req, response) => {
  const color = req.params.color;
  const modelo = req.params.modelo;

  automovilesModel.find({ color: color, modelo: modelo }, (err, resp) => {
    response.json(resp);
  });
};

exports.listarPorColorYModelo = (req, response) => {
  const color = req.params.color;
  const modelo = req.params.modelo;

  automovilesModel.find({ color: color, modelo: modelo }, (err, resp) => {
    response.json(resp);
  });
};

exports.actualizarDatos = (req, response) => {
  //valla a db y traigame info
  response.send("ruta para operacion actualizar verbo PUT");
};

exports.eliminarDatos = (req, response) => {
    //valla a db y traigame info
    response.send('ruta para operacion eliminar verbo DELETE');
};

exports.paginaNoEncontrada = (req, response) => {
  response.send('Pagina no encontrada', 404);
};
