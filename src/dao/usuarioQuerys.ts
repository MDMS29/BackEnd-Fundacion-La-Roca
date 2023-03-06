//Registro nuevo usuario
export const queryInsertNewUsuario = `INSERT INTO usuarios(nombre, apellido, tipo_ident, n_identificacion, tipo_usuario, password) VALUES (?, ?, ?, ?, ?, ?);`
export const queryGetNewUser = `SELECT * FROM usuarios WHERE n_identificacion=?`

//Login
export const queryGetUsuarioLogin = `SELECT * FROM usuarios WHERE n_identificacion=? AND estado='A'`
export const queryUpdateToken = `UPDATE usuarios SET token=? WHERE idusuario=?;`
