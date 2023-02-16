"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultarUsuarios = exports.queryUpdateToken = exports.queryGetUsuario = void 0;
exports.queryGetUsuario = `SELECT * FROM fundacion.usuarios WHERE usuario=$1 AND contrasena=$2;`;
exports.queryUpdateToken = `UPDATE fundacion.usuarios SET token=$1 WHERE id_usuario=$2;`;
exports.consultarUsuarios = 'SELECT * FROM fundacion.usuarios';
