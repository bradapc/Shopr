const {Pool} = require('pg');
require('dotenv').config();
const pool = new Pool ({
    user: process.env.DB_USER,
    host: 'db-postgresql-nyc3-42107-do-user-23698589-0.g.db.ondigitalocean.com',
    database: process.env.DATABASE,
    password:process.env.DB_p,
    ports:process.env.PORTS
  });


module.exports = {
    query: (text, params) => pool.query(text, params),
    pool
};
