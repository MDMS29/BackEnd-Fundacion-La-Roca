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
exports.verUsuarios = exports.registrarUsuario = exports.perfil = exports.autenticarUsuario = void 0;
const Usuario_Service_1 = require("../service/Usuario.Service");
const db_1 = __importDefault(require("../../config/db"));
const registrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let responseUsuario;
    try {
        const infoUsuario = req.body;
        responseUsuario = yield (0, Usuario_Service_1._serviceRegistrarUsuario)(infoUsuario, (result) => {
            if (result.msg) {
                return res.json({ msg: result.msg });
            }
            else if (result.msgEx) {
                return res.json({ msgEx: result.msgEx });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.registrarUsuario = registrarUsuario;
const autenticarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let responseUsuario;
    try {
        const infoUsuario = req.body;
        responseUsuario = yield (0, Usuario_Service_1._serviceAutenticasUsuario)(infoUsuario, (result) => {
            if (result.msgNoEx) {
                return res.json({ msgNoEx: result.msgNoEx });
            }
            if (result.id) {
                return res.json(result);
            }
            // else if(result.id){
            //     return result
            // }
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.autenticarUsuario = autenticarUsuario;
const verUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = "SELECT * FROM usuarios WHERE n_identificacion= '1130266003'";
    db_1.default.query(sql, function (err, result) {
        console.log(result);
    });
});
exports.verUsuarios = verUsuarios;
const perfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario } = req;
    res.json(usuario.rows[0]);
});
exports.perfil = perfil;
