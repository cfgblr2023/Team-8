const express = require("express");
const menteeController = require("./../controllers/menteeController");

const router = express.Router();

router
  .route("/")
  .post(menteeController.createMentee)
  .get(menteeController.getAllMentee);

router.route("/:id").get(menteeController.getMentee);

module.exports = router;
