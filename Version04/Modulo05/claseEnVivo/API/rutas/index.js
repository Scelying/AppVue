//Express
//Importamos y usamos express
const express = require('express');
//Usamos el Router de express
const rutas = express.Router();

//Importamos el controlador que se encarga de la coleccion de automoviles
const automovilControlador = require('../controladores/automoviles');

//Operacion para listar todos los datos
rutas.get('/', automovilControlador.listarTodos);
//Operacion para listar todos los datos por modelo
rutas.get('/modelo/:modelo', automovilControlador.listarPorModelo);
//Operacion para listar todos los datos por color
rutas.get('/color/:color', automovilControlador.listarPorColor);
//Operacion para listar todos los datos por color y modelo
rutas.get('/color/:color([a-z]+)/modelo/:modelo([0-9]{4})', automovilControlador.listarPorColorYModelo);
//Operacion para crear el token
rutas.post('/token', automovilControlador.generarToken);
//Operacion para actualizar
rutas.put('/', automovilControlador.actualizarDatos);
//Operacion para eliminar
rutas.delete('/', automovilControlador.eliminarDatos);
//Operacion pagina no encontrada
rutas.get('*', automovilControlador.paginaNoEncontrada);

module.exports = rutas;