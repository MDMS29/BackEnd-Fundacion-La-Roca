export interface IUsuario {
    id?: number
    nombre?: string
    apellido?: string
    tipoIdent?: string
    nIdent?: string
    contrasena?: string
    tipoUsuario?: string
    token?: string
    msg?: string
    infoUsuario? : object
}

export interface JwtPayload {
    id: string
}

export interface BDuser {
    rows?: object
}