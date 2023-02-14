import express from 'express';
import usuarioRoutes from './src/routes/usuarioRoutes'

const app = express();

const whiteList = [process.env.FRONTEND_URL]

const corsOptions = {
    origin: function (origin, callBack) {
        if (whiteList.includes(origin)) {
            callBack(null, true)
        } else {
            callBack(new Error("Error de Cors"))
        }
    }
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/api/usuario', usuarioRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
