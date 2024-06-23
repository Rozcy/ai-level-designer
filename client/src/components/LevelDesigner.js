import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LevelDisplay from './LevelDisplay.js';
import ForestBackground from './ForestBackground';
import AIModelSelector from './AIModelSelector';
import { generateLevel } from '../services/api';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(5px)',
}));

const LevelDesigner = () => {
  const [prompt, setPrompt] = useState('');
  const [level, setLevel] = useState(null);
  const [model, setModel] = useState('openai');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const generatedLevel = await generateLevel(prompt, model);
      setLevel(generatedLevel);
    } catch (error) {
      console.error('Error generating level:', error);
      // TODO: Add error handling, perhaps show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box position="relative" minHeight="100vh">
      <ForestBackground />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" align="center" gutterBottom>
          Forest Level Designer
        </Typography>
      </motion.div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StyledPaper elevation={3}>
              <Typography variant="h2" gutterBottom>
                Generate Level
              </Typography>
              <AIModelSelector model={model} setModel={setModel} />
              <TextField
                fullWidth
                variant="outlined"
                label="Enter level description"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleGenerate}
                fullWidth
                size="large"
                sx={{ mt: 2 }}
                disabled={isLoading}
              >
                {isLoading ? 'Generating...' : 'Generate Level'}
              </Button>
            </StyledPaper>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StyledPaper elevation={3}>
              <Typography variant="h2" gutterBottom>
                Level Preview
              </Typography>
              {level && <LevelDisplay level={level} />}
            </StyledPaper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LevelDesigner;