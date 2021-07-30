const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "overdraftprotection2021!",
    host: "localhost",
    port: 5432,
    database: "diary"
});

module.exports = pool;