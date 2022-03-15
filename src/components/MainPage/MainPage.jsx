import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { auth } from '../../firebase';
import Human from '../Human/Human';

export default function MainPage() {
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
