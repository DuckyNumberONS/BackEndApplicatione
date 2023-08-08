const moviesSevieces = require("./movies.service");

module.exports.moviesData = async (req, res, next) => {
  const result = await moviesSevieces.dataMovies(res);
};

module.exports.moviesDataId = async (req, res, next) => {
  const id = req.params.id;
  const result = await moviesSevieces.dataMoviesId(id, res);
};

module.exports.postData = async (req, res, next) => {
  const {
    idMovie,
    title,
    description,
    bestMovies,
    imgThumbnail,
    imgBackground,
    movie,
    trailer,
  } = req.body;

  const result = await moviesSevieces.postDataMovies(
    res,
    idMovie,
    title,
    description,
    bestMovies,
    imgThumbnail,
    imgBackground,
    movie,
    trailer
  );
};

module.exports.bestMoviesData = async (req, res, next) => {
  const result = await moviesSevieces.dataBestMovies(res);
};

module.exports.putDescriptionMoviesById = async (req, res, next) => {
  const id = req.params.id;
  const { description } = req.body;
  const result = await moviesSevieces.putDescriptionMoviesById(
    res,
    description,
    id
  );
};

module.exports.putTitleMoviesById = async (req, res, next) => {
  const id = req.params.id;
  const { title } = req.body;
  const result = await moviesSevieces.putTitleMoviesById(res, title, id);
};

module.exports.putThumbnailMoviesById = async (req, res, next) => {
  const id = req.params.id;
  const imgThumbnail = req.body;
  const result = await moviesSevieces.putThumbnailMoviesById(
    res,
    imgThumbnail,
    id
  );
};
