import { Response, Request } from "express";

import pool from "../../config/db";

import { _serviceAutenticasUsuario } from "../service/Usuario.Service";
import { IUsuario } from "../interfaces/UsuarioInterface";

const autenticarUsuario = async (req: Request, res: Response) => {
    let responseUsuario: Omit<IUsuario, 'contrasena' | 'usuario'>
    try {
        const { usuario, contrasena }: IUsuario = req.body as unknown as IUsuario
        responseUsuario = await _serviceAutenticasUsuario(usuario, contrasena)

    } catch (error) {
        console.log(error)
    }
    
    return res.json(responseUsuario)
}

// const consultarUsuarios = async () => {
//     await pool.connect()
//     const result = await pool.query(consultarUsuarios);
//     console.log(result.rows) 
//     await pool.end()
// }

const perfil = async (req: Request, res: Response) => {
    // const { usuario } = req
    // res.json(usuario)
}


export {
    autenticarUsuario, perfil
}