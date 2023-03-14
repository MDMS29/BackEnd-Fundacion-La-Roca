"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryGetPacientes = exports.queryInsertNewPaciente = void 0;
//Registro nuevo usuario
exports.queryInsertNewPaciente = "INSERT INTO pacientes(tipoDocumento, identificacion, nombres, apellidos, fechaNacimiento, edad, sexo, direccion, eps, fechaIngreso) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
exports.queryGetPacientes = "SELECT * FROM pacientes WHERE estado = 'A'";
