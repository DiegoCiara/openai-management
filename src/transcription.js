const OpenAI = require("openai");
const fs = require("fs")
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.API_KEY });

async function main() {

  try {
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream("src/source/example.m4a"),
      model: "whisper-1",
    });
    console.log(transcription.text);
  } catch (error) {
    console.log(error)
  }
}

main();