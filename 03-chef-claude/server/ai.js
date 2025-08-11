const Anthropic = require("@anthropic-ai/sdk")
const dotenv = require("dotenv")
dotenv.config()

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients...
`

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

async function getRecipeFromChefClaude(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ")

  const msg = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
      }
    ]
  })

  return msg.content[0].text
}

module.exports = { getRecipeFromChefClaude }
