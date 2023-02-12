import { IUsuario } from "../interfaces/UsuarioInterface";
import jwt from "jsonwebtoken";
import { getUsuario, updateTokenUsuario } from "../Querys/QueryUsuario";

async function _serviceAutenticasUsuario(req: any): Promise<IUsuario> {
    let token: string;
    const usuario: string = req.usuario
    const contraseña: string = req.contraseña
    let actualizado: any

    let data: any = await getUsuario(usuario, contraseña)

    
    let id: number = data.id_usuario
    
    // Generar JWT
    if (id) {
        token = jwt.sign({ id }, String(process.env.JWT_SECRET), { expiresIn: 86400 })
        actualizado = await updateTokenUsuario(id, token)
        if (actualizado === 1) {
            const objectUsuario = {
                id,
                nombre: data.usuario,
                token: data.token
            }
            return objectUsuario
        }
    }
}

export {
    _serviceAutenticasUsuario
}