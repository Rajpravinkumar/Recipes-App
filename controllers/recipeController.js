const recipe = require("../models/recipe");

const recipeController = {
  createRecipe: async (req, res) => {
    try {
      const { title, ingredient, instuction, duration } = req.body;
      const newRecipe = new recipe({
        title,
        ingredient,
        instuction,
        duration,
      });
      await newRecipe.save();
      res.json({ msg: "recipe created succusfully..." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // ------------------------------------------------------

  getAllRecipe: async (req, res) => {
    try {
      const recipes = await recipe.find();
      res.json(recipes);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // ------------------------------------------------------

  getRecipeById: async (req, res) => {
    try {
      const { id } = req.params;
      const recipes = await recipe.findById(id);
      res.json(recipes);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // -------------------------------------------------------

  updateRecipeById: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, ingredient, instuction, time } = req.body;
      const updatedRecipe = {
        title,
        ingredient,
        instuction,
        time,
      };
      await recipe.findByIdAndUpdate(id, updatedRecipe);
      res.json({ msg: "recipe updated successfully..." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // ---------------------------------------------------------

  deleteRecipeById: async (req, res) => {
    try {
      const { id } = req.params;
      await recipe.findByIdAndDelete(id);
      res.json({ msg: "recipe deleted successfully..." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = recipeController;
