import express from 'express';
import usuarioRoutes from './src/routes/usuarioRoutes'

import cors from 'cors'
import dotenv from 'dotenv'

const app = express();

dotenv.config()
app.use(express.json())

const whiteList = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function (origin , callBack ) {
        if (whiteList.includes(origin)) {
            callBack(null, true)
        } else {
            callBack(new Error("Error de Cors"))
        }
    }
}

app.use(cors(corsOptions))

app.use('/api/usuario', usuarioRoutes);

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
