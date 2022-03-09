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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from '../theme';
import NavBar from './NavBar/NavBar';
import SignInForm from './SignIn/SignInForm';
import SignUpForm from './SignUp/SignUpForm';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <Router>
          <Routes>
            <Route path="/" element={<SignInForm />} />
            <Route path="/SignUp" element={<SignUpForm />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}
