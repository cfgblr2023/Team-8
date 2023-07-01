const express = require("express");
const AppError = require("./utils/appError");
const menteeRouter = require("./routes/menteeRoutes");
const mentorRouter = require("./routes/mentorRoutes");
const adminRouter = require("./routes/adminRoutes");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/mentees", menteeRouter);
app.use("/api/v1/mentors", mentorRouter);
app.use("/api/v1/admin", adminRouter);

module.exports = app;
