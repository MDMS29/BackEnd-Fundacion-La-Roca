import express, { Response, Request } from 'express';

import { registrarPaciente } from '../controller/pacienteController';

const router = express.Router();

router.post('/registrarPaciente', registrarPaciente)

export default router