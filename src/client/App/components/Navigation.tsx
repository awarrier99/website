import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';

export interface NavigationProps {

}

class Navigation extends Component<NavigationProps, {}> {
  constructor(props: NavigationProps) { // eslint-disable-line
    super(props);
  }

  render(): ReactNode {
    return (
      <AppBar color="default" position="static">
        <Toolbar>
          <Link style={{ marginRight: 28 }} to="/">
            <img style={{ width: 56, height: 56 }} alt="" src="images/logo.png" />
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navigation;
