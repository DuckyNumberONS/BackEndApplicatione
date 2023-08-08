const express = require("express");
const router = express.Router();
const listActorMoviesController = require("../model/list-actor-movies/listActorMovies.controller");

router.get("/getListActorMovie", listActorMoviesController.listActorMoviesData);

router.get(
  "/getListActorMovieById/:id",
  listActorMoviesController.listActorMoviesDataById
);
router.get(
  "/postListActorMovie",
  listActorMoviesController.postActorDataMovies
);
router.get(
  "/postListActorMovie",
  listActorMoviesController.postActorDataMovies
);

module.exports = router;
