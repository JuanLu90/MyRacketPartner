var express = require('express');
var router = express.Router();
const dbConn = require("../../config/db");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resourceeee');
});

/* GET users listing. */
router.get("/users", function(req, res, next) {
  dbConn.query("SELECT * FROM users", (err, rows) => {
    if (err) {
      res.status(400).send({ e: err.errno });
    } else {
      res.send(rows);
    }
  });
});

// CREATE A NEW USER
router.post("/users/newUser", (req, res) => {
  const data = req.body;
 console.log(data)
  dbConn.query("INSERT INTO users set ?", [data], (err, rows) => {
    if (err) {
      res.status(400).send({ e: err.errno });
    } else {
      res.send(data);
    }
  });
});


module.exports = router;
