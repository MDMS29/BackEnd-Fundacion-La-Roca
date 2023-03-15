import { Response, Request } from "express";
import { _serviceAutenticasUsuario, _serviceRegistrarUsuario } from "../service/Usuario.Service";
import { BDuser, IUsuario } from "../interfaces/UsuarioInterface";
import checkout from "../middleware/checkout";

interface RequestUsuario extends Request {
    usuario?: BDuser
}

const registrarUsuario = async (req: Request, res: Response) => {
    try {
        const infoUsuario = req.body as unknown as IUsuario
        await _serviceRegistrarUsuario(infoUsuario, (result) => {
            if (result.msg) {
                return res.json({ msg: result.msg })
            }
            else if (result.msgEx) {
                return res.json({ msgEx: result.msgEx })
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const autenticarUsuario = async (req: Request, res: Response) => {
    try {
        const infoUsuario = req.body as unknown as IUsuario
        await _serviceAutenticasUsuario(infoUsuario, (result) => {
            if (result.msgNoEx) {
                return res.json({ msgNoEx: result.msgNoEx })
            }
            if (result.id) {
                return res.json(result)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const perfil = async (req: RequestUsuario, res: Response) => {
    // console.log(req.headers)
    await checkout({ authorization: req.headers.authorization }, (result) => {
        if (result) {
            return res.json(result)
        }
    })
}


export {
    autenticarUsuario, perfil, registrarUsuario
}