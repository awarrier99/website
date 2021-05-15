import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffab91',
    },
    secondary: {
      main: '#a1887f',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.87)',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Exo 2", sans-serif',
    },
    h2: {
      fontFamily: '"Exo 2", sans-serif',
    },
    h3: {
      fontFamily: '"Exo 2", sans-serif',
    },
    h4: {
      fontFamily: '"Exo 2", sans-serif',
      fontSize: '2.5rem',
    },
    h5: {
      fontFamily: '"Exo 2", sans-serif',
    },
    h6: {
      fontFamily: '"Exo 2", sans-serif',
    },
  },
});
