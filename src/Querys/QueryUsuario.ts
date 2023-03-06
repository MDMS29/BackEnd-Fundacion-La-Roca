import connection from "../../config/db"
import { queryGetUsuarioLogin, queryInsertNewUsuario, queryGetNewUser, queryUpdateToken } from "../dao/usuarioQuerys"
import { IUsuario } from "../interfaces/UsuarioInterface";

let bcrypt = require('bcrypt');
const mysql = require('mysql')

const insertUsuario = (connection, data: IUsuario, callback) => {
    const { nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasena }: IUsuario = data.infoUsuario
    let queryGet = mysql.format(queryGetNewUser, [nIdent])
    connection.query(queryGet, async function (err, result) {
        if (err) throw err
        if (result.length == 0) {
            const salt = await bcrypt.genSalt(10);
            const contrasenaHash = await bcrypt.hash(contrasena, salt)
            let query = mysql.format(queryInsertNewUsuario, [nombre, apellido, tipoIdent, nIdent, tipoUsuario, contrasenaHash])
            connection.query(query, function (err, result) {
                if (err) throw err
                callback(result)
            })
        }
        else {
            callback(0)
        }
    })
}

const getUsuarioLogin = (connection, data: IUsuario, callback) => {

    const { nIdent, contrasena } = data

    let queryGet = mysql.format(queryGetUsuarioLogin, [nIdent])

    connection.query(queryGet, async function (err, result) {
        if (err) throw err
        const check = await bcrypt.compare(contrasena, result[0].password)
        if (check) {
            callback(result[0])
        } else {
            callback(0)
        }
    });
};

const updateTokenUsuario = async (connection, data, callback) => {
    const { id, token } = data
    let queryUpdate = mysql.format(queryUpdateToken, [token, id])

    connection.query(queryUpdate, (err, result) => {
        if(err) throw err
        callback(result)
    });
};

export {
    getUsuarioLogin,
    updateTokenUsuario,
    insertUsuario
}