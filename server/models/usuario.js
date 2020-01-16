/**
 * =======================
 * DEPENDENCIA DE MONGOOSE
 * =======================
 * @param mongoose variable que importa la dependencia de mongoose
 */
const mongoose = require('mongoose');

/**
 * =================================
 * VALIDADOR DE CONSULTAS A MONGOOSE
 * =================================
 * @param uniqueValidator variable que importa la dependencia de mongoose-unique-validator
 */
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

/**
 * =============
 * ROLES VÁLIDOS
 * =============
 * @param rolesValidos variable que contiene los unicos roles válidos capaces de hacer consultas a la base de datos
 */
let rolesValidos = {
    values: ['USER-ROL', 'VETERINARIO-ROL', 'ADMIN-ROL'],
    message: '{VALUE} no es un "ROL" válido'
};

/**
 * ========================================
 * ESQUEMA DE BASE DE DATOS PARA EL USUARIO
 * ========================================
 * @param usuarioSchema variable que contiene el esquema de usuario para ser ingresado a la base de datos
 */
let usuarioSchema = new Schema({
    primerNombre: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    segundoNombre: {
        type: String,
        default: 'NA',
    },
    primerApellido: {
        type: String,
        required: [true, 'Primer apellidos obligatorio']
    },
    segundoApellido: {
        type: String,
        required: [true, 'Segundo apellido obligatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'E-mail obligatorio']
    },
    telefonoPrincipal: {
        type: String,
        unique: true,
        required: [true, 'Teléfono principal obligatorio']
    },
    telefonoSecundario: {
        type: String,
        default: 'NA',
    },
    rol: {
        type: String,
        default: 'USER-ROL',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        required: [true, 'Password obligatorio']
    }
});

/**
 * ===========================================================
 * METODO PARA BORRAR EL PASSWORD EN LA RESPUESTA DEL SERVIDOR
 * ===========================================================
 * @param usuarioSchema.methods.toJSON Funcion que regresa todo el objeto para visualización a excepción de la contraseña
 */
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
};

/**
 * verifica que los datos cumplan con la verificación de unicos, dentro de la base datos
 */
usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser unico'
});

/**
 * MODULOS EXPORTADOS PARA SER USADOS EN OTROS ARCHIVOS
 */
module.exports = mongoose.model('Usuario', usuarioSchema);

