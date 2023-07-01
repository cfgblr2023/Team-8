const express = require("express");
const menteeController = require("./../controllers/menteeController");

const router = express.Router();

router.route("/").post(menteeController.createMentee);

router.route("/:id").get(menteeController.getMentee);

module.exports = router;
