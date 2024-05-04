// AppView.jsx
import PropTypes from 'prop-types'; // Import PropTypes
import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import appConfigSem1 from 'src/layouts/dashboard/config-appSem1';
import appConfigSem2 from 'src/layouts/dashboard/config-appSem2';
import appConfigSem3 from 'src/layouts/dashboard/config-appSem3';
import appConfigSem4 from 'src/layouts/dashboard/config-appSem4';

import AppWidgetSummary from '../app-widget-summary';

const widgetStyles = {
  height: '250px',
};
// Import statements...

export default function AppView({ selectedSemester }) {
  // Determine the semester configuration based on the selected semester
  let Sem;
  switch (selectedSemester) {
    case 1: // Change cases to expect numbers instead of strings
      Sem = appConfigSem1;
      break;
    case 2:
      Sem = appConfigSem2;
      break;
    case 3:
      Sem = appConfigSem3;
      break;
    case 4:
      Sem = appConfigSem4;
      break;
    default:
      Sem = appConfigSem1; // Default to semester 1 if no match
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Welcome back 👋 Just select a subject to get started!
      </Typography>
      <Grid container spacing={3}>
        {Sem.map((widget, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <div style={{ height: '100%' }}>
              <Link
                to={{
                  pathname: '/papers',
                  search: `?subjectCode=${widget.subjectCode}`,
                }}
                style={{ textDecoration: 'none' }}
              >
                <AppWidgetSummary
                  subjectName={widget.subjectName}
                  subjectShort={widget.subjectShort}
                  subjectCode={widget.subjectCode}
                  subjectPath={widget.subjectPath}
                  backgroundImage={widget.image} // Pass the widget image as the backgroundImage prop
                  sx={widgetStyles}
                />
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

AppView.propTypes = {
  selectedSemester: PropTypes.number.isRequired, // Change the prop type to number
};
