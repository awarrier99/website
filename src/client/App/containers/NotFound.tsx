import React, { Component } from 'react';
import type { ReactNode } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ErrorOutline } from '@material-ui/icons';

class NotFound extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <Grid className="full" direction="column" justify="center" alignItems="center" container>
        <ErrorOutline style={{ fontSize: '64pt', marginBottom: 16 }} color="error" fontSize="inherit" />
        <Typography variant="h5">
          This Page Does Not Exist
        </Typography>
      </Grid>
    );
  }
}

export default NotFound;
