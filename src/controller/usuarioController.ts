import { Response, Request } from "express";
import { _serviceAutenticasUsuario, _serviceRegistrarUsuario } from "../service/Usuario.Service";
import { BDuser, IUsuario } from "../interfaces/UsuarioInterface";
import connection from "../../config/db";

interface RequestUsuario extends Request {
    usuario?: BDuser
}

const autenticarUsuario = async (req: Request, res: Response) => {
    let responseUsuario: Omit<IUsuario, 'contrasena' | 'usuario'>
    try {
        const { nIdent, contrasena }: IUsuario = req.body as unknown as IUsuario
        responseUsuario = await _serviceAutenticasUsuario(nIdent, contrasena)

    } catch (error) {
        console.log(error)
    }

    return res.json(responseUsuario)
}

const registrarUsuario = async (req: Request, res: Response) => {
    let responseUsuario : any
    try {
        const infoUsuario = req.body as unknown as IUsuario
        responseUsuario = await _serviceRegistrarUsuario(infoUsuario)

    } catch (error) {
        console.log(error)
    }
    return res.json(responseUsuario)
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