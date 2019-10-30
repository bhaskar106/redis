var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'mysql',
});

connection.connect(function(err) {
  if (err){
     console.log('Error while connecting');
   return;
   }
  console.log("Connected!");
});

