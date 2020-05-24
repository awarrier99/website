import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#D94F30',
    },
    secondary: {
      main: '#D9A330',
    },
    background: {
      default: '#000000',
      paper: '#121212'
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.85)',
      secondary: 'rgba(255, 255, 255, 0.6)'
    }
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Exo 2", sans-serif'
    },
    h2: {
      fontFamily: '"Exo 2", sans-serif'
    },
    h3: {
      fontFamily: '"Exo 2", sans-serif'
    },
    h4: {
      fontFamily: '"Exo 2", sans-serif',
      fontSize: '2.5rem'
    },
    h5: {
      fontFamily: '"Exo 2", sans-serif'
    },
    h6: {
      fontFamily: '"Exo 2", sans-serif'
    },
  }
});
