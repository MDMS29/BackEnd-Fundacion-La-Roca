import express, { Response, Request } from 'express';

import checkout from '../middleware/checkout';

import { autenticarUsuario, perfil, registrarUsuario, verUsuarios } from '../controller/usuarioController';

const router = express.Router();

router.post('/login', autenticarUsuario)
router.post('/registrarUsuario', registrarUsuario)

router.get('/ver-usuarios', verUsuarios)

router.get('/perfil', checkout, perfil)

export default router