"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryUpdateToken = exports.queryGetUsuarioLogin = exports.queryGetNewUser = exports.queryInsertNewUsuario = void 0;
//Registro nuevo usuario
exports.queryInsertNewUsuario = `INSERT INTO fundacion.usuarios(usuario, contrasena) VALUES ($1, $2);`;
exports.queryGetNewUser = `SELECT * FROM fundacion.usuarios WHERE usuario=$1`;
//Login
exports.queryGetUsuarioLogin = `SELECT * FROM fundacion.usuarios WHERE usuario=$1 AND contrasena=$2`;
exports.queryUpdateToken = `UPDATE fundacion.usuarios SET token=$1 WHERE id_usuario=$2;`;
