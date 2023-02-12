import pool from "../../config/db"
import { queryGetUsuario, queryUpdateToken } from "../dao/usuarioQuerys"

async function getUsuario(usuario: string, contraseña: string) {
    try {
        const result = await pool.query(queryGetUsuario, [usuario, contraseña])
        return result.rows[0]
    } catch (error) {
        console.log(error)
    }
    await pool.end()
}

async function updateTokenUsuario(id: number, token: string) {
    try {
        await pool.query(queryUpdateToken, [token, id])
        return 1
    } catch (error) {
        console.log(error)
    }
    await pool.end()
}

export { getUsuario, updateTokenUsuario }