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
exports.updateTokenUsuario = exports.getUsuario = void 0;
const db_1 = __importDefault(require("../../config/db"));
const usuarioQuerys_1 = require("../dao/usuarioQuerys");
const getUsuario = (usuario, contrasena) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query(usuarioQuerys_1.queryGetUsuario, [usuario, contrasena]);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUsuario = getUsuario;
const updateTokenUsuario = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.query(usuarioQuerys_1.queryUpdateToken, [token, id]);
        return true;
    }
    catch (error) {
        throw new Error(`No se actualizo el token id: ${id}`);
        return false;
    }
});
exports.updateTokenUsuario = updateTokenUsuario;
