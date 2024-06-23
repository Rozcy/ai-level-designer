const axios = require('axios');

const LM_STUDIO_URL = 'http://localhost:1234/v1/chat/completions';

const generateLevel = async (prompt) => {
  try {
    const response = await axios.post(LM_STUDIO_URL, {
      messages: [
        {
          role: "system",
          content: "You are a game level designer. Create a 10x10 grid level layout using the following symbols: '#' for walls, '.' for empty spaces, 'S' for start, 'E' for end, and 'T' for traps. Provide the layout as a string with newlines between rows."
        },
        {
          role: "user",
          content: prompt || "Create a simple maze-like level" // Provide a default prompt if none is given
        }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    if (response.data && response.data.choices && response.data.choices.length > 0) {
      const layout = response.data.choices[0].message.content.trim().split('\n');
      return layout.map(row => row.split(''));
    } else {
      throw new Error('Unexpected response format from LLM');
    }
  } catch (error) {
    console.error('Error generating level with Local LLM:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = { generateLevel };