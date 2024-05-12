import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { account } from 'src/_mock/account';
import AuthContext from 'src/context/authContext'; // Adjust the import path as necessary

// ----------------------------------------------------------------------

// const MENU_OPTIONS = [
//   {
//     label: 'Home',
//     icon: 'eva:home-fill',
//   },
//   {
//     label: 'Profile',
//     icon: 'eva:person-fill',
//   },
// ];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleLogout = async () => {
    logout();
    window.location.reload();
    const refreshToken = localStorage.getItem('token'); // Assuming the refresh token is stored as 'token' in local storage

    try {
      const response = await fetch('http://127.0.0.1:8000/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (response.ok) {
        localStorage.removeItem('token');
        console.log('successfully logged out');
        navigate('/');
        handleClose();
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 60,
          height: 60,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={account.photoURL}
          alt={account.displayName}
          sx={{
            width: 50,
            height: 50,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {account.displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {/* {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} onClick={handleClose}>
            {option.label}
          </MenuItem>
        ))} */}
        <Link to="/" style={{ textDecoration: 'none', color: '#637381' }}>
          <MenuItem key="Home" onClick={handleClose}>
            Home
          </MenuItem>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none', color: '#637381' }}>
          <MenuItem key="Profile" onClick={handleClose}>
            Profile
          </MenuItem>
        </Link>

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />
        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={() => setLogoutDialogOpen(true)} // Open the dialog
          sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
        >
          Logout
        </MenuItem>
      </Popover>
      <Dialog
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
