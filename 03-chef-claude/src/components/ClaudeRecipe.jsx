function ClaudeRecipe({ recipe }) {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article
                className="suggested-recipe-container"
                aria-live="polite"
                dangerouslySetInnerHTML={{ __html: recipe }}
            />
        </section>
    )
}

export default ClaudeRecipe
