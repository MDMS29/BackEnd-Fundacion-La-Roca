"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fundacion_la_roca'
});
exports.default = connection;
