import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { getArtistDetails, navigationButtonSelect } from '../Actions/artistSearchAction';

const SimilarArtist = ({ artists, getArtistDetails, navigationButtonSelect }) => (
  <Grid container>
    {artists.map(artist => (
      <Grid
        item
        key={artist.name}
        onClick={async () => {
          await getArtistDetails(artist.name);
          navigationButtonSelect('about');
        }}
        xs={12}
        sm={6}
        style={{ cursor: 'pointer' }}
      >
        <Card style={{ margin: 10 }}>
          <Grid container direction='row' alignItems='center'>
            <Grid item xs={8}>
              <CardContent>
                <Typography variant='h6'>{artist.name}</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    ))}
  </Grid>
);

const mapDispatchToProps = { getArtistDetails, navigationButtonSelect };
export default connect(
  null,
  mapDispatchToProps
)(SimilarArtist);
