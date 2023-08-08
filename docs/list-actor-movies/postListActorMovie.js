const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/postListActorMovie", (req, res) => {
  const actorMovieData = req.body;

  if (!Array.isArray(actorMovieData) || actorMovieData.length === 0) {
    res.status(400).json({ error: "Missing or invalid actorMovieData" });
    return;
  }

  const values = actorMovieData.map(({ idMovie, idActorMovie }) => [
    idMovie,
    idActorMovie,
  ]);

  const sql = `INSERT INTO MoviesApp.ActorMovieList (idMovie, idActorMovie) 
  VALUES ?`;

  db.query(sql, [values], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Movies Actor added successfully!" });
    }
  });
});

module.exports = router;
