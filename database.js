const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: process.env.MYSQL_PASS,
    database: 'electron-test' 
})

function getConnection() {
    return connection
}

module.exports = {getConnection}