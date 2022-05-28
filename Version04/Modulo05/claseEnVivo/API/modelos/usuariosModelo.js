//importar y usamos mongoose
const mongoose = require("mongoose");

//Importamos el equema
const { usuarioSchema } = require("../esquemas/usuariosEsquema");

//Creamos una instancia a la exportacion
const usuarioEsquema = usuarioSchema;

//Crear el modelo en mongoose
const usuarioModel = mongoose.model("usuarios", usuarioEsquema);

//Importar en un objeto
module.exports = {
  usuarioModel
};
