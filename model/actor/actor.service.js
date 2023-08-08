const db = require("../../database");

module.exports.dataActor = async (res) => {
  const sql = "SELECT * FROM MoviesApp.ActorMovie;";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

module.exports.dataActorById = async (res, id) => {
  const sql = `SELECT * FROM MoviesApp.ActorMovie WHERE idActorMovie = ${id}`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (results.length === 0) {
      res.status(404).json({ error: `ActorMovie with id ${id} not found` });
    } else {
      res.json(results[0]);
    }
  });
};

module.exports.dataActorByLastName = async (res, lastname) => {
  let sql = `SELECT * FROM MoviesApp.ActorMovie WHERE lastName Like "${lastname}%"`;
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

module.exports.postActorMovie = async (
  res,
  firstName,
  lastName,
  story,
  imgActorMovie
) => {
  const sql = `INSERT INTO MoviesApp.ActorMovie (firstName, lastName, story, imgActorMovie) 
VALUES (?, ?, ?, ?)`;
  const values = [firstName, lastName, story, imgActorMovie];

  db.query(sql, values, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "MovieActor added successfully!" });
    }
  });
};
