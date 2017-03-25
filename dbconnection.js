var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'1666',
database:'accrevocompany',
multipleStatements: true,
dateStrings:true
});


module.exports=connection;