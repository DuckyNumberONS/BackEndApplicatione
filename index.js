const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

// const route = require("./routes/index");
const route = require("./routes/index");

// ActorMovie

// Movies

// ListActorMovie
// const getListActorMovieId = require("./list-actor-movies/getListActorMovieId");
// const postListActorMovie = require("./list-actor-movies/postListActorMovie");
// const putListActorMovieId = require("./list-actor-movies/putListActorMovieId");

//Category
// const getCategory = require("./category/getCategory");

// MovieGenre
// const getMovieGenre = require("./movie-genre/getMovieGenre");

// CategoryList
// const getCategoryList = require("./category-list/getCategoryList");
// const getCategoryListId = require("./category-list/getCategoryListId");
// const postListCategory = require("./category-list/postCategoryList");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  "/api",
  // getListActorMovieId,
  // postListActorMovie,
  // putListActorMovieId,
  // getMovieGenre,
  // getCategoryList,
  // getCategoryListId,
  // postListCategory,
  route
);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
