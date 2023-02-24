import pool from "../../config/db"
import { queryGetUsuarioLogin, queryInsertNewUsuario, queryGetNewUser, queryUpdateToken } from "../dao/usuarioQuerys"

let bcrypt = require('bcrypt');

const insertUsuario = async (usuario: string, contrasena: string) => {
    try {
        const getUser = await pool.query(queryGetNewUser, [usuario])
        if (getUser.rows[0] != undefined) return 0

        //Hashed de contraseña
        const salt = await bcrypt.genSalt(10);
        const contrasenaHash = await bcrypt.hash(contrasena, salt)

        if (contrasenaHash.length == 0) return 1
    
        await pool.query(queryInsertNewUsuario, [usuario, contrasenaHash])
        return 1
    } catch (error) {
        return new Error(`No se inserto el usuario: ${usuario}`);
    }
}

const getUsuarioLogin = async (usuario: string, contrasena: string) => {
    console.log(usuario + " " + contrasena)
    try {
        const result = await pool.query(queryGetUsuarioLogin, [usuario, contrasena]);

        if(result.rows[0].includes([])) return false


        console.log(result)
        const check = await bcrypt.compare(contrasena, result.rows[0].contrasena)
        console.log(check) 

        return
        // console.log(result)
        // return result

    } catch (error) {
        return new Error(`No se consulto el usuario: ${usuario}`);
    }
    await pool.end()
};

const updateTokenUsuario = async (id: number, token: string) => {
    try {
        await pool.query(queryUpdateToken, [token, id]);
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