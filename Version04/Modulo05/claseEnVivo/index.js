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
//Creamos una instancia de express
const app = express();
//crear puerto
const puerto = 5500;
//Permitir que todos los parametros sean en formato JSON
app.use(express.json());

//Creamos una promesa que se conecta a la base de datos
let promise = mongoose.connect('mongodb://localhost:27017/miprimerabasededatos');

//Crear un esquema de Vehiculo
const automovilesSchema = mongoose.Schema({
    modelo: Number,
    color: String,
    marca: String,
    tipo: String
}, {
    versionKey: false
})

//Crecar el modelo en mongoose
const automovilesModel = mongoose.model('automoviles', automovilesSchema);

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

//Creamos un puerto para express
app.post('/', (request, response) => {
    //Este objeto me crea el nuevo modelo en base al body
    const nuevoAutomovil = {
        modelo: request.body.modelo,
        color: request.body.color,
        marca: request.body.marca,
        tipo: request.body.tipo,
    }
    //Crear una constante instanciando el modelo
    const automovil = new automovilesModel(nuevoAutomovil);

    //Me persista el modelo que cree en la base de datos
    automovil.save((error, resp) => {
        response.json(resp);
    })

});

app.get('/', (request, response) => {
    //modelo me permite interactuar -> valla a db y traigame info
    automovilesModel.find((err, resp) => {
        response.json(resp);
    })
    //response.send('ruta para operacion leer verbo GET');
});

app.get('/modelo/:modelo', (req, response) => {
    const modelo = req.params.modelo;
    console.log('modelo: ', modelo);
    automovilesModel.find({modelo: modelo}, (err, resp) => {
        console.log(resp);
        response.json(resp);
    });
});

app.get('/color/:color', (req, response) => {
    const color = req.params.color;
    console.log('color: ', color);
    automovilesModel.find({color: color}, (err, resp) => {
        console.log(resp);
        response.json(resp);
    });
});

app.get('/color/:color([a-z]+)/modelo/:modelo([0-9]{4})', (req, res) => {
    const color = req.params.color;
    const modelo = req.params.modelo;

    res.send(`/color/${color}/modelo/${modelo}`);
});

app.put('/', (request, response) => {
    //valla a db y traigame info
    response.send('ruta para operacion actualizar verbo PUT');
});

app.delete('/', (request, response) => {
    //valla a db y traigame info
    response.send('ruta para operacion eliminar verbo DELETE');
});

app.get('*', (req, res) => {
    res.send('Pagina no encontrada', 404);
})

app.listen(puerto, () => {
    promise
        .then(() => console.log(chalk.green('Conectado a la base de datos')))
        .catch(() => console.log(chalk.red('No se pudo conectar a la base de datos')));
    console.log(`Aplicacion arriba sobre el puerto ${puerto}`);
})