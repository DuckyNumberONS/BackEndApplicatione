const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// ActorMovie
const getActorMovie = require("./actor-movies/getActorMovie");
const getActorMovieById = require("./actor-movies/getActorMovieById");
const getActorMovieByName = require("./actor-movies/getActorMovieByName");
const postActorMovie = require("./actor-movies/postActorMovie");

// Movies
const getMovies = require("./movies/getMovies");
const getMoviesById = require("./movies/getMoviesById");
const postMovies = require("./movies/postMovies");
const putTitleMoviesById = require("./movies/putTitleMoviesById");
const putDescriptionMovies = require("./movies/putDescriptionMoviesById");
const getMoviesCategory = require("./movies/getMoviesCategory");

// ListActorMovie
const getListActorMovieId = require("./list-actor-movies/getListActorMovieId");
const postListActorMovie = require("./list-actor-movies/postListActorMovie");
const putListActorMovieId = require("./list-actor-movies/putListActorMovieId");

//Category
const getCategory = require("./category/getCategory");

// MovieGenre
const getMovieGenre = require("./movie-genre/getMovieGenre");

// CategoryList
const getCategoryList = require("./category-list/getCategoryList");
const getCategoryListId = require("./category-list/getCategoryListId");
const postListCategory = require("./category-list/postCategoryList");

const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  "/api",
  postMovies,
  getMovies,
  getMoviesById,
  putTitleMoviesById,
  putDescriptionMovies,
  getMoviesCategory,
  getActorMovie,
  getActorMovieById,
  getActorMovieByName,
  postActorMovie,
  getListActorMovieId,
  postListActorMovie,
  putListActorMovieId,
  getCategory,
  getMovieGenre,
  getCategoryList,
  getCategoryListId,
  postListCategory
);
// app.use("/api", getMovies);
// app.use("/api", getMoviesById);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
