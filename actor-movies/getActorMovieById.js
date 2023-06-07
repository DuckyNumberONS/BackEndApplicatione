const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/getActorMovie/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM MoviesApp.ActorMovie WHERE idActorMovie = ${id}`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (results.length === 0) {
      res.status(404).json({ error: `ActorMovie with id ${id} not found` });
    } else {
      res.json(results[0]);
    }
  });
});

module.exports = router;
