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
exports._serviceObtenerPacientes = exports._serviceRegistrarPaciente = void 0;
const db_1 = __importDefault(require("../../config/db"));
const QueryPacientes_1 = require("../Querys/QueryPacientes");
const _serviceRegistrarPaciente = (infoPaciente, callback) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, QueryPacientes_1.insertNewPaciente)(db_1.default, infoPaciente, (result) => {
        if (result.affectedRows == 1) {
            callback({ msgEx: "¡Paciente Registrado!" });
        }
        else {
            callback({ msgErr: "¡Error al Registrar Paciente!" });
        }
    });
});
exports._serviceRegistrarPaciente = _serviceRegistrarPaciente;
const _serviceObtenerPacientes = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, QueryPacientes_1.getPacientes)(db_1.default, (result) => {
        if (result[0].idpaciente) {
            callback(result);
        }
        else {
            callback({ msgNoExi: "¡No se encontraron pacientes!" });
        }
    });
});
exports._serviceObtenerPacientes = _serviceObtenerPacientes;
