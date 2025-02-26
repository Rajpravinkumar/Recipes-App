

const express = require("express");
const loggers = require("./utils/loggers");
const notFound = require("./utils/notFound");
const recipeRouter = require("./routes/recipeRoutes");

// creating an express app

const app = express();
app.use(express.json());

app.use(loggers);

app.use("/recipe", recipeRouter);

app.use(notFound);

module.exports = app;