import jwt from 'jsonwebtoken';

const generarJWT = (id : number) => {
    //Genera un JSON web Token.
    console.log(id)
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d', });
}

export default generarJWT