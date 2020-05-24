import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import '../stylesheets/LandingPage.css';

const aboutMe = (): void => window.scrollTo({ left: 0, top: window.innerHeight, behavior: 'smooth' });

class LandingPage extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <Grid className="fullscreen landing-container" direction="column" container>
        <div className="landing-background" />
        <Grid className="full-height landing" justify="space-around" alignItems="center" direction="column" container>
          <Grid style={{ position: 'relative', bottom: '5%' }} item>
            <Typography className="landing-title" color="textPrimary" variant="h1">
              Ashvin Warrier
            </Typography>
            <Typography className="landing-subtitle" color="secondary" variant="body2">
              “It’s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive.” — Steve McConnell
            </Typography>
          </Grid>
          <Grid style={{ position: 'relative', top: '10%' }} item>
            <Button color="primary" variant="outlined" onClick={aboutMe}>
              About Me
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default LandingPage;
