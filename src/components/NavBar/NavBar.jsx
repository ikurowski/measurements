import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ScaleIcon from '@mui/icons-material/Scale';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import { auth, logOut } from '../../firebase';

export default function NavBar({ toggleDrawer }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [LoggedIn, setLoggedIn] = useState(false);

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
          <IconButton
            onClick={toggleDrawer(matches ? 'top' : 'left', true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            disabled={!LoggedIn}
          >
            <MenuIcon />
          </IconButton>
          <ScaleIcon
            fontSize="large"
            sx={{ display: { xs: 'flex', sm: 'none' }, flexGrow: 1, ml: LoggedIn ? 11 : 2 }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, ml: 2 }}
          >
            Measurements
          </Typography>
          {LoggedIn ? (
            <>
              <Button
                sx={{ display: { xs: 'none', sm: 'flex' }, ml: 'auto' }}
                disableTouchRipple
                color="inherit"
              >
                {auth.currentUser?.email}
              </Button>
              <Button
                href="/"
                onClick={() => logOut()}
                color="inherit"
                sx={{ ml: 3 }}
                startIcon={<LogoutIcon />}
              >
                Log out
              </Button>
            </>
          ) : (
            <Button sx={{ ml: 'auto' }} href="/" color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

NavBar.propTypes = PropTypes.func.isRequired;
