import React from 'react';

import Grid from '@material-ui/core/Grid';

import DisplayCard from '../utils//DisplayCard';
const Tracks = ({ tracks }) => (
  <Grid container>
    {tracks.map(track => (
      <DisplayCard key={track.name} content={track} />
    ))}
  </Grid>
);
export default Tracks;
