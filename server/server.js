//Se importa la configuración para su manejo en desarrollo y producción
require('./config/config');
/**
 * @param express variable que importa la librería express (para montar el servidor js)
 */
const express = require('express');
/**
 * @param app variable que inicializa las funciones del servidor js
 */
const app = express();
/**
 * @param path variable que importa la librería parth, propia de nodeJS
 */
const path = require('path');

/**
 * ============================
 *  CONEXION A MONGOOSE
 * ============================
 * @param mongoose variable que importa la librería de mongoose
 */
const mongoose = require('mongoose');
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
    if(err) throw Error;
    console.log('Database ONLINE');
});

/**
 * ===================================================
 * PRESENTAR LOS DATOS PARA LAS RESPECTIVAS PETICIONES
 * ===================================================
 * @param bodyParser variable que importa la librería body-parser
 */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * ===========================
 * HABILITAR LA CARPETA PUBLIC
 * ===========================
 */
app.use(express.static(path.resolve(__dirname, '../public')));

/**
 * =================================
 * CONFIGURACIÓN GLOBAL DE LAS RUTAS
 * =================================
 */
app.use(require('./routes/index'));

/**
 * ===========================================
 * PUERTO ABIERTO PARA LA ESUCHA DE PETICIONES
 * ===========================================
 */
app.listen(process.env.PORT, ()=>{
    console.log('PUERTO DE ESCUCHA: ', process.env.PORT);
});