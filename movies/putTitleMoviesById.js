const express = require("express");
const router = express.Router();
const db = require("../database");

router.put("/putTitleMovies/:id", (req, res) => {
  const idMovie = req.params.id;
  const { title } = req.body;

  if (!idMovie) {
    res.status(400).json({ error: `Missing required idMovie}` });
    return;
  }
  if (!title) {
    res.status(400).json({ error: "Missing required title" });
    return;
  }

  const sql = `
      UPDATE MoviesApp.Movie
      SET title = ?
      WHERE idMovie = ?;
    `;

  const values = [title, idMovie];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Change title successfully!" });
    }
  });
});

module.exports = router;
