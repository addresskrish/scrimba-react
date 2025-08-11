import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

function Main() {
    const [ingredient, setIngredient] = useState([])
    const [recipe, setRecipe] = useState("")
    const [recipeShown, setRecipeShown] = useState(false)

    const ingredientElement = ingredient.map((i, index) => (
        <li key={index}>{i}</li>
    ))

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingedient")
        setIngredient(prev => [...prev, newIngredient])
        event.target.reset()
    }

    const handleClick = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/recipe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ingredients: ingredient })
            })

            const data = await res.json()
            setRecipe(data.recipe)
            setRecipeShown(true)
        } catch (err) {
            console.error("Error fetching recipe:", err)
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. oregano" name="ingedient" required />
                <button>Add ingredient</button>
            </form>

            {ingredient.length > 0 && (
                <IngredientsList
                    ingredientElement={ingredientElement}
                    ingredient={ingredient}
                    handleClick={handleClick}
                />
            )}

            {recipeShown && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}

export default Main
