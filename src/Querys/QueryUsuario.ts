import connection from "../../config/db"
import { queryGetUsuarioLogin, queryInsertNewUsuario, queryGetNewUser, queryUpdateToken } from "../dao/usuarioQuerys"
import { IUsuario } from "../interfaces/UsuarioInterface";

let bcrypt = require('bcrypt');

const insertUsuario = async (infoUsuario: IUsuario) => {

    const { nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasena }: IUsuario = infoUsuario
    try {

        let res: number

        connection.query(queryGetNewUser, [nIdent], (result) => {
            if (result) {
                return 1
            }
        });

        console.log(res)

        return
        //Hashed de contraseña
        const salt = await bcrypt.genSalt(10);
        const contrasenaHash = await bcrypt.hash(contrasena, salt)

        if (contrasenaHash.length == 0) return 1
        let ENU = 'A'
        await connection.query(queryInsertNewUsuario, [nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasenaHash, ENU])
        return 1

    } catch (error) {
        return new Error(`No se inserto el usuario: ${nIdent}`);
    }
}

const getUsuarioLogin = async (usuario: string, contrasena: string) => {
    console.log(usuario + " " + contrasena)
    try {
        const result = await connection.query(queryGetUsuarioLogin, [usuario, contrasena]);

        if (result.rows[0].includes([])) return false


        console.log(result)
        const check = await bcrypt.compare(contrasena, result.rows[0].contrasena)
        console.log(check)

        return
        // console.log(result)
        // return result

    } catch (error) {
        return new Error(`No se consulto el usuario: ${usuario}`);
    }
    await connection.end()
};

const updateTokenUsuario = async (id: number, token: string) => {
    try {
        await connection.query(queryUpdateToken, [token, id]);
        return true;
    } catch (error) {
        return new Error(`No se actualizo el token id: ${id}`);
    }
};

export {
    getUsuarioLogin,
    updateTokenUsuario,
    insertUsuario
}