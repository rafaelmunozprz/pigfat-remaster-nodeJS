/**
 * =====================
 * DEPENDENCIA DE XPRESS
 * =====================
 * @param express variable de la dependencia express
 */
const express = require('express');
/**
 * @param app variable que contiene las funcionalidades de la dependencia "express"
 */
const app = express();

/**
 * Lista de rutas que pueden tener acceso
 */
app.use(require('./usuario'));

/**
 * ==================
 * MÓDULOS EXPORTADOS
 * ==================
 */
module.exports = app;

