import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';

class AboutMe extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <Grid className="full-height" alignItems="center" direction="column" container>
        <Grid style={{ flexGrow: 1 }} justify="center" alignItems="center" container>
          <Grid item>
            <Typography style={{ fontWeight: 300, fontSize: '2.5rem' }} color="secondary" variant="h4">
              Ashvin Warrier
            </Typography>
          </Grid>
        </Grid>
        <Grid style={{ flexGrow: 2, margin: 0, width: 'auto' }} justify="center" alignItems="center" spacing={3} direction="column" container>
          <Grid item>
            <Avatar style={{ width: 150, height: 150 }} src="images/profile.jpg" />
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Typography style={{ fontStyle: 'italic' }} color="textSecondary" variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel maximus est. Etiam eleifend ex quis libero finibus viverra. Ut lacinia dui ut diam luctus, sit amet posuere augue posuere. Fusce a ante eget leo consequat vehicula eu suscipit eros. Aliquam erat volutpat. Vestibulum vitae consectetur dolor. Nulla hendrerit libero lacus, interdum pellentesque nisl consequat vel. Nam quis efficitur libero.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default AboutMe;
