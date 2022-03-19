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
//Creamos una instancia de express
const app = express();
//crear puerto
const puerto = 5500;
//Creamos un puerto para express
app.post('/', (request, response) => {
    //valla a db y traigame info
    response.send('ruta para operacion crear verbo POST');
});

app.get('/', (request, response) => {
    //valla a db y traigame info
    response.send('ruta para operacion leer verbo GET');
});

app.get('/:color/:modelo', (req, res) => {
    const color = req.params.color;
    const modelo = req.params.modelo;
    res.send(`/${color}/${modelo}`);
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
    console.log(`Aplicacion arriba sobre el puerto ${puerto}`);
})