const {Pool} = require('pg');
require('dotenv').config();
const pool = new Pool ({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password:process.env.DB_p,
    ports:process.env.PORTS
  });


module.exports = {
    query: (text, params) => pool.query(text, params),
    pool
};
