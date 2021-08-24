var mysql = require('mysql');
const config = require("./config/key");
var conn = mysql.createConnection({
    host     : config.host,  
    user     : config.user,  
    password : config.password,  
    database : config.database, 
}); 

conn.connect((err) => {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;

