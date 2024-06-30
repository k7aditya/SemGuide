import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Import info for different semesters
import infoSem1 from './infoSem1';
import infoSem2 from './infoSem2';

export default function InfoView({ selectedSemester }) {
  let semInfo;

  // Determine which semester information to display based on the selected semester
  switch (selectedSemester) {
    case 1:
      semInfo = infoSem1;
      break;
    case 2:
      semInfo = infoSem2;
      break;
    default:
      semInfo = infoSem1; 
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="h4">
          Crucial Information/Advice for Semester {selectedSemester} 💡
        </Typography>
      </Stack>
      <hr />
      {semInfo.map((info, index) => (
        <Stack key={index}>
          <Typography variant="h6">General:</Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: info.general }} />
          <Typography variant="h6">
            <hr />
            Academic:
          </Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: info.academic }} />
        </Stack>
      ))}
    </Container>
  );
}

InfoView.propTypes = {
  selectedSemester: PropTypes.number.isRequired, // Change the prop type to number
};
