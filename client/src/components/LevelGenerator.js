import React, { useState } from 'react';
import axios from 'axios';

const LevelGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [layout, setLayout] = useState(null);

  const handleGenerate = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/levels/generate', { prompt });
      setLayout(res.data.layout);
    } catch (error) {
      console.error('Error generating level:', error);
    }
  };

  return (
    <div>
      <h2>Generate Level</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a level description"
      />
      <button onClick={handleGenerate}>Generate</button>
      {layout && (
        <div>
          <h3>Generated Layout:</h3>
          {layout.map((row, i) => (
            <div key={i}>{row.join('')}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LevelGenerator;