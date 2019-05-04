import React from 'react';

import Typography from '@material-ui/core/Typography';

const About = ({ artistInfo }) => {
  return (
    <div>
      <Typography variant='h6' gutterBottom>
        {artistInfo.artistName}
      </Typography>
      <Typography variant='body2' gutterBottom align='justify'>
        {artistInfo.about}
      </Typography>
    </div>
  );
};
export default About;
