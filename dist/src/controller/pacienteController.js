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
exports.obtenerPacientes = exports.registrarPaciente = void 0;
const Pacientes_Service_1 = require("../service/Pacientes.Service");
const registrarPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const infoPaciente = req.body;
        yield (0, Pacientes_Service_1._serviceRegistrarPaciente)(infoPaciente, (result) => {
            if (result.msgEx) {
                return res.json({ msgEx: result.msgEx });
            }
            else if (result.msgErr) {
                return res.json({ msgErr: result.msgErr });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.registrarPaciente = registrarPaciente;
const obtenerPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, Pacientes_Service_1._serviceObtenerPacientes)((result) => {
            if (result[0].idpaciente) {
                return res.json(result);
            }
            else {
                return res.json({ msgNoExi: result.msgNoExi });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.obtenerPacientes = obtenerPacientes;
