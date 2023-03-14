import { Request, Response } from "express"
import connection from "../../config/db"
import { queryGetPacientes } from "../dao/pacienteQuerys"
import { IRegistroPaciente } from "../interfaces/PacienteInterface"
import { _serviceRegistrarPaciente, _serviceObtenerPacientes } from "../service/Pacientes.Service"

const registrarPaciente = async (req: Request, res: Response) => {
    try {
        const infoPaciente = req.body as unknown as IRegistroPaciente

        await _serviceRegistrarPaciente(infoPaciente, (result) => {
            if (result.msgEx) {
                return res.json({ msgEx: result.msgEx })
            } else if (result.msgErr) {
                return res.json({ msgErr: result.msgErr })
            }
        })
    } catch (error) {
        console.log(error)
    }
}
const obtenerPacientes = async (req: Request, res: Response) => {
    try {
        await _serviceObtenerPacientes((result) => {
            if (result[0].idpaciente) {
                return res.json(result)
            } else {
                return res.json({ msgNoExi: result.msgNoExi })
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    registrarPaciente,
    obtenerPacientes
}