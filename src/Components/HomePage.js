import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import Input from './Input';
import History from './History';
import NavigationButtons from './NavigationButtons';
import About from './About';

const HomePage = ({ artistInfo }) => (
  <Grid container>
    <Grid container style={{ marginBottom: 20 }}>
      <Grid item xs={2} />
      <Grid item xs={5}>
        <Input />
      </Grid>
      <Grid item xs={6} />
    </Grid>
    <Grid item xs={12} sm={8}>
      <Grid container>
        <Grid item xs={12} sm={3} style={{ paddingRight: 15 }}>
          <NavigationButtons selected={artistInfo.selectedNavigationButton} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <About artistInfo={artistInfo} />
        </Grid>
        <Grid item xs={12} sm={1} style={{ paddingLeft: 10 }}>
          {/* <img src={artistInfo.image} alt='artist' /> */}
        </Grid>
      </Grid>
    </Grid>
    <Grid item sm={1} />
    <Grid item xs={12} sm={3}>
      <History />
    </Grid>
  </Grid>
);

const mapStateToProps = ({ artistInfo }) => ({ artistInfo });

export default connect(mapStateToProps)(HomePage);
