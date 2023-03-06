"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUsuario = exports.updateTokenUsuario = exports.getUsuarioLogin = void 0;
const usuarioQuerys_1 = require("../dao/usuarioQuerys");
let bcrypt = require('bcrypt');
const mysql = require('mysql');
const insertUsuario = (connection, data, callback) => {
    const { nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasena } = data.infoUsuario;
    let queryGet = mysql.format(usuarioQuerys_1.queryGetNewUser, [nIdent]);
    connection.query(queryGet, function (err, result) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err)
                throw err;
            if (result.length == 0) {
                const salt = yield bcrypt.genSalt(10);
                const contrasenaHash = yield bcrypt.hash(contrasena, salt);
                let query = mysql.format(usuarioQuerys_1.queryInsertNewUsuario, [nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasenaHash]);
                connection.query(query, function (err, result) {
                    if (err)
                        throw err;
                    callback(result);
                });
            }
            else {
                callback(0);
            }
        });
    });
};
exports.insertUsuario = insertUsuario;
const getUsuarioLogin = (connection, data, callback) => {
    const { nIdent, contrasena } = data;
    let queryGet = mysql.format(usuarioQuerys_1.queryGetUsuarioLogin, [nIdent]);
    connection.query(queryGet, function (err, result) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err)
                throw err;
            const check = yield bcrypt.compare(contrasena, result[0].password);
            if (check) {
                callback(result[0]);
            }
            else {
                callback(0);
            }
        });
    });
};
exports.getUsuarioLogin = getUsuarioLogin;
const updateTokenUsuario = (connection, data, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, token } = data;
    let queryUpdate = mysql.format(usuarioQuerys_1.queryUpdateToken, [token, id]);
    connection.query(queryUpdate, (err, result) => {
        if (err)
            throw err;
        callback(result);
    });
});
exports.updateTokenUsuario = updateTokenUsuario;
