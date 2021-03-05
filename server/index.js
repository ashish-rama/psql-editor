const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const sqlFormatter = require('sql-formatter');


// run server on port 5000
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());


// get postgresql server tables
var pgSchemas = []; // to be used to get expanded schema tree

app.get('/psqlEditor/tables', async(req, res) => {
    try {
        const tables = await pool.query('SELECT tablename FROM pg_tables WHERE schemaname=\'public\'');
        res.json(tables.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// send a sql query
app.post('/psqlEditor/query', async(req, res) => {
    try {
        // get the raw query text from the editor
        const { queryRaw } = req.body;
        // parse the text into a query
        const data = {
            query: sqlFormatter.format(queryRaw),
        };
        //perform query and return results
        const performQuery = await pool.query(data.query);
        res.json(performQuery.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});