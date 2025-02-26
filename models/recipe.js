const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredient: [String],
  instruction: String,
  duration: String,
});

module.exports = mongoose.model("recipe", recipeSchema, "recipes");
