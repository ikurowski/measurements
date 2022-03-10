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
import SignInForm from './SignIn/SignInForm';
import SignUpForm from './SignUp/SignUpForm';
import MainPage from './MainPage/MainPage';
import SideBarMenu from './SideBarMenu/SideBarMenu';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <SideBarMenu />
        <Container maxWidth="sm">
          <Routes>
            <Route path="/" element={<SignInForm />} />
            <Route path="/SignUp" element={<SignUpForm />} />
            <Route path="/Main" element={<MainPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
