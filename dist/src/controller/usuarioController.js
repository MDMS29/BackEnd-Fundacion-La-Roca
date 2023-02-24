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
exports.registrarUsuario = exports.perfil = exports.autenticarUsuario = void 0;
const Usuario_Service_1 = require("../service/Usuario.Service");
const autenticarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let responseUsuario;
    try {
        const { usuario, contrasena } = req.body;
        responseUsuario = yield (0, Usuario_Service_1._serviceAutenticasUsuario)(usuario, contrasena);
    }
    catch (error) {
        console.log(error);
    }
    return res.json(responseUsuario);
});
exports.autenticarUsuario = autenticarUsuario;
const registrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let responseUsuario;
    try {
        const { usuario, contrasena } = req.body;
        responseUsuario = yield (0, Usuario_Service_1._serviceRegistrarUsuario)(usuario, contrasena);
    }
    catch (error) {
        console.log(error);
    }
    return res.json(responseUsuario);
});
exports.registrarUsuario = registrarUsuario;
const perfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario } = req;
    res.json(usuario.rows[0]);
});
exports.perfil = perfil;
