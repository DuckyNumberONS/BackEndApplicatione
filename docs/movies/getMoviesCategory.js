const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/getmoviescategory", (req, res) => {
  const sql = `SELECT
  Category.idCategory,
  Category.Title AS categoryTitle,
  Category.colorCategory,
  Movie.title,
  Movie.idMovie,
  Movie.description,
  Movie.bestMovies,
  Movie.imgThumbnail,
  Movie.imgBackground,
  Movie.movie,
  Movie.trailer
FROM
  CategoryList
  JOIN Movie ON CategoryList.idMovie = Movie.idMovie
  JOIN Category ON CategoryList.idCategory = Category.idCategory;`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
