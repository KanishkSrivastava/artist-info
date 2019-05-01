import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const NavigationButtons = ({ selected }) => (
  <Grid container direction='column' alignItems='flex-end'>
    <Grid item xs={12} style={{ marginBottom: 20 }}>
      <Button variant={selected === 'about' ? 'outlined' : 'text'} color={selected === 'about' ? 'secondary' : 'primary'}>
        About
      </Button>
    </Grid>
    <Grid item xs={12} style={{ marginBottom: 20 }}>
      <Button variant={selected === 'tracks' ? 'outlined' : 'text'} color={selected === 'tracks' ? 'secondary' : 'primary'}>
        Tracks
      </Button>
    </Grid>
    <Grid item xs={12} style={{ marginBottom: 20 }}>
      <Button variant={selected === 'albums' ? 'outlined' : 'text'} color={selected === 'albums' ? 'secondary' : 'primary'}>
        Albums
      </Button>
    </Grid>
    <Grid item xs={12}>
      <Button variant={selected === 'similar artist' ? 'outlined' : 'text'} color={selected === 'similar artist' ? 'secondary' : 'primary'}>
        Similar Artist
      </Button>
    </Grid>
  </Grid>
);
export default NavigationButtons;
