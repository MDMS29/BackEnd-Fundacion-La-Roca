import { Response, Request } from "express";
import { _serviceAutenticasUsuario, _serviceRegistrarUsuario } from "../service/Usuario.Service";
import { BDuser, IUsuario } from "../interfaces/UsuarioInterface";
import connection from "../../config/db";

interface RequestUsuario extends Request {
    usuario?: BDuser
}

const registrarUsuario = async (req: Request, res: Response) => {
    let responseUsuario: object
    try {
        const infoUsuario = req.body as unknown as IUsuario
        responseUsuario = await _serviceRegistrarUsuario(infoUsuario, (result) => {
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
    let responseUsuario: object
    try {
        const infoUsuario = req.body as unknown as IUsuario
        responseUsuario = await _serviceAutenticasUsuario(infoUsuario, (result) => {
            if (result.msgNoEx) {
                return res.json({ msgNoEx: result.msgNoEx })
            }
            if (result.id) {
                return res.json(result)
            }
            // else if(result.id){
            //     return result
            // }
        })

    } catch (error) {
        console.log(error)
    }
}


const verUsuarios = async (req: Request, res: Response) => {

    const sql = "SELECT * FROM usuarios WHERE n_identificacion= '1130266003'"

    connection.query(sql, function (err, result) {
        console.log(result);
    });
}

const perfil = async (req: RequestUsuario, res: Response) => {
    const { usuario } = req
    res.json(usuario.rows[0])
}


export {
    autenticarUsuario, perfil, registrarUsuario, verUsuarios
}