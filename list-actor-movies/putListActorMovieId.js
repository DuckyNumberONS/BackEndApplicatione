const express = require("express");
const router = express.Router();
const db = require("../database");

router.put("/putListActorMovie/:id", (req, res) => {
  const data = req.body;

  if (!Array.isArray(data) || data.length === 0) {
    res.status(400).json({ error: `Missing or invalid data` });
    return;
  }

  const values = data.map(({ idActorMovie, idMovie }) => [
    idActorMovie,
    idMovie,
  ]);
  console.log(values);

  const sql = `
      UPDATE MoviesApp.ActorMovieList
      SET idActorMovie = ?
      WHERE idMovie = ?;
    `;

  values.forEach((params) => {
    db.query(sql, params, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(
          `Updated idActorMovie: ${params[0]} for idMovie: ${params[1]}`
        );
      }
    });
  });

  res.status(200).json({ message: "ActorMovieList updated successfully" });
});

module.exports = router;
