const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { getRecipeFromChefClaude } = require("./ai.js");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/recipe", async (req, res) => {
  const { ingredients } = req.body;

  try {
    const recipeText = await getRecipeFromChefClaude(ingredients);
    res.json({ recipe: recipeText });
  } catch (err) {
    console.error("Claude error:", err.message);
    res.status(500).json({ error: "Failed to fetch recipe from Claude" });
  }
});

app.listen(5000, () => console.log("🚀 Backend running at http://localhost:5000"));
