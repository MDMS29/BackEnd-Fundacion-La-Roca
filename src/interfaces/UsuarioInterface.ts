export interface IUsuario{
    id?: number
    nombre?: string
    usuario?: string
    contrasena?: string
    token?: string
    msg?: string
}

export interface JwtPayload {
    id: string
}

export interface BDuser {
    rows?: object
}