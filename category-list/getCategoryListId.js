const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/getCategoryList/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT
  MovieGenre.idMovieGenre,
  MovieGenre.Title AS genreTitle,
  MovieGenre.colorGenre,
  Category.idCategory,
  Category.Title AS categoryTitle,
  Category.colorCategory
FROM
  CategoryList
  JOIN Movie ON CategoryList.idMovie = Movie.idMovie
  JOIN MovieGenre ON CategoryList.idMovieGenre = MovieGenre.idMovieGenre
  JOIN Category ON CategoryList.idCategory = Category.idCategory
WHERE
  CategoryList.idMovie = ${id};`;

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
