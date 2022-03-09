/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { auth, logOut } from '../../firebase';

export default function NavBar() {
  const [LoggedIn, setLoggedIn] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Measurements
          </Typography>
          {LoggedIn ? (
            <>
              <Button disableTouchRipple color="inherit">{auth.currentUser?.email}</Button>
              <Button href="/" onClick={() => logOut()} color="inherit" sx={{ ml: 3 }} startIcon={<LogoutIcon />}>
                Log out
              </Button>
            </>
          ) : <Button href="/" color="inherit"> Login </Button> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
