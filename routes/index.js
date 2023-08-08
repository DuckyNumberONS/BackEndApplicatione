const express = require("express");
const router = express.Router();

const actorMovie = require("./actor.route");
const movies = require("./movies.route");
const category = require("./category.route");
const listActorMovies = require("./list-actor-movies");
// Router
router.use("/actor-movie", actorMovie);
router.use("/movie", movies);
router.use("/category", category);
router.use("/list-actor-movies", listActorMovies);

module.exports = router;
