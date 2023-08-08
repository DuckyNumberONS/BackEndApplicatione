const db = require("../../database");

module.exports.dataMovies = async (res) => {
  const sql = "SELECT * FROM MoviesApp.Movie;";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

module.exports.dataMoviesId = async (id, res) => {
  const sql = `SELECT * FROM MoviesApp.Movie WHERE idMovie = ${id}`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (results.length === 0) {
      res.status(404).json({ error: `Movie with id ${id} not found` });
    } else {
      res.json(results[0]);
    }
  });
};

module.exports.postDataMovies = async (
  res,
  idMovie,
  title,
  description,
  bestMovies,
  imgThumbnail,
  imgBackground,
  movie,
  trailer
) => {
  const sql = `INSERT INTO MoviesApp.Movie (idMovie,title, description, bestMovies, imgThumbnail, imgBackground, movie, trailer) 
    VALUES (? , ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    idMovie,
    title,
    description,
    bestMovies,
    imgThumbnail,
    imgBackground,
    movie,
    trailer,
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Movie added successfully!" });
    }
  });
};

module.exports.dataBestMovies = async (res) => {
  const sql = `SELECT * FROM MoviesApp.Movie where Movie.bestMovies = 1 `;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

module.exports.putDescriptionMoviesById = async (res, description, id) => {
  const sql = `
  UPDATE MoviesApp.Movie
  SET description = ?
  WHERE idMovie = ?;
`;
  const values = [description, id];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Change description successfully!" });
    }
  });
};

module.exports.putTitleMoviesById = async (res, title, id) => {
  const sql = `
  UPDATE MoviesApp.Movie
  SET title = ?
  WHERE idMovie = ?;
`;
  const values = [title, id];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err.message, values });
    } else {
      res.status(201).json({ message: "Change title successfully!" });
    }
  });
};

module.exports.putThumbnailMoviesById = async (res, imgThumbnail, id) => {
  const sql = `
  UPDATE MoviesApp.Movie
  SET imgThumbnail = ?
  WHERE idMovie = ?;
`;
  const values = [imgThumbnail, id];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Change imgThumbnail successfully!" });
    }
  });
};
