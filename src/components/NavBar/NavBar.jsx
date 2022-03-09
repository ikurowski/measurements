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
import ScaleIcon from '@mui/icons-material/Scale';

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
          <ScaleIcon fontSize="large" sx={{ display: { xs: 'flex', sm: 'none' }, flexGrow: 1 }} />
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
            Measurements
          </Typography>
          {LoggedIn ? (
            <>
              <Button sx={{ display: { xs: 'none', sm: 'flex' }, ml: 'auto' }} disableTouchRipple color="inherit">{auth.currentUser?.email}</Button>
              <Button href="/" onClick={() => logOut()} color="inherit" sx={{ ml: { /* xs: 'auto',  */sm: 3 } }} startIcon={<LogoutIcon />}>
                Log out
              </Button>
            </>
          ) : <Button sx={{ ml: 'auto' }} href="/" color="inherit"> Login </Button> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
