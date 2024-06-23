import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const generateLevel = async (prompt, model) => {
  try {
    const response = await axios.post(`${API_URL}/levels/generate`, { prompt, model });
    return response.data.layout;
  } catch (error) {
    console.error('Error generating level:', error);
    throw error;
  }
};