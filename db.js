const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "bonantagon",
    host: "localhost",
    port: 5432,
    database: "campfire"
});

module.exports = pool;