const { Pool } = require('pg')

const pool = new Pool({
    user: `postgres`,
    host: `localhost`,
    database : `db_fundacion-roca`,
    password: `12345`,
    port: process.env.PGPORT,
})

pool.connect()

export default pool