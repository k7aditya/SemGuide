import * as React from "react";
// import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import CssBaseline from "@mui/material/CssBaseline";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
// import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

const defaultTheme = createTheme(); 

export default function Forgot() {
  // const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        style={{
          maxWidth: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            px: "50px",
            py: "30px",
          }}
        >
          <Typography component="h1" variant="h5">
            Enter your registered email-id
          </Typography>
          {/* <Typography
            component="h1"
            variant="h6"
            style={{ color: "grey", fontSize: "15px" }}
            sx={{ pt: 1 }}
          >
            We'll send an OTP on your registered email-id
          </Typography> */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address/Username"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Link to="/enter-otp">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Get OTP
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
      {/* <Copyright sx={{ mb: 2 }} /> */}
    </ThemeProvider>
  );
}
