// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0078D4', // Primary Blue (BRD)
      light: '#cde9ff',
      dark: '#2d7eda',
    },
    secondary: {
      main: '#00C2B3', // Accent Teal
    },
    background: {
      default: '#F5F7FA', // Light Gray page bg
    },
    text: {
      primary: '#0C1C2E', // Deep Navy text
      secondary: '#607080', // softer text
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1.125rem',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 12, // rounder corners
  },
});
