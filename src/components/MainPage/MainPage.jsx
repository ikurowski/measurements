import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { auth } from '../../firebase';
import Human from '../Human/Human';

export default function MainPage() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Box>

      <Human />

    </Box>
  );
}
