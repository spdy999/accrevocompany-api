var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'1666',
database:'accrevocompany'
});


module.exports=connection;