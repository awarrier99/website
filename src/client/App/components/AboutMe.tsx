import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import '../stylesheets/AboutMe.css';

class AboutMe extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <Grid className="full-height" justify="center" alignItems="center" container>
        <Grid style={{ height: '75%' }} lg={8} item>
          <Card className="full-height" elevation={0}>
            <CardHeader title="About Me" titleTypographyProps={{ color: 'textPrimary', variant: 'h4' }} />
            <CardContent className="full-height">
              <Grid className="full-height" alignItems="center" direction="column" container>
                <Grid style={{ flexGrow: 1 }} justify="center" alignItems="center" container>
                  <Grid item>
                    <Avatar style={{ width: 300, height: 300 }} src="images/profile.jpg" alt="Ashvin Warrier" />
                  </Grid>
                </Grid>
                <Grid style={{ flexGrow: 2 }} justify="center" alignItems="center" container>
                  <Grid xs={11} item>
                    <Card elevation={1} raised>
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
        </Grid>
      </Grid>
    );
  }
}

export default AboutMe;
