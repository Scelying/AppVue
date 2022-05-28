//Importamos el modelo
const usuarioServicios = require('../servicios');

const generarToken = (req, response) =>  {
  usuarioServicios.generarToken(req, response);
};

module.exports = {
  generarToken
}