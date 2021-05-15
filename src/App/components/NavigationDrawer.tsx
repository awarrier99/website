import React, { Component } from 'react';
import { Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { ChevronLeft, Home, Info } from '@material-ui/icons';
import type { ReactNode } from 'react';

export interface NavigationDrawerProps {
  open: boolean,
  onClose: (e: object) => void
}

interface NavigationDrawerState {
  selected: string
}

class NavigationDrawer extends Component<NavigationDrawerProps, NavigationDrawerState> {
  suppressTrigger = false;

  constructor(props: NavigationDrawerProps) {
    super(props);

    this.state = {
      selected: 'home',
    };
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.scrollTrigger);
  }

  homeScroll = (): void => {
    this.suppressTrigger = true;
    this.setState({ selected: 'home' });
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    setTimeout(() => { this.suppressTrigger = false; }, 1000);
  };

  aboutMeScroll = (): void => {
    this.suppressTrigger = true; // while scrolling, scrollTrigger would set selected to 'home'
    this.setState({ selected: 'aboutMe' });
    window.scrollTo({ left: 0, top: window.innerHeight, behavior: 'smooth' });
    setTimeout(() => { this.suppressTrigger = false; }, 1000);
  };

  scrollTrigger = (): void => {
    if (this.suppressTrigger) return;

    const { selected } = this.state;
    const { scrollY } = window;

    if (selected !== 'home' && scrollY < window.innerHeight) this.setState({ selected: 'home' });
    else if (selected !== 'aboutMe' && scrollY >= window.innerHeight) this.setState({ selected: 'aboutMe' });
  };

  render(): ReactNode {
    const { open, onClose } = this.props;
    const { selected } = this.state;

    return (
      <Drawer open={open} onClose={onClose}>
        <div style={{ width: 250 }}>
          <Toolbar>
            <Grid justify="space-between" alignItems="center" container>
              <Grid item>
                <Typography color="textPrimary" variant="h6">
                  Section
                </Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={onClose}>
                  <ChevronLeft color="primary" />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
          <Divider />
          <List>
            <ListItem selected={selected === 'home'} onClick={this.homeScroll} button divider>
              <ListItemIcon>
                <Home color="primary" />
              </ListItemIcon>
              <ListItemText>
                <Typography color="textSecondary" variant="body1">
                  Home
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem selected={selected === 'aboutMe'} onClick={this.aboutMeScroll} button>
              <ListItemIcon>
                <Info color="primary" />
              </ListItemIcon>
              <ListItemText>
                <Typography color="textSecondary" variant="body1">
                  About Me
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

export default NavigationDrawer;
