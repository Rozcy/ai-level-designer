import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import theme from './theme';
import LevelDesigner from './components/LevelDesigner.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <LevelDesigner />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;