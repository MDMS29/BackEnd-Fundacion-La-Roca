import { IUsuario } from "../interfaces/UsuarioInterface";
import jwt from "jsonwebtoken";
import { insertUsuario, getUsuarioLogin, updateTokenUsuario } from "../Querys/QueryUsuario";



const _serviceAutenticasUsuario = async (usuario: string, contrasena: string): Promise<Omit<IUsuario, 'contrasena' | 'usuario'>> => {
    let userData = await getUsuarioLogin(usuario, contrasena)

    //Validación de Datos 
    if (userData == false) return { msg: "¡Usuario o Contraseña son incorrectas!" }
    return

    // const { id_usuario: id, usuario: user, contrasena: pass } = userData.rows[0];

    // // Generar JWT

    // if (id) {
    //     const token = jwt.sign({ id }, String(process.env.JWT_SECRET), { expiresIn: 86400 })
    //     const seActualizo = await updateTokenUsuario(id, token)

    //     if (seActualizo) {
    //         const objectUsuario: IUsuario = {
    //             id,
    //             nombre: user,
    //             token: token
    //         }
    //         return objectUsuario
    //     }
    // }
}

const _serviceRegistrarUsuario = async (infoUsuario : IUsuario): Promise<any> => {
    let userData = await insertUsuario(infoUsuario)
    
    console.log(userData)
    //Usuario existente
    // if (userData == 0) return { msg: "¡Este Usuario ya existe pruebe con un Usuario distinto!" }
    // //Usuario registrado correctamente
    // if (userData == 1) return { msg: "¡Se ha registrado el Usuario con éxito!" }
}

export {
    _serviceAutenticasUsuario, _serviceRegistrarUsuario
}