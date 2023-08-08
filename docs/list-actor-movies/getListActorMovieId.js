const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/getListActorMovie/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT MoviesApp.ActorMovie.idActorMovie,MoviesApp.ActorMovie.firstName,MoviesApp.ActorMovie.lastName,MoviesApp.ActorMovie.imgActorMovie FROM MoviesApp.ActorMovieList JOIN MoviesApp.Movie ON MoviesApp.ActorMovieList.idMovie = MoviesApp.Movie.idMovie JOIN MoviesApp.ActorMovie ON MoviesApp.ActorMovieList.idActorMovie = MoviesApp.ActorMovie.idActorMovie AND MoviesApp.ActorMovieList.idMovie = ${id};`;

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (results.length === 0) {
      res.status(404).json({ error: `ActorMovie with id ${id} not found` });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
