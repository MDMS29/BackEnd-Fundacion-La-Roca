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
exports._serviceAutenticasUsuario = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const QueryUsuario_1 = require("../Querys/QueryUsuario");
function _serviceAutenticasUsuario(req) {
    return __awaiter(this, void 0, void 0, function* () {
        let token;
        const usuario = req.usuario;
        const contraseña = req.contraseña;
        let actualizado;
        let data = yield (0, QueryUsuario_1.getUsuario)(usuario, contraseña);
        let id = data.id_usuario;
        // Generar JWT
        if (id) {
            token = jsonwebtoken_1.default.sign({ id }, String(process.env.JWT_SECRET), { expiresIn: 86400 });
            actualizado = yield (0, QueryUsuario_1.updateTokenUsuario)(id, token);
            if (actualizado === 1) {
                const objectUsuario = {
                    id,
                    nombre: data.usuario,
                    token: data.token
                };
                return objectUsuario;
            }
        }
    });
}
exports._serviceAutenticasUsuario = _serviceAutenticasUsuario;
