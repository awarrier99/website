import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Avatar, Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import '../stylesheets/AboutMe.css';

class AboutMe extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <Grid className="full-height" justify="center" alignItems="center" container>
        <div className="transition" />
        <Grid style={{ height: '85%' }} container>
          <Card className="full-height" variant="outlined">
            <CardContent className="full-height">
              <Grid className="full-height" alignItems="center" direction="column" container>
                <Grid style={{ flexGrow: 1 }} justify="space-around" alignItems="center" direction="column" container>
                  <Grid item>
                    <Typography color="textPrimary" variant="h4">
                      About Me
                    </Typography>
                  </Grid>
                  <Grid className="full-width" item>
                    <Divider variant="middle" />
                  </Grid>
                </Grid>
                <Grid style={{ flexGrow: 1 }} justify="center" alignItems="center" container>
                  <Grid item>
                    <Avatar style={{ width: 300, height: 300, opacity: 0.8 }} src="/images/profile.jpg" alt="Ashvin Warrier" />
                  </Grid>
                </Grid>
                <Grid style={{ flexGrow: 2 }} justify="center" alignItems="center" container>
                  <Grid xs={11} item>
                    <Card elevation={2} raised>
                      <CardContent>
                        <Typography style={{ fontStyle: 'italic' }} color="textSecondary" variant="body2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel maximus est. Etiam eleifend ex quis libero finibus viverra. Ut lacinia dui ut diam luctus, sit amet posuere augue posuere. Fusce a ante eget leo consequat vehicula eu suscipit eros. Aliquam erat volutpat. Vestibulum vitae consectetur dolor. Nulla hendrerit libero lacus, interdum pellentesque nisl consequat vel. Nam quis efficitur libero.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* <img style={{ height:  }} src="/images/profile.jpg" alt="Ashvin Warrier" /> */}
        </Grid>
      </Grid>
    );
  }
}

export default AboutMe;
