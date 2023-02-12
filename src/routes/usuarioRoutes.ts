import express, { Response, Request } from 'express';
import pool from '../../config/db';

import { autenticarUsuario, consultarUsuarios } from '../controller/usuarioController';

const router = express.Router();

router.post('/login', autenticarUsuario)

router.get('/login', consultarUsuarios)

export default router