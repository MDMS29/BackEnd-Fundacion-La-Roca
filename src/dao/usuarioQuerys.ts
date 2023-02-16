export const queryGetUsuario = `SELECT * FROM fundacion.usuarios WHERE usuario=$1 AND contrasena=$2;`

export const queryUpdateToken = `UPDATE fundacion.usuarios SET token=$1 WHERE id_usuario=$2;`

export const consultarUsuarios = 'SELECT * FROM fundacion.usuarios';