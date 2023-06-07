const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/getmovies", (req, res) => {
  const sql = "SELECT * FROM MoviesApp.Movie;";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
