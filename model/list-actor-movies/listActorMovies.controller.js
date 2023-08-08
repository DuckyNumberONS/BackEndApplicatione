const listActorMoviesSevieces = require("./listActorMovies.service");

module.exports.listActorMoviesDataById = async (req, res, next) => {
  const id = req.params.id;
  const result = await listActorMoviesSevieces.dataListActorById(res, id);
};

module.exports.postActorDataMovies = async (req, res, next) => {
  const actorMovieData = req.body;
  const result = await listActorMoviesSevieces.postDataListActor(
    res,
    actorMovieData
  );
};

module.exports.listActorMoviesData = async (req, res, next) => {
  const result = await listActorMoviesSevieces.dataListActor(res);
};
