const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Duc@nh2121",
  database: "MoviesApp",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

module.exports = connection;
