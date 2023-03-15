import connection from '../../config/db';
import { JwtPayload, BDuser } from '../interfaces/UsuarioInterface';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { queryPerilUser } from '../dao/usuarioQuerys';

interface RequestUsuario extends Request {
    usuario?: BDuser
}

let mysql = require('mysql')

const checkout = async (req, callback) => {

    const { authorization } = req

    let token: any

    if (authorization && authorization.startsWith("Bearer")) {

        token = authorization.split(' ')[1]
        const { id } = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload
        let queryGet = mysql.format(queryPerilUser, [id])
        await connection.query(queryGet, (err, result) => {
            if (err) throw err
            callback(result[0])
        })
    }

    if (!token) {
        const error = new Error('Token no valido!')
        callback({ message: error.message })
    }
}

export default checkout;