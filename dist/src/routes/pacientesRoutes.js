"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacienteController_1 = require("../controller/pacienteController");
const router = express_1.default.Router();
router.post('/registrarPaciente', pacienteController_1.registrarPaciente);
router.get('/obtenerPacientes', pacienteController_1.obtenerPacientes);
exports.default = router;
