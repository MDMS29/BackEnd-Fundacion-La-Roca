const { Pool } = require('pg')

const pool = new Pool({
    user: `postgres`,
    host: `localhost`,
    database : `db-fundacion-roca`,
    password: `1130`,
    port: process.env.PGPORT,
})

pool.connect()

export default pool