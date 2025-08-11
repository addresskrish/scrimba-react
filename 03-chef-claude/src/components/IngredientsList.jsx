function IngredientsList({ingredientElement, ingredient, handleClick}) {
    return (
        <>
            <section className="sec-conx">
                <h2>Ingredients on hand:</h2>
                <ul className="ul-con">
                    {ingredientElement}
                </ul>
                { ingredient.length > 3 &&
                    <div className="recipe-con">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={handleClick}>Get a recipe</button>
                    </div>
                }
            </section>
        </>
    )
}

export default IngredientsList