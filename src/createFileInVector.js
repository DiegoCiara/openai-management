const OpenAI = require("openai");
const fs = require("fs")
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.API_KEY });

async function main() {

  try {
    const batch = await openai.beta.vectorStores.fileBatches.createAndPoll(
      "vectorId",
      { file_ids: ["fileIdInOpenAI"] },
    );
    console.log(batch)
  } catch (error) {
    console.log(error)
  }
}

main();