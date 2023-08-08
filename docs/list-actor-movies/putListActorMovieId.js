const express = require("express");
const router = express.Router();
const db = require("../database");

router.put("/putListActorMovie/:id", (req, res) => {
  const data = req.body;

  if (!Array.isArray(data) || data.length === 0) {
    res.status(400).json({ error: `Missing or invalid data` });
    return;
  }

  const sql = `
      UPDATE MoviesApp.ActorMovieList
      SET idActorMovie = ?
      WHERE idMovie = ?;

    `;

  const values = data.map(({ idMovie, idActorMovie }) => [
    idMovie,
    idActorMovie,
  ]);
  db.query(sql, [values], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Movies Actor edited successfully!" });
    }
  });
});

module.exports = router;
