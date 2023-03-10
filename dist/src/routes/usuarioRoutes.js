"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioController_1 = require("../controller/usuarioController");
const router = express_1.default.Router();
router.post('/login', usuarioController_1.autenticarUsuario);
router.post('/registrarUsuario', usuarioController_1.registrarUsuario);
router.get('/perfil', usuarioController_1.perfil);
exports.default = router;
