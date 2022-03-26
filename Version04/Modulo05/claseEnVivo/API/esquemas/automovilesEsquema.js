//importar y usamos mongoose
const mongoose = require("mongoose");

mongoose.set("debug", function (coll, method, query, doc) {
  console.log(query);
});

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
