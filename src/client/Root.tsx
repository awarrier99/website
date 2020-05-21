import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import App from './App/App';
import theme from './theme';
import './Root.css';

class Root extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    );
  }
}

export default Root;
