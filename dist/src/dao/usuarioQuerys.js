"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryUpdateToken = exports.queryGetUsuarioLogin = exports.queryGetNewUser = exports.queryInsertNewUsuario = void 0;
//Registro nuevo usuario
exports.queryInsertNewUsuario = `INSERT INTO usuarios(nombre, apellido, tipo_ident, n_identificacion, tipo_usuario, password) VALUES (?, ?, ?, ?, ?, ?);`;
exports.queryGetNewUser = `SELECT * FROM usuarios WHERE n_identificacion=?`;
//Login
exports.queryGetUsuarioLogin = `SELECT * FROM usuarios WHERE n_identificacion=? AND estado='A'`;
exports.queryUpdateToken = `UPDATE usuarios SET token=? WHERE idusuario=?;`;
