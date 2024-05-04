import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AppWidgetSummary({
  subjectName,
  subjectShort,
  subjectCode,
  subjectPath,
  sx,
  backgroundImage,
  ...other
}) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        position: 'relative', // Make the card position relative
        overflow: 'hidden', // Hide the overflow for the blurred background
        ...sx,
      }}
      {...other}
    >
      <div
        style={{
          position: 'absolute',
          // top: 0,
          // bottom: 0,    
          right: 20,
          width: '250px',
          height: '300px',
          backgroundImage: `url(${backgroundImage})`,
          filter: 'blur(0px)', // Apply blur filter
          zIndex: -1, // Move the blurred image behind the text
        }}
      />
      <Stack spacing={0.5} zIndex={1} flexGrow={1}>
        {' '}
        {/* Use zIndex to place text above the blurred image */}
        <Typography variant="h6" sx={{ color: 'text' }}>
          {subjectName}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text' }}>
          ({subjectShort})
        </Typography>
      </Stack>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  subjectName: PropTypes.string.isRequired,
  subjectShort: PropTypes.string.isRequired,
  subjectCode: PropTypes.string.isRequired,
  subjectPath: PropTypes.string.isRequired,
  sx: PropTypes.object,
  backgroundImage: PropTypes.string.isRequired, // Add a prop for the background image
};
