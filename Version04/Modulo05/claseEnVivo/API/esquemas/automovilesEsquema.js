//importar y usamos mongoose
const mongoose = require("mongoose");

//Crear un esquema de Vehiculo
exports.automovilSchema = mongoose.Schema(
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
