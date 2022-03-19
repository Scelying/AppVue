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
    response.end('{"mensaje": "mi primer mensaje"}');
}).listen(8082);

console.log('Servidor esta corriendo en el puerto 8082');