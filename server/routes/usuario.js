const express = require('express');

/**
 * =================================
 * DEPENDENCIA QUE PERMITE ENCRIPTAR
 * =================================
 * @param bcrypt dependencia para poder encriptar la contraseña
 */
const bcrypt = require('bcrypt');

/**
 * =======================================================
 * DEPENDENCIA QUE PERMITE UTILIZAR VALIDACIONES MULTIPLES
 * =======================================================
 * @param _unscr DEpendencia de underscore para poder utilizar validaciones multiples
 */
const _unscr = require('underscore');

/**
 * =============================
 * ESQUEMA DE BD PARA EL USUARIO
 * =============================
 * @param Usuario variable local que importa el esquema de base de datos para el usuario
 */
const Usuario = require('../models/usuario');

const app = express();

/**
 * MONSTRAR TODOS LOS USUARIOS
 */

/**
 * MONSTRAR SOLO UN USUARIO
 */

/**
 * MONSTRAR USUARIO POR ROL
 */

/**
 * CREAR USUARIO
 */
app.post('/usuario', (req, res) => {
    /**
     * @param body variable local que carga todo loq ue viene en el request de la página
     */
    let body = req.body;

    let usuario = new Usuario({
        "primerNombre": body.primerNombre,
        "primerApellido": body.primerApellido,
        "segundoApellido": body.segundoApellido,
        "email": body.email,
        "telefonoPrincipal": body.telefonoPrincipal,
        "password": bcrypt.hashSync(body.password, 10)
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: usuarioDB,
            message: 'USUARIO CREADO EXITOSAMENTE'
        })
    });

});
/**
 * ACTUALIZAR USUARIO
 */

/**
 * ELIMINAR INFORMACIÓN DEL USUARIO
 */

/**
 * CAMBIAR ESTADO DEL USUARIO A INACTIVO
 */

/**
 * MODULOS EXPORTADOS A PARA SER USADOS EN OTROS ARCHIVOS
 */
module.exports = app;