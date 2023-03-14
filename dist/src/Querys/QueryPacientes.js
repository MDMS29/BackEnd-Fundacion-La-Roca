"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPacientes = exports.insertNewPaciente = void 0;
const mysql = require('mysql');
const pacienteQuerys_1 = require("../dao/pacienteQuerys");
const insertNewPaciente = (connection, data, callback) => {
    const { nombres, apellidos, tipoDoc, nIdent, fechaNac, edad, sexo, direccion, eps, fechaIng } = data;
    let queryInsert = mysql.format(pacienteQuerys_1.queryInsertNewPaciente, [tipoDoc, nIdent, nombres, apellidos, fechaNac, edad, sexo, direccion, eps, fechaIng]);
    connection.query(queryInsert, (err, result) => {
        if (err)
            throw err;
        callback(result);
        // console.log(result)
    });
};
exports.insertNewPaciente = insertNewPaciente;
const getPacientes = (connection, callback) => {
    let queryGet = mysql.format(pacienteQuerys_1.queryGetPacientes);
    connection.query(queryGet, (err, result) => {
        if (err)
            throw err;
        callback(result);
    });
};
exports.getPacientes = getPacientes;
