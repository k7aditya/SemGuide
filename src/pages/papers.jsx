import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { PapersView } from 'src/sections/papers/view';

  

// ----------------------------------------------------------------------

export default function Papers() {
  const location = useLocation(); // Get the current location object
  const searchParams = new URLSearchParams(location.search);
  const subjectCode = searchParams.get('subjectCode');

  return (
    <>
      <Helmet>
        <title> Papers | SemGuide </title>
      </Helmet>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2} mx={2}>
        <Typography variant="h4">
          📚 Explore, filter, and download your study material with ease! 🚀
        </Typography>

        {/* <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          HI guys
        </Button> */}
      </Stack>
      <PapersView subjectCode={subjectCode}/>
    </>
  );
}
