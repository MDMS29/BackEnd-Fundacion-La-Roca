import express, { Response, Request } from 'express';

import { registrarPaciente, obtenerPacientes } from '../controller/pacienteController';

const router = express.Router();

router.post('/registrarPaciente', registrarPaciente)
router.get('/obtenerPacientes', obtenerPacientes)

export default router