const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/postListCategory", (req, res) => {
  const listCategoryData = req.body;

  if (!Array.isArray(listCategoryData) || listCategoryData.length === 0) {
    res.status(400).json({ error: "Missing or invalid listCategoryData" });
    return;
  }

  const values = listCategoryData.map(
    ({ idMovie, idMovieGenre, idCategory }) => [
      idMovie,
      idMovieGenre,
      idCategory,
    ]
  );

  const sql = `INSERT INTO MoviesApp.CategoryList (idMovie, idMovieGenre, idCategory) 
  VALUES ?`;

  db.query(sql, [values], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "CategoryList added successfully!" });
    }
  });
});

module.exports = router;
