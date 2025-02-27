import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

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

import AuthContext from 'src/context/authContext';
import { account, populateAccount } from 'src/_mock/account';

export default function AccountPopover() {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  // Local state for user info
  const [user, setUser] = useState({ ...account });

  useEffect(() => {
    const fetchAccount = async () => {
      await populateAccount();
      setUser({ ...account });
    };
    fetchAccount();
  }, []);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = async () => {
    logout();
    window.location.reload();
    const refreshToken = localStorage.getItem('token');

    try {
      const response = await fetch('https://semguide-zbku.onrender.com/logout/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (response.ok) {
        localStorage.removeItem('token');
        console.log('Successfully logged out');
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
          src={user.photoURL || '/default-avatar.jpg'}
          alt={user.displayName || 'User'}
          sx={{
            width: 50,
            height: 50,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {user.displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{ sx: { p: 0, mt: 1, ml: 0.75, width: 200 } }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {user.displayName || 'Loading...'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user.email || ''}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

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
          onClick={() => setLogoutDialogOpen(true)}
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
