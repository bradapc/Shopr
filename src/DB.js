const { Client } = pkg;
const {Pool} = require('pg');
require('dotenv').config();
const DB = async () => {
  const client = new Client({
        user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password:process.env.DB_p,
    ports:process.env.PORTS
  });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL database!');
    // Example query
    const res = await client.query('SELECT NOW()');
    console.log('Current time:', res.rows[0]);
  } catch (err) {
    console.error('Error connecting to the database:', err);
  } finally {
    await client.end();
  }
};

modules.export = DB;
