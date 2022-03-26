//Importamos el modelo
const automovilServicios = require('../servicios');

const listarTodos = (req, response) =>  {
  automovilServicios.listarTodos(req, response);
};

const listarPorModelo = (req, response) => {
  automovilServicios.listarPorModelo(req, response);
};

const listarPorColor = (req, response) => {
  automovilServicios.listarPorColor(req, response);
};

const listarPorColorYModelo = (req, response) => {
  automovilServicios.listarPorColorYModelo(req, response);
};

const actualizarDatos = (req, response) => {
  automovilServicios.actualizarDatos(req, response);
};

const eliminarDatos = (req, response) => {
  automovilServicios.eliminarDatos(req, response);
};

const paginaNoEncontrada = (req, response) => {
  automovilServicios.paginaNoEncontrada(req, response);
};

module.exports = {
  listarTodos,
  listarPorModelo,
  listarPorColor,
  listarPorColorYModelo,
  actualizarDatos,
  eliminarDatos,
  paginaNoEncontrada
}