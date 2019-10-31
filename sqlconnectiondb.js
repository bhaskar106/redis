var mysql = require('mysql');
var exports = module.exports = {};
module.exports = sqlconnection();

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'bhaskar',
  password: '123456',
  database: 'mysql',
});

connection.connect(function(err) {
  if (err){
    return console.error('error: ' + err.message);
  }
  console.log("Connected!");
});

function sqlconnection(){
function create(key,callback){
connection.query(key, function (err, result) {
  if (err){
     return console.error('error: ' +err.message);
   }
  console.log(JSON.stringify(result));
  callback(result);
  //process.exit(0);
  });
}
return{create};
}

