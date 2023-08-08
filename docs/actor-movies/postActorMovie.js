const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/postActorMovie", (req, res) => {
  const { firstName, lastName, story, imgActorMovie } = req.body;

  if (!firstName) {
    res.status(400).json({ error: "Missing required firstName" });
    return;
  }
  if (!lastName) {
    res.status(400).json({ error: "Missing required lastName" });
    return;
  }
  if (!story) {
    res.status(400).json({ error: "Missing required story" });
    return;
  }
  if (!imgActorMovie) {
    res.status(400).json({ error: "Missing required imgActorMoviecol" });
    return;
  }

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
});

module.exports = router;
