import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { JwtPayload, BDuser } from '../interfaces/UsuarioInterface';
import pool from '../../config/db';

interface RequestUsuario extends Request{
    usuario? : BDuser
}

const checkout = async (req: RequestUsuario, res: Response, next: NextFunction) => {

    let token: any
    //Si se realiza la autorizacion y si hay un token.
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(' ')[1] //Se toma el token y se cambia de posicion a 1.
            
            const { id } = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload
            
            //Busca al usuario por id.
            req.usuario = await pool.query('SELECT * FROM fundacion.usuarios WHERE id_usuario=$1', [id])
            // console.log(req)

            return next()

        } catch (error) {
            return res.status(404).json({ message: 'Hubo un error!' });
        }
    }

    if (!token) {
        const error = new Error('Token no valido!')
        return res.status(401).json({ message: error.message })
    }
}

export default checkout;