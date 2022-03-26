/*
//Node
//Importar modulos
//require('<nombreModulo>');
//require() -> La forma como node carga los modulos
//Almacenar una instancia HTTP y la devuelve en la
//variable http
var http = require('http');
console.log(http.Server);

//Crear servidor
//Necesitamos utilizar la instacia http creada para llamar el metodo
//http.createServer(), este a su vez, me crea una instancia
// del servidor. Lo puedo enlazar al puerto donde lo desee
//levantar usando el metodo listen(<numeroPuerto>).
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('{"mensaje": "mi segundo mensaje"}');
}).listen(8081);

console.log('Servidor esta corriendo en el puerto 8081');
*/

//Express
//Importamos y usamos express
const express = require('express');
//importar y usamos mongoose
const mongoose = require('mongoose');
//importar y usamos chalk
const chalk = require('chalk');
//Importamos las rutas creadas
const router = require('./rutas');
//Creamos una instancia de express
const app = express();
//crear puerto
const puerto = 5500;
//Permitir que todos los parametros sean en formato JSON
app.use(express.json());

//Importamos el middleware
const {isAdminMW} = require('./middlewares');

//Despues agregamos el middleware
//app.use(<nombreMiddleware>)
app.use(isAdminMW);

//Usamos la importacion de las rutas
app.use(router);

//Creamos una promesa que se conecta a la base de datos
let promise = mongoose.connect('mongodb://localhost:27017/miprimerabasededatos');

app.listen(puerto, () => {
    promise
        .then(() => console.log(chalk.green('Conectado a la base de datos')))
        .catch(() => console.log(chalk.red('No se pudo conectar a la base de datos')));
    console.log(`Aplicacion arriba sobre el puerto ${puerto}`);
})