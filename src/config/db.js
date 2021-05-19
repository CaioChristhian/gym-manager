const { Pool } = require("pg")

module.exports = new Pool ({
    user: 'postgres',
    password: 'kronoscaio',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'
})