//importar y usamos mongoose
const mongoose = require("mongoose");

mongoose.set("debug", function (coll, method, query, doc) {
  console.log('coll:', coll);
  console.log('method:', method);
  console.log('query:', query);
  console.log('doc:', doc);
});

//Crear un esquema de Usuarios
exports.usuarioSchema = mongoose.Schema(
  {
    usuario: String,
    clave: String,
  },
  {
    versionKey: false,
  }
);
