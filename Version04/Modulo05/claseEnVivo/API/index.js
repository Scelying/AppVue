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
//Necesitamos utlizar la instacia hhtp creada para llamar el metodo
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
//imporat y usamos chalk
const chalk = require('chalk');
const { response } = require('express');
//Imprtamos las rutas creadas
const router = require('./rutas');
//Creamos una instancia de express
const app = express();
//crear puerto
const puerto = 5500;
//Permitir que todos los parametros sean en formato JSON
app.use(express.json());

//Usamos la importacion de las rutas
app.use(router);

//Creamos una promesa que se conecta a la base de datos
let promise = mongoose.connect('mongodb://localhost:27017/miprimerabasededatos');

//Vamos a crear nuestro primer middleware
//Middleware condigo que se ejecuta antes o despues del
//manejo de una ruta(path)
//Mi primer Middleware validara si soy administrador
function isAdminMw(req, res, next) {
    //Error interno en el servidor
    //Si no envio el encabezado la propiedad isAdmin
    if(req.headers['isadmin'] === undefined) {
        res.status(500).send('Internal Error Server');
    }
    else if(JSON.parse(req.headers['isadmin'])) {
        //Si es admin continua con el flujo normal
        next();
    } else {
        //Si no es admin me retorna un error de acceso
        res.status(403).send('Forbidden Acess Denied');
    }
}

//Despues agregamos el middleware
//app.use(<nombreMiddleware>)
app.use(isAdminMw);

app.listen(puerto, () => {
    promise
        .then(() => console.log(chalk.green('Conectado a la base de datos')))
        .catch(() => console.log(chalk.red('No se pudo conectar a la base de datos')));
    console.log(`Aplicacion arriba sobre el puerto ${puerto}`);
})