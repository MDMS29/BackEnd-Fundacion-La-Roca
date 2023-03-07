import express, { Response, Request } from 'express';

import checkout from '../middleware/checkout';

import { autenticarUsuario, perfil, registrarUsuario, } from '../controller/usuarioController';

const router = express.Router();

router.post('/login', autenticarUsuario)
router.post('/registrarUsuario', registrarUsuario)
router.get('/perfil',  perfil)

export default router