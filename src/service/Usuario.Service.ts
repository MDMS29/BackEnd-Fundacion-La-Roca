import { IUsuario } from "../interfaces/UsuarioInterface";
import jwt from "jsonwebtoken";
import { getUsuario, updateTokenUsuario } from "../Querys/QueryUsuario";

const _serviceAutenticasUsuario = async (usuario: string, contrasena: string): Promise<Omit<IUsuario, 'contrasena' | 'usuario'>> => {
    let userData = await getUsuario(usuario, contrasena)
    //Validacion de Datos
    if (!userData.rows[0]) return { msg: "¡Usuario o Contraseña son incorrectas!"}

    const { id_usuario : id, usuario: user, contrasena: pass } = userData.rows[0];

    // Generar JWT
    if (id) {
        const token = jwt.sign({ id }, String(process.env.JWT_SECRET), { expiresIn: 86400 })
        const seActualizo = await updateTokenUsuario(id, token)
        
        if (seActualizo) {
            const objectUsuario: IUsuario = {
                id,
                nombre: user,
                token: token
            }
            return objectUsuario
        }
    }
}

export {
    _serviceAutenticasUsuario
}