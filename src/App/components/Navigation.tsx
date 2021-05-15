import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import type { ReactNode } from 'react';
import NavigationDrawer from './NavigationDrawer';
import '../stylesheets/Navigation.css';
import logo from '../images/logo.png';

interface NavigationState {
  showDrawer: boolean
}

class Navigation extends Component<{}, NavigationState> {
  showBar = false;
  showName = false;

  constructor(props: {}) {
    super(props);

    this.state = {
      showDrawer: false,
    };
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.scrollTrigger);
  }

  scrollTrigger = (): void => {
    const { scrollY } = window;

    const appBar = document.getElementById('appBar');
    if (!this.showBar && scrollY >= 64) {
      appBar?.classList.toggle('app-bar-show');
      this.showBar = true;
    } else if (this.showBar && scrollY < 64) {
      appBar?.classList.toggle('app-bar-show');
      this.showBar = false;
    }

    // const scrollRatio = (Math.min(scrollY, innerHeight) / innerHeight) * 100;
    // const background = document.querySelector('.fullscreen.landing-container') as HTMLElement;
    // if (window.scrollY <= window.innerHeight) {
    //   background.style.opacity = `${100 - scrollRatio}%`;
    // }

    const name = document.querySelector('.app-bar-name') as HTMLElement;
    const title = document.querySelector('.landing-title') as HTMLElement;
    const boundary = title.getBoundingClientRect().bottom + document.documentElement.scrollTop;
    if (!this.showName && scrollY > boundary) {
      name.style.opacity = '1';
      this.showName = true;
    } else if (this.showName && scrollY <= boundary) {
      name.style.opacity = '0';
      this.showName = false;
    }
  };

  openDrawer = (): void => {
    this.setState({ showDrawer: true });
  };

  closeDrawer = (): void => {
    this.setState({ showDrawer: false });
  };

  render(): ReactNode {
    const { showDrawer } = this.state;

    return (
      <>
        <AppBar className="app-bar" id="appBar" elevation={10}>
          <Toolbar disableGutters>
            <Grid className="nav-container" alignItems="center" container>
              <Grid style={{ marginLeft: 16, marginRight: 16 }} item>
                <IconButton onClick={this.openDrawer}>
                  <Menu color="primary" />
                </IconButton>
              </Grid>
              <Grid item>
                <Link style={{ width: 50, height: 50, display: 'block' }} to="/">
                  <img className="full" alt="" src={logo} />
                </Link>
              </Grid>
              <div className="app-bar-name-container">
                <Typography className="app-bar-name" color="primary" variant="h4">
                  Ashvin Warrier
                </Typography>
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
        <NavigationDrawer open={showDrawer} onClose={this.closeDrawer} />
      </>
    );
  }
}

export default Navigation;
