import connection from "../../config/db";
import jwt from "jsonwebtoken";

import { IUsuario } from "../interfaces/UsuarioInterface";

import { insertUsuario, getUsuarioLogin, updateTokenUsuario } from "../Querys/QueryUsuario";

const _serviceRegistrarUsuario = async (infoUsuario: IUsuario, callback): Promise<any> => {
    insertUsuario(connection, { infoUsuario }, (result) => {
        if (result.affectedRows == 1) {
            callback({ msg: "¡Usuario Registrado!" })
        }
        else {
            callback({ msgEx: "¡Este Usuario ya existe!" })
        }
    })
}

const _serviceAutenticasUsuario = async (infoUsuario: IUsuario, callback): Promise<Omit<IUsuario, 'contrasena' | 'usuario'>> => {
    const { nIdent, contrasena }: IUsuario = infoUsuario

    await getUsuarioLogin(connection, { nIdent, contrasena }, async (result) => {
        if (result) {
            let id = result.idusuario
            const token = jwt.sign({ id }, String(process.env.JWT_SECRET), { expiresIn: 86400 })

            let usuario = result

            await updateTokenUsuario(connection, { id, token }, (result) => {
                if (result.affectedRows == 1) {
                    callback(
                        {
                            id,
                            nombres : usuario.nombre,
                            apellidos : usuario.apellido,
                            tipoDoc : usuario.tipo_ident,
                            numDoc : usuario.n_identificacion,
                            tipoUsuario : usuario.tipo_usuario,
                            token : usuario.token
                        }
                    )
                }
            })
        }
        else {
            callback({ msgNoEx: "¡Usuario o Contraseña son incorrectas!" })
        }
    })
    return
}


export {
    _serviceAutenticasUsuario, _serviceRegistrarUsuario
}