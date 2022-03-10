import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { auth } from '../../firebase';
import { ReactComponent as Human } from '../../assets/Human.svg';

export default function MainPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
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
      <Human style={{
        width: matches ? '18rem' : '25rem', height: '100%', margin: '0 auto', marginTop: '3rem', display: 'block',
      }}
      />
    </Box>
  );
}
