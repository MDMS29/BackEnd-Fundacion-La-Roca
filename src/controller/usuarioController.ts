import { Response, Request } from "express";

import { _serviceAutenticasUsuario, _serviceRegistrarUsuario } from "../service/Usuario.Service";
import { BDuser, IUsuario } from "../interfaces/UsuarioInterface";

interface RequestUsuario extends Request {
    usuario?: BDuser
}

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

const registrarUsuario = async (req: Request, res: Response) => {
    let responseUsuario: Omit<IUsuario, 'contrasena' | 'usuario'>
    try {
        const { usuario, contrasena }: IUsuario = req.body as unknown as IUsuario
        responseUsuario = await _serviceRegistrarUsuario(usuario, contrasena)

    } catch (error) {
        console.log(error)
    }
    return res.json(responseUsuario)
}


const perfil = async (req: RequestUsuario, res: Response) => {
    const { usuario } = req
    res.json(usuario.rows[0])
}


export {
    autenticarUsuario, perfil, registrarUsuario
}