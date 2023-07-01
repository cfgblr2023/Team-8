const express = require("express");
const mentorController = require("./../controllers/mentorController");
const mentorAuthController = require("./../controllers/mentorAuthController");

const router = express.Router();

router.post("/login", mentorAuthController.login);

router
  .route("/")
  .post(mentorController.createMentor)
  .get(mentorController.getAllMentor);

router.route("/:id").get(mentorController.getMentor);

module.exports = router;
