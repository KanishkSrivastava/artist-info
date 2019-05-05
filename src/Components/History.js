import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { getArtistDetails, navigationButtonSelect } from '../Actions/artistSearchAction';

const History = ({ artists, getArtistDetails, navigationButtonSelect }) => (
  <Grid container>
    <Grid item xs={12}>
      <Typography variant='h5'> Recent Search</Typography>
    </Grid>
    {artists.map(artist => (
      <Grid
        item
        key={artist}
        onClick={async () => {
          await getArtistDetails(artist);
          navigationButtonSelect('about');
        }}
        xs={6}
        style={{ cursor: 'pointer' }}
      >
        <Card style={{ margin: 10 }}>
          <CardContent>
            <Typography color='primary' variant='subtitle1'>
              {artist}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

const mapDispatchToProps = { getArtistDetails, navigationButtonSelect };
export default connect(
  null,
  mapDispatchToProps
)(History);
