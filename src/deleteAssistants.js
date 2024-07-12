const OpenAI = require("openai");
const fs = require("fs")
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.API_KEY });

async function main() {
  const assistants = [
    {id: "assistantId"},
  ]
  try {
    for (const assistant of assistants) {
      const assistantDeleted = await openai.beta.assistants.del(assistant.id);
      console.log(`Assistente ${assistantDeleted.id} deletado`);
    }
  } catch (error) {
    console.log(error)
  }
}

main();