const express = require("express");
const multer = require("multer");

const router = express.Router();
const db = require("../database");

router.put("/putThumbnailMoviesById/:id", (req, res) => {
  const idMovie = req.params.id;
  const imgThumbnail = req.body;

  if (!idMovie) {
    res.status(400).json({ error: `Missing required idMovie}` });
    return;
  }
  if (!imgThumbnail) {
    res.status(400).json({ error: "Missing required imgThumbnail" });
    return;
  }

  const sql = `
      UPDATE MoviesApp.Movie
      SET imgThumbnail = ?
      WHERE idMovie = ?;
    `;

  const values = [imgThumbnail, idMovie];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Change imgThumbnail successfully!" });
    }
  });
});

module.exports = router;
