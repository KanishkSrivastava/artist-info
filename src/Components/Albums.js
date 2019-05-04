import React from 'react';

import Grid from '@material-ui/core/Grid';

import DisplayCard from '../utils/DisplayCard';

const Albums = ({ albums }) => (
  <Grid container>
    {albums.map(album => (
      <DisplayCard key={album.name} content={album} />
    ))}
  </Grid>
);
export default Albums;
