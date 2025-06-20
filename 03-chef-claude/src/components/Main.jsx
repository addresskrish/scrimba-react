function Main() {

    const ingredients = ["Tomato", "Apple", "Banana"]

    const ingredientElement = ingredients.map((ingredient) => {
        return (
            <li key={ingredient}>{ingredient}</li>
        )
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("From submitted!")
        const fromData = new FormData(event.currentTarget)
        const newIngredient = fromData.get("ingedient")
        console.log(newIngredient)
    }

    return (
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="e.g. oregano" name="ingedient"/>
                    <button>Add ingredient</button>
                </form>
                <ul>
                    {ingredientElement}
                </ul>
            </main>
    )
}

export default Main