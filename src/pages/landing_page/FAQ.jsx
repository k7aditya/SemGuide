import * as React from "react";

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-caret-down-fill"
    viewBox="0 0 16 16"
  >
    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
  </svg>
);


export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ArrowIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{
              '& .MuiAccordionSummary-expandIcon': {
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              },
            }}
          >
            <Typography component="h3" variant="subtitle2">
              How can I learn more about the faculty teaching the course?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
              Information about the faculty members teaching each course can be found on the course
              page, including their bio, areas of expertise, and contact information.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ArrowIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{
              '& .MuiAccordionSummary-expandIcon': {
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              },
            }}
          >
            <Typography component="h3" variant="subtitle2">
              Is it possible to change my semester?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
              Yes, you can change your semester by accessing the Semester Change option in your
              account settings. Please note that there may be specific deadlines and procedures for
              semester changes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ArrowIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{
              '& .MuiAccordionSummary-expandIcon': {
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              },
            }}
          >
            <Typography component="h3" variant="subtitle2">
              What should I do if I encounter technical difficulties accessing course materials or
              videos?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
              If you encounter any technical difficulties, please reach out to our technical support
              team for assistance. You can find contact information on our website.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ArrowIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{
              '& .MuiAccordionSummary-expandIcon': {
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
              },
            }}
          >
            <Typography component="h3" variant="subtitle2">
              Can I download the course materials for offline access?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
              Yes, you can download course materials for offline access. Look for download options
              provided next to the course materials on the website.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
