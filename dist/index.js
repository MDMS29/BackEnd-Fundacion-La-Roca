"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioRoutes_1 = __importDefault(require("./src/routes/usuarioRoutes"));
const app = (0, express_1.default)();
// const whiteList = [process.env.FRONTEND_URL]
// const corsOptions = {
//     origin: function (origin, callBack) {
//         if (whiteList.includes(origin)) {
//             callBack(null, true)
//         } else {
//             callBack(new Error("Error de Cors"))
//         }
//     }
// }
// app.use(cors(corsOptions))
app.use(express_1.default.json());
app.use('/api/usuario', usuarioRoutes_1.default);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
