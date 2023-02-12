import express from 'express';
import usuarioRoutes from './src/routes/usuarioRoutes'

const app = express();

app.use(express.json())

app.use('/api/usuario', usuarioRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});