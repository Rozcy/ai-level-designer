import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Forest green
    },
    secondary: {
      main: '#795548', // Brown
    },
    background: {
      default: '#e8f5e9', // Light green
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#1b5e20',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#33691e',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;