import React from 'react';
import {
  CssBaseline,
  Container,
  ThemeProvider,
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from '../theme';
import SignInForm from './SignIn/SignInForm';
import SignUpForm from './SignUp/SignUpForm';
import MainPage from './MainPage/MainPage';
import SideBarMenu from './SideBarMenu/SideBarMenu';
import StatisticsTab from './StatisticsTab/StatisticsTab';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <SideBarMenu />
        <Container>
          <Routes>
            <Route path="/" element={<SignInForm />} />
            <Route path="/SignUp" element={<SignUpForm />} />
            <Route path="/Main" element={<MainPage />} />
            <Route path="/Statistics" element={<StatisticsTab />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
