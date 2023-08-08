const db = require("../../database");

module.exports.dataCategory = async (res) => {
  const sql = "SELECT * FROM MoviesApp.Category;";
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};
