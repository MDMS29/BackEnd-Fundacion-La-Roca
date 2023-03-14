//Registro nuevo usuario
export const queryInsertNewPaciente = "INSERT INTO pacientes(tipoDocumento, identificacion, nombres, apellidos, fechaNacimiento, edad, sexo, direccion, eps, fechaIngreso) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"

export const queryGetPacientes = "SELECT * FROM pacientes WHERE estado = 'A'"