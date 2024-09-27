import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthContext from 'src/context/authContext'; // Adjust the import path as necessary
import { Visibility, VisibilityOff } from '@mui/icons-material';

import UserRoleContext from 'src/context/userRoleContext';

// import {useNax}

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert'; // Import Alert component
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import ToggleButton from '@mui/material/ToggleButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import Router from 'src/routes/sections';

function SignIn() {
  const { setUserRole } = useContext(UserRoleContext);
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

  const [alignment, setAlignment] = React.useState('Student');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
      if (!email) setEmailError('Email is required');
      if (!password) setPasswordError('Password is required');
      return;
    }

    const userData = {
      username_or_email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('https://semguide-zbku.onrender.com/api/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.detail === 'Failed to sign in') {
          setShowAlert(true);
        } else {
          setShowAlert(true);
          throw new Error('Failed to sign in');
        }
      } else {
        const responseData = await response.json();
        localStorage.setItem('token', responseData.refresh);
        localStorage.setItem('atoken', responseData.access);
        localStorage.setItem('user_type', responseData.is_admin);
        const isAdmin = responseData.is_admin;
        setUserRole(isAdmin ? 'admin' : 'user');
        if (alignment === 'Admin') {
          if (isAdmin) {
            console.log('Signed in successfully as an admin');
            login();
            navigate('/');
            window.location.reload();
          } else {
            setShowAlert(true);
            console.error('You are not an admin');
          }
        } else if (isAdmin) {
          setShowAlert(true);
          console.error('Not an User');
        } else {
          console.log('Signed in Succesfully');
          login();
          navigate('/');
          window.location.reload();
        }
      }
    } catch (error) {
      console.error('Sign in error:', error.message);
    }
  };

  const defaultTheme = createTheme();
  const resetErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        style={{
          maxWidth: 500,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '95vh',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} />
          <Typography component="h1" variant="h5">
            Sign in as
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{ mt: 2 }}
          >
            <ToggleButton value="Student">Student</ToggleButton>
            <ToggleButton value="Admin">Admin</ToggleButton>
          </ToggleButtonGroup>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address/Username"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailError !== ''}
              helperText={emailError}
              onChange={resetErrors} // Reset errors on change
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              error={passwordError !== ''}
              helperText={passwordError}
              onChange={resetErrors} // Reset errors on change
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {showAlert && (
              <Alert severity="error" onClose={() => setShowAlert(false)}>
                Incorrect Credentials
              </Alert>
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/sign-up" variant="body2">
                  {`Don't have an account? Sign Up`}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
