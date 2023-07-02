const express = require("express");
const adminController = require("./../controllers/adminController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").post(adminController.createAdmin);
router.post("/login", authController.login);

module.exports = router;
