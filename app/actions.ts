'use server'

import OpenAI, { ClientOptions } from 'openai'

export async function evaluate(input: string): Promise<string> {
  console.log(input);

  const openaiOptions: ClientOptions = {
    apiKey: process.env.OPENAI_API_KEY as string
  };
  const openai = new OpenAI(openaiOptions);
  console.log(openai);

  const gptResponse = await openai.chat.completions.create({
    model: 'gpt-4-0613',
    messages: [
      {
        role: 'system',
        content: 'You are a bot called MillieBot'
      },
      {
        role: 'user',
        content: input
      }
    ]
  });
  console.log(gptResponse.choices[0].message);
  return gptResponse.choices[0].message.content as string;
}