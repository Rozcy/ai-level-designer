import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LevelList = () => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    const fetchLevels = async () => {
      const res = await axios.get('http://localhost:5000/api/levels');
      setLevels(res.data);
    };
    fetchLevels();
  }, []);

  return (
    <div>
      <h2>Game Levels</h2>
      {levels.map((level) => (
        <div key={level._id}>
          <h3>{level.name}</h3>
          <p>{level.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LevelList;