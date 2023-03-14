const mysql = require('mysql')
import { queryInsertNewPaciente, queryGetPacientes } from "../dao/pacienteQuerys"
import { IRegistroPaciente } from "../interfaces/PacienteInterface"

const insertNewPaciente = (connection, data: IRegistroPaciente, callback) => {
    const { nombres, apellidos, tipoDoc, nIdent, fechaNac, edad, sexo, direccion, eps, fechaIng }: IRegistroPaciente = data

    let queryInsert = mysql.format(queryInsertNewPaciente, [tipoDoc, nIdent, nombres, apellidos, fechaNac, edad, sexo, direccion, eps, fechaIng])

    connection.query(queryInsert, (err, result) => {
        if (err) throw err
        callback(result)
        // console.log(result)
    })
}

const getPacientes = (connection, callback) => {
    let queryGet = mysql.format(queryGetPacientes)
    connection.query(queryGet, (err, result) => {
        if (err) throw err
        callback(result)
    })
}

export {
    insertNewPaciente,
    getPacientes
}