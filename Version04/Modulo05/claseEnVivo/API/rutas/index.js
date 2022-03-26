//Express
//Importamos y usamos express
const express = require('express');

//Usamos el Router de express
const rutas = express.Router();

//Importamos el controlador que se encarga de la coleccion de automoviles
const automovilControlador = require('../controladores/automoviles');

//Operacion para listar todos los datos
rutas.get('/', automovilControlador.listarTodos);

rutas.get('/modelo/:modelo', (req, response) => {
    const modelo = req.params.modelo;
    console.log('modelo: ', modelo);
    automovilesModel.find({modelo: modelo}, (err, resp) => {
        console.log(resp);
        response.json(resp);
    });
});

rutas.get('/color/:color', (req, response) => {
    const color = req.params.color;
    console.log('color: ', color);
    automovilesModel.find({color: color}, (err, resp) => {
        console.log(resp);
        response.json(resp);
    });
});

rutas.get('/color/:color([a-z]+)/modelo/:modelo([0-9]{4})', (req, res) => {
    const color = req.params.color;
    const modelo = req.params.modelo;

    res.send(`/color/${color}/modelo/${modelo}`);
});

rutas.put('/', (request, response) => {
    //valla a db y traigame info
    response.send('ruta para operacion actualizar verbo PUT');
});

rutas.delete('/', (request, response) => {
    //valla a db y traigame info
    response.send('ruta para operacion eliminar verbo DELETE');
});

rutas.get('*', (req, res) => {
    res.send('Pagina no encontrada', 404);
})

/*
//Operacion para listar todos los datos
router.get('/', automovilesControlador.listarInformacion);
//Operacion para traer datos en base al modelo
router.get('/modelo/:modelo', automovilesControlador.listarPorModelo);
//Operacion para traer datos en base al color
router.get('/color/:color', automovilesControlador.listarPorColor);
//Operacion para traer datos en base al color y al modelo
router.get('/color/:color/modelo/:modelo', automovilesControlador.listarPorColorYModelo);*/

module.exports = rutas;