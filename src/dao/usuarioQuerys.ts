//Registro nuevo usuario
export const queryInsertNewUsuario = `INSERT INTO fundacion.usuarios(usuario, contrasena) VALUES ($1, $2);`
export const queryGetNewUser = `SELECT * FROM fundacion.usuarios WHERE usuario=$1`

//Login
export const queryGetUsuarioLogin = `SELECT * FROM fundacion.usuarios WHERE usuario=$1 AND contrasena=$2`
export const queryUpdateToken = `UPDATE fundacion.usuarios SET token=$1 WHERE id_usuario=$2;`
