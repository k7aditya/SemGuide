import React from "react";
// import OtpInput from "react-otp-input";
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function EnterOTP() {
  // const [otp, setOtp] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log({
      // otp: otp,
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          mt: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "30px",
          }}
        >
          <Typography component="h1" variant="h5" align="center">
            Enter OTP sent to abc@gmail.com
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 3,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              separator={<span>-</span>}
              inputStyle={{
                width: "60px",
                height: "60px",
                margin: "0 5px",
                fontSize: "24px",
                textAlign: "center",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
              renderInput={(index, key) => (
                <input
                  key={key}
                  type="tel"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={1}
                  style={{
                    width: "60px",
                    height: "60px",
                    margin: "0 5px",
                    fontSize: "24px",
                    textAlign: "center",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />
              )}
            /> */}
          </Box>
          <Link to="/change-password">
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Submit
            </Button>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
