import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Container, Grid } from '@material-ui/core';
import AboutMe from '../components/AboutMe';
import LandingPage from '../components/LandingPage';

class Home extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <Grid direction="column" container>
        <LandingPage />
        <Container className="fullscreen">
          <AboutMe />
        </Container>
      </Grid>
    );
  }
}

export default Home;
