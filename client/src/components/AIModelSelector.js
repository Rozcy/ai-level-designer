import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AIModelSelector = ({ model, setModel }) => {
  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel id="ai-model-select-label">AI Model</InputLabel>
      <Select
        labelId="ai-model-select-label"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        label="AI Model"
      >
        <MenuItem value="openai">OpenAI GPT-3</MenuItem>
        <MenuItem value="localLLM">Local LLM (LM Studio)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AIModelSelector;