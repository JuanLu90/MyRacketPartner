const mysql = require("mysql");
//create connection to dabase
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ASDFasdf1234",
  database: "myracketpartner"
});

//connect to database
dbConn.connect(err => {
  if (err) throw err;
});

console.log("Conected to MyRacketPartner database");

//export db to have it available
module.exports = dbConn;
