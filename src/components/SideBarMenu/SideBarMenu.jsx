import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BoyIcon from '@mui/icons-material/Boy';
import NavBar from '../NavBar/NavBar';

// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function SideBarMenu() {
  const [state, setState] = useState({
    top: false,
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' ? 'auto' : 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        <ListItem button>
          <PermIdentityIcon color="secondary" sx={{ mr: 1 }} />
          Profile
        </ListItem>
        <ListItem button component="a" href="/statistics">
          <QueryStatsIcon color="secondary" sx={{ mr: 1 }} />
          Your statistics
        </ListItem>
        <ListItem button component="a" href="/main">
          <BoyIcon color="secondary" sx={{ mr: 1 }} />
          Enter measurements
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <NavBar toggleDrawer={toggleDrawer} />
      {['left', 'top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
