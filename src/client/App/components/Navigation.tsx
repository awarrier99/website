import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import '../stylesheets/Navigation.css';

class Navigation extends Component<{}, {}> {
  showBar = false;

  showName = false;

  componentDidMount(): void {
    window.addEventListener('scroll', this.scrollTrigger);
  }

  scrollTrigger = (): any => {
    const { scrollY } = window;

    const appBar = document.getElementById('appBar');
    if (!this.showBar && scrollY > 64) {
      appBar?.classList.toggle('app-bar-show');
      this.showBar = true;
    } else if (this.showBar && scrollY <= 64) {
      appBar?.classList.toggle('app-bar-show');
      this.showBar = false;
    }

    const scrollRatio = (Math.min(scrollY, window.innerHeight) / window.innerHeight) * 100;

    const background = document.querySelector('.fullscreen.landing-container') as HTMLElement;
    if (window.scrollY <= window.innerHeight) {
      background.style.opacity = `${100 - scrollRatio}%`;
    }

    const name = document.querySelector('.name') as HTMLElement;
    if (!this.showName && scrollRatio > 28) {
      name.style.opacity = '100%';
      this.showName = true;
    } else if (this.showName && scrollRatio <= 28) {
      name.style.opacity = '0';
      this.showName = false;
    }
  };

  render(): ReactNode {
    return (
      <AppBar className="app-bar" id="appBar" position="fixed" elevation={10}>
        <Toolbar>
          <Grid alignItems="center" container>
            <Grid item>
              <Link style={{ marginRight: 28 }} to="/">
                <img style={{ width: 56, height: 56 }} alt="" src="images/logo.png" />
              </Link>
            </Grid>
            <Grid item>
              <Typography className="name" color="primary" variant="h6">
                Ashvin Warrier
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navigation;
