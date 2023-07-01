const express = require("express");
const AppError = require("./utils/appError");
const menteeRouter = require("./routes/menteeRoutes");
const mentorRouter = require("./routes/mentorRoutes");

const app = express();

app.use(express.json());
app.use("/api/v1/mentees", menteeRouter);
app.use("/api/v1/mentors", mentorRouter);

module.exports = app;
