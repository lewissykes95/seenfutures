// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6B73FF', // Soft purple-blue
      light: '#A5ACFF',
      dark: '#4A52CC',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FF6B9D', // Warm pink
      light: '#FFB3CE',
      dark: '#E91E63',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FAFBFF', // Very light blue-white
      paper: '#ffffff',
    },
    text: {
      primary: '#2D3748',
      secondary: '#4A5568',
    },
    success: {
      main: '#48BB78',
      light: '#9AE6B4',
      dark: '#38A169',
    },
    warning: {
      main: '#ED8936',
      light: '#FBD38D',
      dark: '#DD6B20',
    },
    info: {
      main: '#4299E1',
      light: '#90CDF4',
      dark: '#3182CE',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(107, 115, 255, 0.05)',
    '0px 4px 8px rgba(107, 115, 255, 0.08)',
    '0px 6px 16px rgba(107, 115, 255, 0.1)',
    '0px 8px 24px rgba(107, 115, 255, 0.12)',
    '0px 12px 32px rgba(107, 115, 255, 0.14)',
    '0px 16px 40px rgba(107, 115, 255, 0.16)',
    '0px 20px 48px rgba(107, 115, 255, 0.18)',
    '0px 24px 56px rgba(107, 115, 255, 0.2)',
    '0px 28px 64px rgba(107, 115, 255, 0.22)',
    '0px 32px 72px rgba(107, 115, 255, 0.24)',
    '0px 36px 80px rgba(107, 115, 255, 0.26)',
    '0px 40px 88px rgba(107, 115, 255, 0.28)',
    '0px 44px 96px rgba(107, 115, 255, 0.3)',
    '0px 48px 104px rgba(107, 115, 255, 0.32)',
    '0px 52px 112px rgba(107, 115, 255, 0.34)',
    '0px 56px 120px rgba(107, 115, 255, 0.36)',
    '0px 60px 128px rgba(107, 115, 255, 0.38)',
    '0px 64px 136px rgba(107, 115, 255, 0.4)',
    '0px 68px 144px rgba(107, 115, 255, 0.42)',
    '0px 72px 152px rgba(107, 115, 255, 0.44)',
    '0px 76px 160px rgba(107, 115, 255, 0.46)',
    '0px 80px 168px rgba(107, 115, 255, 0.48)',
    '0px 84px 176px rgba(107, 115, 255, 0.5)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 24px rgba(107, 115, 255, 0.2)',
          },
        },
        sizeLarge: {
          padding: '16px 32px',
          fontSize: '1.125rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 2px 12px rgba(107, 115, 255, 0.08)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0px 4px 20px rgba(107, 115, 255, 0.08)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 12px 40px rgba(107, 115, 255, 0.15)',
          },
        },
      },
    },
  },
});

export default theme;
