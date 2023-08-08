const express = require("express");
const router = express.Router();
const moviesController = require("../model/movies/movies.controller");

router.get("/getmovies", moviesController.moviesData);
router.get("/getmovies/:id", moviesController.moviesDataId);
router.get("/getbestmovies", moviesController.bestMoviesData);
router.post("/postmovies", moviesController.postData);
router.put("/putTitleMovies/:id", moviesController.putTitleMoviesById);
router.put(
  "/putThumbnailMoviesById/:id",
  moviesController.putThumbnailMoviesById
);
router.put(
  "/putDescriptionMovies/:id",
  moviesController.putDescriptionMoviesById
);

module.exports = router;
