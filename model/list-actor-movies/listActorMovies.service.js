const db = require("../../database");

module.exports.dataListActor = async (res) => {
  const sql = `SELECT * FROM MoviesApp.ActorMovieList;`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

module.exports.dataListActorById = async (res, id) => {
  const sql = `SELECT MoviesApp.ActorMovie.idActorMovie,MoviesApp.ActorMovie.firstName,MoviesApp.ActorMovie.lastName,MoviesApp.ActorMovie.imgActorMovie FROM MoviesApp.ActorMovieList JOIN MoviesApp.Movie ON MoviesApp.ActorMovieList.idMovie = MoviesApp.Movie.idMovie JOIN MoviesApp.ActorMovie ON MoviesApp.ActorMovieList.idActorMovie = MoviesApp.ActorMovie.idActorMovie AND MoviesApp.ActorMovieList.idMovie = ${id};`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

module.exports.postDataListActor = async (res, actorMovieData) => {
  const sql = `INSERT INTO MoviesApp.ActorMovieList (idMovie, idActorMovie) 
  VALUES ?`;
  const values = actorMovieData.map(({ idMovie, idActorMovie }) => [
    idMovie,
    idActorMovie,
  ]);

  db.query(sql, [values], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Movies Actor added successfully!" });
    }
  });
};
