const OpenAI = require("openai");
const fs = require("fs")
const path = require("path")
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.API_KEY });



async function transcribeAudio() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream('src/source/example.m4a'),
    model: 'whisper-1',
  });
  console.log(`Resposta do Whisper ====> ${transcription.text}`)
  return transcription.text;
}

async function processTextWithGPT(transcriptionText) {
  const systemPrompt = "Você é um assistente útil. Sua tarefa é responder o usuário algo relevante ao que ele lhe falou";

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: transcriptionText
      }
    ]
  });

  return completion.choices[0].message.content;
}

const speechFile = path.resolve("src/speechs/speech.mp3");

async function speech(text) {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}

transcribeAudio().then(transcriptionText => {
  processTextWithGPT(transcriptionText).then(processedText => {
    console.log('Texto Processado pelo GPT ===>:', processedText);
    speech(processedText);
  });
});
