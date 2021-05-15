import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import type { ReactNode, RefObject } from 'react';
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
      <div>
        <Router ref={this.router}>
          <Grid direction="column" container>
            <Grid item>
              <Navigation />
            </Grid>
            <Grid container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/" component={NotFound} />
              </Switch>
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
