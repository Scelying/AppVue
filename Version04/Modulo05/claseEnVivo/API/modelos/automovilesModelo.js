//importar y usamos mongoose
const mongoose = require("mongoose");

//Importamos el equema
const { automovilSchema } = require("../esquemas/automovilesEsquema");

//Creamos una instancia a la exportacion
const automovilEsquema = automovilSchema;

//Crear el modelo en mongoose
const automovilModel = mongoose.model("automoviles", automovilEsquema);

//Importar en un objeto
module.exports = {
  automovilModel
};
