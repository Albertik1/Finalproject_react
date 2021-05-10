const mysql = require('mysql2');

// environment variable config
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'bb5b587dd02f27',
  password: 'b704a1f2',
  database: 'heroku_61f267996224c60',
  multipleStatements: true,
});

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    } else if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    } else if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    } else {
      console.error(err.message)
    }
  }

  if (connection){
    console.log('Connected to the MySQL server.');
    connection.release();
  }
});

module.exports = pool;
