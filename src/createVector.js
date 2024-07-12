const OpenAI = require("openai");
const fs = require("fs")
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.API_KEY });

async function main() {
  console.log("iniciou")
  try {
    const vectorStore = await openai.beta.vectorStores.create({
      name: "Novo Vetor",
      // file_ids: ['file_1', 'file_2', 'file_3', 'file_4', 'file_5']
    });
    console.log(vectorStore.id)
  } catch (error) {
    console.log(error)
  }
}

// file-afjH7Ik1EfddzKN9t0S7X9rE

main();