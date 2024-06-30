import * as React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import Box from '@mui/material/Box';
import { alpha } from "@mui/material";
import Grid from "@mui/material/Grid"; // Import Grid
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Image from "src/assets/assets/25326158_na_feb_37.jpg"; // Import your image


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h1"
              sx={{
                pt: 0,
                pb: { xs: 2, sm: 2 },
                fontSize: 'clamp(2.5rem, 7vw, 3rem)',
                textAlign: { xs: 'center', sm: 'start' },
                fontFamily: 'Arial, sans-serif',
                color: '#091553',
              }}
            >
              {/* Nothing is ever lost that cannot be found */}
              Grow smarter together
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                pb: { xs: 2, sm: 0 },
                textAlign: { xs: 'center', sm: 'start' },
                fontSize: 'clamp(1.3rem, 1vw, 1rem)',
              }}
            >
              {/* No more waiting for your emails to be answered and an end to the mails spam-o-war.
              Unite with your lost items in just a few clicks! */}
              Embark on an academic adventure filled with boundless knowledge and master your studies with ease ,speed and finesse
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={Image} alt="Student Vector" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link to="/sign-in" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: '1.3rem',
                  width: { xs: '100%', sm: '13rem' },
                  height: { xs: '100%', sm: '3rem' },
                }}
              >
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
