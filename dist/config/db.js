"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool } = require('pg');
const pool = new Pool({
    user: `postgres`,
    host: `localhost`,
    database: `db_fundacion-roca`,
    password: `1130266`,
    port: process.env.PGPORT,
});
pool.connect();
exports.default = pool;
