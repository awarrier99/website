import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import type { ReactNode } from 'react';
import AboutMe from '../components/AboutMe';
import LandingPage from '../components/LandingPage';

class Home extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <Grid direction="column" container>
        <LandingPage />
        <Container className="fullscreen" maxWidth={false}>
          <AboutMe />
        </Container>
      </Grid>
    );
  }
}

export default Home;
