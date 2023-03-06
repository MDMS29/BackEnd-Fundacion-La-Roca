"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._serviceRegistrarUsuario = exports._serviceAutenticasUsuario = void 0;
const QueryUsuario_1 = require("../Querys/QueryUsuario");
const _serviceAutenticasUsuario = (usuario, contrasena) => __awaiter(void 0, void 0, void 0, function* () {
    let userData = yield (0, QueryUsuario_1.getUsuarioLogin)(usuario, contrasena);
    //Validación de Datos 
    if (userData == false)
        return { msg: "¡Usuario o Contraseña son incorrectas!" };
    return;
    // const { id_usuario: id, usuario: user, contrasena: pass } = userData.rows[0];
    // // Generar JWT
    // if (id) {
    //     const token = jwt.sign({ id }, String(process.env.JWT_SECRET), { expiresIn: 86400 })
    //     const seActualizo = await updateTokenUsuario(id, token)
    //     if (seActualizo) {
    //         const objectUsuario: IUsuario = {
    //             id,
    //             nombre: user,
    //             token: token
    //         }
    //         return objectUsuario
    //     }
    // }
});
exports._serviceAutenticasUsuario = _serviceAutenticasUsuario;
const _serviceRegistrarUsuario = (infoUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    let userData = yield (0, QueryUsuario_1.insertUsuario)(infoUsuario);
    console.log(userData);
    //Usuario existente
    // if (userData == 0) return { msg: "¡Este Usuario ya existe pruebe con un Usuario distinto!" }
    // //Usuario registrado correctamente
    // if (userData == 1) return { msg: "¡Se ha registrado el Usuario con éxito!" }
});
exports._serviceRegistrarUsuario = _serviceRegistrarUsuario;
