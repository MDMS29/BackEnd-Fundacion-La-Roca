//Registro nuevo usuario
export const queryInsertNewUsuario = `INSERT INTO usuarios(nombre, apellido, tipo_ident, n_identificacion, password, tipo, estado) VALUES (?, ?, ?, ?, ?, ?, ?);`
export const queryGetNewUser = `SELECT * FROM usuarios WHERE n_identificacion= ?`

//Login
export const queryGetUsuarioLogin = `SELECT * FROM usuarios WHERE usuario=$1 AND contrasena=$2`
export const queryUpdateToken = `UPDATE usuarios SET token=$1 WHERE id_usuario=$2;`
