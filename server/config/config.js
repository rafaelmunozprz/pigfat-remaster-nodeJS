/**
 * ====================
 * PUERTO
 * ====================
 */
process.env.PORT = process.env.PORT || 44444;

/**
 * ==============================================
 * ENTORNO DE EJECUCIÓN (PRODUCCION O DESARROLLO)
 * ==============================================
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'develop';


/**
 * =====================
 * VENCIMIENTO DEL TOKEN
 * =====================
 */
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24;

/**
 * =====================
 * SEED DE AUTENTICACION
 * =====================
 */
process.env.SEED = process.env.SEED || 'se3d-d3-de5arr01l0';

/**
 * ========================
 * BASE DE DATOS
 * ========================
 */
let localUrlDB;
if (process.env.NODE_ENV === 'develop')
    localUrlDB = "mongodb://localhost:27017/pigfat-remaster";
else
    localUrlDB = process.env.MONGO_URI;

process.env.URLDB = localUrlDB;

