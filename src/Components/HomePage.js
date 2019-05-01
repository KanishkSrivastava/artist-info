import React from 'react';

import Grid from '@material-ui/core/Grid';

import Input from './Input';
import History from './History';
import NavigationButtons from './NavigationButtons';

const HomePage = () => (
  <Grid container>
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={5}>
        <Input />
      </Grid>
      <Grid item xs={4} />
    </Grid>
    <Grid item xs={12} sm={8}>
      <Grid container>
        <Grid item xs={2} sm={4}>
          <NavigationButtons selected='similar artist' />
        </Grid>
        <Grid item xs={10} sm={8} />
      </Grid>
    </Grid>
    <Grid item xs={12} sm={4}>
      <History />
    </Grid>
  </Grid>
);
export default HomePage;
