/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  ThemeProvider,
} from '@mui/material';
import theme from '../theme';
import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <LandingPage />
      </Container>
    </ThemeProvider>
  );
}