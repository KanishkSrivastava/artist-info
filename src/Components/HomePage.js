import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import Input from './Input';
import History from './History';
import NavigationButtons from './NavigationButtons';
import About from './About';
import Tracks from './Tracks';
import Albums from './Albums';
import SimilarArtist from './SimilarArtist';
import Loading from '../Loading';

const HomePage = ({ artistInfo }) => (
  <Grid container>
    <Grid container style={{ marginBottom: 20 }} container direction='row' justify='center' alignItems='center'>
      <Grid item xs={2} />
      <Grid item xs={5}>
        <Input />
      </Grid>
      <Grid item xs={5}>
        <Loading />
      </Grid>
    </Grid>
    <Grid item xs={12} sm={8}>
      {artistInfo.about !== null ? (
        <Grid container>
          <Grid item xs={12} sm={3} style={{ paddingRight: 15 }}>
            <NavigationButtons selected={artistInfo.selectedNavigationButton} />
          </Grid>
          <Grid item xs={12} sm={8}>
            {artistInfo.selectedNavigationButton === 'about' ? <About artistName={artistInfo.artistName} about={artistInfo.about} /> : null}
            {artistInfo.selectedNavigationButton === 'tracks' ? <Tracks tracks={artistInfo.tracks} /> : null}
            {artistInfo.selectedNavigationButton === 'albums' ? <Albums albums={artistInfo.albums} /> : null}
            {artistInfo.selectedNavigationButton === 'similar artist' ? <SimilarArtist artists={artistInfo.similarArtists} /> : null}
          </Grid>
          <Grid item xs={12} sm={1} style={{ paddingLeft: 10 }}>
            {/* <img src={artistInfo.image} alt='artist' /> */}
          </Grid>
        </Grid>
      ) : null}
    </Grid>

    <Grid item xs={12} sm={4}>
      {artistInfo.history !== null ? <History artists={artistInfo.history} /> : null}
    </Grid>
  </Grid>
);

const mapStateToProps = ({ artistInfo }) => ({ artistInfo });

export default connect(mapStateToProps)(HomePage);
