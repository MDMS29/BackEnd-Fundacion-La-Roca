import pool from "../../config/db"
import { queryGetUsuario, queryUpdateToken, consultarUsuarios } from "../dao/usuarioQuerys"

const getUsuario = async (usuario: string, contrasena: string) => {
    try {
        const result = await pool.query(queryGetUsuario, [usuario, contrasena]);
        return result
    } catch (error) {
        console.log(error)
    }
};

const updateTokenUsuario = async (id: number, token: string) => {
    try {
        await pool.query(queryUpdateToken, [token, id]);
        return true;
    } catch (error) {
        throw new Error(`No se actualizo el token id: ${id}`);
        return false;
    }
};


// const consultarUsuarios = async () => {
//     try {
//         const result = await pool.query(consultarUsuarios);
//         return result.rows
//     } catch (error) {
//         console.log(error)
//     }
//     await pool.end()
// };

export { getUsuario, updateTokenUsuario }