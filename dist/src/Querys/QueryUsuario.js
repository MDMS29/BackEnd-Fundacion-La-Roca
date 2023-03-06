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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUsuario = exports.updateTokenUsuario = exports.getUsuarioLogin = void 0;
const db_1 = __importDefault(require("../../config/db"));
const usuarioQuerys_1 = require("../dao/usuarioQuerys");
let bcrypt = require('bcrypt');
const insertUsuario = (infoUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasena } = infoUsuario;
    try {
        let res;
        db_1.default.query(usuarioQuerys_1.queryGetNewUser, [nIdent], (result) => {
            if (result) {
                return 1;
            }
        });
        console.log(res);
        return;
        //Hashed de contraseña
        const salt = yield bcrypt.genSalt(10);
        const contrasenaHash = yield bcrypt.hash(contrasena, salt);
        if (contrasenaHash.length == 0)
            return 1;
        let ENU = 'A';
        yield db_1.default.query(usuarioQuerys_1.queryInsertNewUsuario, [nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasenaHash, ENU]);
        return 1;
    }
    catch (error) {
        return new Error(`No se inserto el usuario: ${nIdent}`);
    }
});
exports.insertUsuario = insertUsuario;
const getUsuarioLogin = (usuario, contrasena) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(usuario + " " + contrasena);
    try {
        const result = yield db_1.default.query(usuarioQuerys_1.queryGetUsuarioLogin, [usuario, contrasena]);
        if (result.rows[0].includes([]))
            return false;
        console.log(result);
        const check = yield bcrypt.compare(contrasena, result.rows[0].contrasena);
        console.log(check);
        return;
        // console.log(result)
        // return result
    }
    catch (error) {
        return new Error(`No se consulto el usuario: ${usuario}`);
    }
    yield db_1.default.end();
});
exports.getUsuarioLogin = getUsuarioLogin;
const updateTokenUsuario = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.query(usuarioQuerys_1.queryUpdateToken, [token, id]);
        return true;
    }
    catch (error) {
        return new Error(`No se actualizo el token id: ${id}`);
    }
});
exports.updateTokenUsuario = updateTokenUsuario;
