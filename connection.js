const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: 'root',
  password: "root",
  port: 3306,
  database: 'teros',
});

module.exports = connection;