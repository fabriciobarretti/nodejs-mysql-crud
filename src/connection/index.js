const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    port: 3308,
    database: 'sakila',
    user: 'root',
    password: 'CRUD2023'
})

module.exports = connection;