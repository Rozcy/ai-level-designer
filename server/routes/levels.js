const express = require('express');
const router = express.Router();
const openaiService = require('../services/openaiService');
const localLLMService = require('../services/localLLMService');

router.post('/generate', async (req, res) => {
  try {
    const { prompt, model } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }

    let layout;
    if (model === 'openai') {
      layout = await openaiService.generateLevel(prompt);
    } else if (model === 'localLLM') {
      layout = await localLLMService.generateLevel(prompt);
    } else {
      return res.status(400).json({ message: 'Invalid model specified' });
    }

    res.json({ layout });
  } catch (error) {
    console.error('Error generating level:', error);
    res.status(500).json({ message: 'Error generating level', error: error.message });
  }
});

module.exports = router;