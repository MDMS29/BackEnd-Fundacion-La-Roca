"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioRoutes_1 = __importDefault(require("./src/routes/usuarioRoutes"));
const pacientesRoutes_1 = __importDefault(require("./src/routes/pacientesRoutes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function (origin, callBack) {
        if (whiteList.includes(origin)) {
            callBack(null, true);
        }
        else {
            callBack(new Error("Error de Cors"));
        }
    }
};
app.use((0, cors_1.default)(corsOptions));
app.use('/api/usuario', usuarioRoutes_1.default);
app.use('/api/paciente', pacientesRoutes_1.default);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
