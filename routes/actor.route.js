const express = require("express");
const router = express.Router();
const actorController = require("../model/actor/actor.controller");

router.get("/getActorMovie", actorController.actorData);
router.get("/getActorMovie/:id", actorController.actorDataById);
router.get(
  "/getActorMovieByName/:lastname",
  actorController.actorDataByLastname
);
router.get("/postActorMovie", actorController.postData);

module.exports = router;
