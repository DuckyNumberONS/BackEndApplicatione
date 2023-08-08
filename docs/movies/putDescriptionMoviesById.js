const express = require("express");
const router = express.Router();
const db = require("../database");

router.put("/putDescriptionMovies/:id", (req, res) => {
  const idMovie = req.params.id;
  const { description } = req.body;

  if (!idMovie) {
    res.status(400).json({ error: `Missing required idMovie}` });
    return;
  }
  if (!description) {
    res.status(400).json({ error: "Missing required description" });
    return;
  }

  const sql = `
      UPDATE MoviesApp.Movie
      SET description = ?
      WHERE idMovie = ?;
    `;

  const values = [description, idMovie];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Change description successfully!" });
    }
  });
});

module.exports = router;
