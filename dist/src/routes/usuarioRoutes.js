"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkout_1 = __importDefault(require("../middleware/checkout"));
const usuarioController_1 = require("../controller/usuarioController");
const router = express_1.default.Router();
router.post('/login', usuarioController_1.autenticarUsuario);
// router.get('/login', consultarUsuarios)
router.get('/perfil', checkout_1.default, usuarioController_1.perfil);
exports.default = router;
