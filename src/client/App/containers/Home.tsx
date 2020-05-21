import React, { Component } from 'react';
import type { ReactNode } from 'react';
import AboutMe from '../components/AboutMe';

class Home extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <AboutMe />
    );
  }
}

export default Home;
