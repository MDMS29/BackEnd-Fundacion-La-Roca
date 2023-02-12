import { Response, Request } from "express";

import pool from "../../config/db";

import { _serviceAutenticasUsuario } from "../service/Usuario.Service";
import { IUsuario } from "../interfaces/UsuarioInterface";

const autenticarUsuario = async (req: Request, res: Response) => {
    let responseUsuario: IUsuario
    try {
        const body: any = req.body;
        responseUsuario = await _serviceAutenticasUsuario(body)
    } catch (error) {
        console.log(error)
    }
    return res.json(responseUsuario)
}

const consultarUsuarios = async () => {
    await pool.connect()
    const result = await pool.query('SELECT * FROM fundacion.usuarios')
    console.log(result.rows)
    await pool.end()
}

export {
    autenticarUsuario, consultarUsuarios
}