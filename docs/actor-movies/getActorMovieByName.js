const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/getActorMovieByName/:lastname", (req, res) => {
  const lastname = req.params.lastname;
  let sql = `SELECT * FROM MoviesApp.ActorMovie WHERE lastName Like "${lastname}%"`;

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
