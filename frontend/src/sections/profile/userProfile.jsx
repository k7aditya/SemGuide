
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { PhotoCamera } from '@mui/icons-material';
import {
  Grid,
  Stack,
  Alert,
  Select,
  Button,
  Avatar,
  MenuItem,
  TextField,
  IconButton,
  InputLabel,
  FormControl,
} from '@mui/material';




function UserProfile({ user, onChange }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

    const [profilePhoto, setProfilePhoto] = useState(user.photoURL || '');

   const handleProfilePhotoChange = (e) => {
     if (e.target.files && e.target.files[0]) {
       const file = e.target.files[0];
       setProfilePhoto(URL.createObjectURL(file));
       // Handle file upload logic here
     }
   };
  const handleFieldChange = (field, value) => {
    onChange(field, value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };  

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

 const handleSavePassword = () => {
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }
    const auth_token = localStorage.getItem('atoken'); 
    console.log(auth_token)
    fetch('https://semguide-zbku.onrender.com/api/id', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line no-undef
        Authorization: `Bearer ${auth_token}`
      },
      body: JSON.stringify({
        current_password: currentPassword,
        new_password: newPassword,
        confirm_new_password: confirmPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update password');
        }
        // Update password in the state or trigger any necessary actions
        onChange('password', newPassword);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setError('');
        console.log('Password updated successfully');
      })
      .catch((fetchError) => { // Renamed to 'fetchError' to avoid conflict
        console.error('Error updating password:', fetchError);
        setError('Failed to update password. Please try again later.');
      });
  };
  return (
    <Stack spacing={2}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} mb={5}>
          <Avatar alt="Profile Photo" src={profilePhoto} sx={{ width: 150, height: 150 }} />
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="profile-photo"
            type="file"
            onChange={handleProfilePhotoChange}
          />
          {/* <label htmlFor="profile-photo"> */}
          Update Profile Pic
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          {/* </label> */}
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Username"
            id="username"
            fullWidth
            value={user.displayName}
            disabled
            onChange={(e) => handleFieldChange('username', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Email"
            id="email"
            fullWidth
            value={user.email}
            disabled
            onChange={(e) => handleFieldChange('email', e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="branch-label">Branch</InputLabel>
            <Select
              labelId="branch-label"
              id="branch"
              value={user.branch}
              onChange={(e) => handleFieldChange('branch', e.target.value)}
              label="Branch"
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="ITBI">ITBI</MenuItem>
              <MenuItem value="ECE">ECE</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Current Password"
            id="currentPassword"
            fullWidth
            type="password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="New Password"
            id="newPassword"
            fullWidth
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Confirm Password"
            id="confirmPassword"
            fullWidth
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSavePassword}
        sx={{ width: '100%' }}
      >
        Save Password
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
    </Stack>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    branch: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default UserProfile;
