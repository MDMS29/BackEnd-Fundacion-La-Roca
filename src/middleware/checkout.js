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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    //Si se realiza la autorizacion y si hay un token.
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(' ')[1]; //Se toma el token y se cambia de posicion a 1.
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            //Busca al usuario por id.                   Eliminar la contraseña de la respuesta recibida
            req.usuario = yield Usuario.findById(decoded.id).select("-password -confirmado -token -createdAt -updatedAt -__v");
            return next();
        }
        catch (error) {
            return res.status(404).json({ message: 'Hubo un error!' });
        }
    }
    if (!token) {
        const error = new Error('Token no valido!');
        return res.status(401).json({ message: error.message });
    }
    next(); //Realiza el siguiente middleware.
});
exports.default = checkout;
