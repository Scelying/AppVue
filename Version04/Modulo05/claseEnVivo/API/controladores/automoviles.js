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

exports.listarTodos = () => {
  automovilesModel.find((err, resp) => {
    response.json(resp);
  });
};