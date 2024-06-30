import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Features() {
  return (
    <Container id="features" sx={{ py: { xs: 2, sm: 2 } }}>
      {/* About Us Section */}
      <Box sx={{ textAlign: { xs: 'center', sm: 'start' }, mb: 6 }}>
        <Typography variant="h2" component="div" gutterBottom color="#091553">
          <strong>About Us</strong>
          <hr />
        </Typography>
        <Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: { xs: 'center', sm: 'start' },
              fontSize: 'clamp(1.3rem, 1vw, 1rem)',
              marginBottom: '10px',
              marginTop: '40px',
            }}
          >
            Welcome to SemGuide, your ultimate destination for academic success at IIIT Allahabad.
            We are dedicated to empowering students like you with comprehensive resources tailored
            to your educational journey. Step into our virtual learning environment designed to
            elevate your academic experience.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: { xs: 'center', sm: 'start' },
              fontSize: 'clamp(1.3rem, 1vw, 1rem)',
              marginBottom: '10px',
            }}
          >
            Unlock a treasure trove of valuable resources, from previous year papers to meticulously
            curated notes and reference links. Seamlessly access practice exams to sharpen your
            skills and enhance your understanding of course materials. Dive into educational films
            that supplement your learning and provide valuable insights.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: { xs: 'center', sm: 'start' },
              fontSize: 'clamp(1.3rem, 1vw, 1rem)',
              marginBottom: '10px',
            }}
          >
            Our platform is more than just a repository of information. It is a gateway to academic
            excellence, where you can get access to all the academic resources to boost your semester results
            At SemGuide, we are committed to providing you with the tools and support you need to
            thrive in your studies.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textAlign: { xs: 'center', sm: 'start' },
              fontSize: 'clamp(1.3rem, 1vw, 1rem)',
              marginBottom: '10px',
            }}
          >
            Join us in shaping your educational path and unlocking your full potential. Welcome to
            SemGuide – where success is within reach.
          </Typography>
        </Box>
      </Box>

      {/* How It Works Section */}
      {/* <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          component="div"
          gutterBottom
          color="#091553"
          sx={{
            pt: { xs: 2, sm: 6 },
          }}
        > */}
          {/* <strong>How It Works</strong> */}
        {/* </Typography>
        <img
          src="/path/to/your/image.png"
          alt="We'll have layout here through images of dashboard from switch sem to download 3-4 pics"
          style={{ maxWidth: "100%", height: "auto" }}
        /> */}
      {/* </Box> */}
    </Container>
  );
}
