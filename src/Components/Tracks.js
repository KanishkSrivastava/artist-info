import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';

const Tracks = ({ tracks }) => (
  <Grid container>
    {tracks.map(track => {
      return (
        <Grid item key={track.name} xs={12} sm={6} onClick={() => window.open(track.url, '_blank')} style={{ cursor: 'pointer' }}>
          <Card style={{ margin: 10 }}>
            <Grid container direction='row' alignItems='center'>
              <Grid item xs={8}>
                <CardContent>
                  <Typography variant='h6'>{track.name}</Typography>
                </CardContent>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={2}>
                <Typography variant='caption'>
                  <PlayIcon />
                  <div>{track.playcount}</div>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      );
    })}
  </Grid>
);
export default Tracks;
