const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/getActorMovie", (req, res) => {
  const sql = "SELECT * FROM MoviesApp.ActorMovie;";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
