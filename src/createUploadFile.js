const OpenAI = require("openai");
const fs = require("fs")
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.API_KEY });

async function main() {


  try {
    const aapl10k = await openai.files.create({
      file: fs.createReadStream("src/source/fileInThisSourceDirectory.txt"),
      purpose: "assistants",
    });

    console.log(aapl10k)
  } catch (error) {
    console.log(error)
  }
}

main();