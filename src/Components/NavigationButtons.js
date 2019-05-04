import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { navigationButtonSelect } from '../Actions/artistSearchAction';

const NavigationButtons = ({ selected, navigationButtonSelect }) => (
  <Grid container direction='column' alignItems='flex-end'>
    <Grid item xs={12} style={{ marginBottom: 20 }}>
      <Button
        variant={selected === 'about' ? 'outlined' : 'text'}
        color={selected === 'about' ? 'secondary' : 'primary'}
        onClick={() => navigationButtonSelect('about')}
      >
        About
      </Button>
    </Grid>
    <Grid item xs={12} style={{ marginBottom: 20 }}>
      <Button
        variant={selected === 'tracks' ? 'outlined' : 'text'}
        color={selected === 'tracks' ? 'secondary' : 'primary'}
        onClick={() => navigationButtonSelect('tracks')}
      >
        Tracks
      </Button>
    </Grid>
    <Grid item xs={12} style={{ marginBottom: 20 }}>
      <Button
        variant={selected === 'albums' ? 'outlined' : 'text'}
        color={selected === 'albums' ? 'secondary' : 'primary'}
        onClick={() => navigationButtonSelect('albums')}
      >
        Albums
      </Button>
    </Grid>
    <Grid item xs={12}>
      <Button
        variant={selected === 'similar artist' ? 'outlined' : 'text'}
        color={selected === 'similar artist' ? 'secondary' : 'primary'}
        onClick={() => navigationButtonSelect('similar artist')}
      >
        Similar Artist
      </Button>
    </Grid>
  </Grid>
);

const mapDispatchToProps = { navigationButtonSelect };
export default connect(
  null,
  mapDispatchToProps
)(NavigationButtons);
