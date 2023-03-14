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
exports._serviceRegistrarUsuario = exports._serviceAutenticasUsuario = void 0;
const db_1 = __importDefault(require("../../config/db"));
const generarJWT_1 = __importDefault(require("../helpers/generarJWT"));
const QueryUsuario_1 = require("../Querys/QueryUsuario");
const _serviceRegistrarUsuario = (infoUsuario, callback) => __awaiter(void 0, void 0, void 0, function* () {
    (0, QueryUsuario_1.insertUsuario)(db_1.default, { infoUsuario }, (result) => {
        if (result.affectedRows == 1) {
            callback({ msg: "¡Usuario Registrado!" });
        }
        else {
            callback({ msgEx: "¡Este Usuario ya existe!" });
        }
    });
});
exports._serviceRegistrarUsuario = _serviceRegistrarUsuario;
const _serviceAutenticasUsuario = (infoUsuario, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const { nIdent, contrasena } = infoUsuario;
    yield (0, QueryUsuario_1.getUsuarioLogin)(db_1.default, { nIdent, contrasena }, (result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result == 0) {
            callback({ msgNoEx: "¡Usuario o Contraseña son incorrectas!" });
        }
        else {
            let id = result.idusuario;
            const token = (0, generarJWT_1.default)(id);
            let usuario = result;
            yield (0, QueryUsuario_1.updateTokenUsuario)(db_1.default, { id, token }, (result) => {
                if (result.affectedRows == 1) {
                    callback({
                        id,
                        nombres: usuario.nombre,
                        apellidos: usuario.apellido,
                        tipoDoc: usuario.tipo_ident,
                        numDoc: usuario.n_identificacion,
                        tipoUsuario: usuario.tipo_usuario,
                        token
                    });
                }
            });
        }
    }));
    return;
});
exports._serviceAutenticasUsuario = _serviceAutenticasUsuario;
