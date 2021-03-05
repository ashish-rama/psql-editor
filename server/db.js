const Pool = require("pg").Pool;

/*const pool = new Pool({
    user: "postgres",
    password: "pass", //set to local postgres superuser pass
    host:"localhost",
    port: 5432,
    database: "dvdrental" //set to database
});*/

// connection to elephantSQL database
const pool = new Pool({
    user: "vxgoyctm",
    password: "iOxbueFdp9OG4zqV8yW3LgrBZkjp1Ryi",
    host:"otto.db.elephantsql.com",
    port: 5432,
    database: "vxgoyctm",
});

module.exports = pool;
