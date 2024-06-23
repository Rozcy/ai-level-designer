const OpenAI = require('openai');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

console.log('OPENAI_API_KEY in openaiService:', process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateLevel = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a game level designer. Create a 10x10 grid level layout using the following symbols: '#' for walls, '.' for empty spaces, 'S' for start, 'E' for end, and 'T' for traps. Provide the layout as a string with newlines between rows."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 500,
    });

    const layout = response.choices[0].message.content.trim().split('\n');
    return layout.map(row => row.split(''));
  } catch (error) {
    console.error('Error generating level with OpenAI:', error);
    throw error;
  }
};

module.exports = { generateLevel };