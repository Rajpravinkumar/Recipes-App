const express = require("express");
const recipeController = require("../controllers/recipeController");

const recipeRouter = express.Router();
recipeRouter.post("/", recipeController.createRecipe);
recipeRouter.get("/", recipeController.getAllRecipe);
recipeRouter.get("/:id", recipeController.getRecipeById);
recipeRouter.put("/:id", recipeController.updateRecipeById);
recipeRouter.delete("/:id", recipeController.deleteRecipeById);

module.exports = recipeRouter;
