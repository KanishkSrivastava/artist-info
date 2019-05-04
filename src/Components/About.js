import React from 'react';

import Typography from '@material-ui/core/Typography';

const About = ({ artistName, about }) => {
  return (
    <div>
      <Typography variant='h6' gutterBottom>
        {artistName}
      </Typography>
      <Typography variant='body2' gutterBottom align='justify'>
        {about}
      </Typography>
    </div>
  );
};
export default About;
