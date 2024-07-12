const OpenAI = require("openai");
const fs = require("fs")
require("dotenv").config()

const openai = new OpenAI({ apiKey: process.env.API_KEY });

async function main() {

  try {
    const assistant = await openai.beta.assistants.create({
      name: 'Dani',
      description: null,
      model: 'gpt-4o',
      instructions: 'Você é uma assistente amigável que responde o usuário de acordo com sua base de conhecimento.',
      tools: [{ type: 'file_search' }],
      top_p: 1,
      temperature: 1,
      tool_resources: { file_search: { vector_store_ids: ["vs_19ExDbRl6IwIk9kLMRtNLLLZ"] } },
      metadata: {},
      response_format: 'auto'
      // tool_resources: {
      //   "code_interpreter": {
      //     "file_ids": [file.id]
      //   }
      // }
    });
    console.log(assistant)
  } catch (error) {
    console.log(error)
  }
}

main();