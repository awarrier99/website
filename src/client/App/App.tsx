import React, { Component } from 'react';
import type { ReactNode, RefObject } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import Home from './containers/Home';
import Navigation from './components/Navigation';
import NotFound from './containers/NotFound';

class App extends Component<{}, {}> {
  router: RefObject<Router>;

  constructor(props: {}) {
    super(props);

    this.router = React.createRef();
  }

  render(): ReactNode {
    return (
      <div className="full">
        <Router ref={this.router}>
          <Grid className="full-height" direction="column" container>
            <Grid item>
              <Navigation />
            </Grid>
            <Grid style={{ flexGrow: 1 }} item>
              <Container className="full-height">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/" component={NotFound} />
                </Switch>
              </Container>
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
