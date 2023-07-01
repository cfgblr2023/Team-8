const express = require("express");
const menteeController = require("../controllers/menteeController");
const menteeAuthController = require("../controllers/menteeAuthController");

const router = express.Router();

router.post("/login", menteeAuthController.login);

router
  .route("/")
  .post(menteeController.createMentee)
  .get(menteeController.getAllMentee);
// /api/v1/mentees
router.route("/:id").get(menteeController.getMentee);

module.exports = router;
