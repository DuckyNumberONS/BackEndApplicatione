const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/postmovies", (req, res) => {
  const {
    idMovie,
    title,
    description,
    bestMovies,
    imgThumbnail,
    imgBackground,
    movie,
    trailer,
  } = req.body;

  if (!idMovie) {
    res.status(400).json({ error: "Missing required title" });
    return;
  }
  if (!title) {
    res.status(400).json({ error: "Missing required title" });
    return;
  }

  if (!description) {
    res.status(400).json({ error: "Missing required description" });
    return;
  }

  if (!imgThumbnail) {
    res.status(400).json({ error: "Missing required imgThumbnail" });
    return;
  }
  if (!imgBackground) {
    res.status(400).json({ error: "Missing required imgBackground" });
    return;
  }
  if (!movie) {
    res.status(400).json({ error: "Missing required movie" });
    return;
  }
  if (!trailer) {
    res.status(400).json({ error: "Missing required trailer" });
    return;
  }

  const sql = `INSERT INTO MoviesApp.Movie (idMovie,title, description, bestMovies, imgThumbnail, imgBackground, movie, trailer) 
  VALUES (? , ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    idMovie,
    title,
    description,
    bestMovies,
    imgThumbnail,
    imgBackground,
    movie,
    trailer,
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Movie added successfully!" });
    }
  });
});

module.exports = router;
