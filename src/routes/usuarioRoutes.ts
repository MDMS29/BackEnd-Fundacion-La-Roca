import express, { Response, Request } from 'express';

import checkout from '../middleware/checkout';

import { autenticarUsuario, perfil } from '../controller/usuarioController';

const router = express.Router();

router.post('/login', autenticarUsuario)

router.get('/perfil', checkout, perfil)

export default router