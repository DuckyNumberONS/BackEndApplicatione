const actorSevieces = require("./actor.service");

module.exports.actorData = async (req, res, next) => {
  const result = await actorSevieces.dataActor(res);
};

module.exports.actorDataById = async (req, res, next) => {
  const id = req.params.id;
  const result = await actorSevieces.dataActorById(res, id);
};
module.exports.actorDataByLastname = async (req, res, next) => {
  const lastname = req.params.lastname;
  const result = await actorSevieces.dataActorByLastName(res, lastname);
};
module.exports.postData = async (req, res, next) => {
  const result = await actorSevieces.postActorMovie(res);
};
