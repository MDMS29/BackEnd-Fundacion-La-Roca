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
const _serviceAutenticasUsuario = (usuario, contrasena) => __awaiter(void 0, void 0, void 0, function* () {
    let userData = yield (0, QueryUsuario_1.getUsuario)(usuario, contrasena);
    //Datos vacíos
    if (!userData.rows[0])
        return { msg: "Usuario no encontrado" };
    const { id, usuario: user, contrasena: pass } = userData.rows[0];
    //Validación de contraseña
    if (contrasena !== pass || pass !== contrasena)
        return { msg: "¡Usuario o Contraseña son incorrectas!" };
    // Generar JWT
    if (id) {
        const token = jsonwebtoken_1.default.sign({ id }, String(process.env.JWT_SECRET), { expiresIn: 86400 });
        const seActualizo = yield (0, QueryUsuario_1.updateTokenUsuario)(id, token);
        if (seActualizo) {
            const objectUsuario = {
                id,
                nombre: userData.usuario,
                token: userData.token
            };
            return objectUsuario;
        }
    }
});
exports._serviceAutenticasUsuario = _serviceAutenticasUsuario;
