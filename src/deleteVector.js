const OpenAI = require("openai");
const fs = require("fs")
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.API_KEY});

async function main() {
  const vectors = [
    {id: "vectorId"},
  ]

  try {
    for (vector of vectors) {
      const vectorStore = await openai.beta.vectorStores.del(vector.id);
      console.log(`Vector ${vectorStore.id} deletado`)
    }
  } catch (error) {
    console.log(error)
  }
}

// file-afjH7Ik1EfddzKN9t0S7X9rE

main();