// profile-view.jsx
import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { account } from 'src/_mock/account';

import UserProfile from './userProfile';

export default function ProfileView() {
  // const initialUser = {
  //   displayName: 'k7aditya',
  //   email: 'k7aditya@gmail.com',
  //   branch: 'IT',
  //   photoURL: '/src/assets/assets/books.jpg'
  // };
  const [user, setUser] = useState(account);

  const handleChange = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const handleSave = () => {
    // Implement saving logic here, e.g., send updated user data to the server

    console.log('Saving user:', user);
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h3">Profile</Typography>
        <Button onClick={handleSave} variant='contained'>
          <Typography variant="subtitle1">Save Changes</Typography>
        </Button>
      </Stack>
        <UserProfile user={user} onChange={handleChange}/>
    </Container>
  );
}
