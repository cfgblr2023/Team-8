const express = require("express");
const mentorController = require("./../controllers/mentorController");

const router = express.Router();

router
  .route("/")
  .post(mentorController.createMentor)
  .get(mentorController.getAllMentor);

router.route("/:id").get(mentorController.getMentor);

module.exports = router;
