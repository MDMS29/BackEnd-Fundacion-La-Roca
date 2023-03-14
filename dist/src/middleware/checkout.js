"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../config/db"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuarioQuerys_1 = require("../dao/usuarioQuerys");
let mysql = require('mysql');
const checkout = (req, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req;
    let token;
    if (authorization && authorization.startsWith("Bearer")) {
        token = authorization.split(' ')[1];
        const { id } = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        let queryGet = mysql.format(usuarioQuerys_1.queryPerilUser, [id]);
        yield db_1.default.query(queryGet, (err, result) => {
            if (err)
                throw err;
            callback(result[0]);
        });
    }
    if (!token) {
        const error = new Error('Token no valido!');
        callback({ message: error.message });
    }
});
exports.default = checkout;
