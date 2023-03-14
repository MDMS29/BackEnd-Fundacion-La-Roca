import connection from "../../config/db";
import { insertNewPaciente, getPacientes } from "../Querys/QueryPacientes";
import { IRegistroPaciente } from "../interfaces/PacienteInterface"

const _serviceRegistrarPaciente = async (infoPaciente: IRegistroPaciente, callback) => {

    await insertNewPaciente(connection, infoPaciente, (result) => {
        if (result.affectedRows == 1) {
            callback({ msgEx: "¡Paciente Registrado!" })
        }
        else {
            callback({ msgErr: "¡Error al Registrar Paciente!" })
        }
    })
}

const _serviceObtenerPacientes = async (callback) => {
    await getPacientes(connection, (result) => {
        if (result[0].idpaciente) {
            callback(result)
        } else {
            callback({ msgNoExi : "¡No se encontraron pacientes!" })
        }
    })

}

export {
    _serviceRegistrarPaciente,
    _serviceObtenerPacientes
}