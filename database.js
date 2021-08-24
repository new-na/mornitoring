var mysql = require('mysql');
var conn = mysql.createConnection({
    host     : 'mun3924.cafe24.com',  
    user     : 'mun3924',  
    password : 'anstn3924',  
    database : 'mun3924' 
}); 

conn.connect((err) => {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = conn;

