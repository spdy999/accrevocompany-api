var mysql = require('mysql');
var connection = mysql.createPool({

    host: 'localhost',
    user: 'MYSQL_USERNAME',
    password: 'SQL_PASSWORD',
    database: 'MSQL_DATABASE_NAME',
    multipleStatements: true,
    dateStrings: true
});


module.exports = connection;