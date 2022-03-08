/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from '../SignIn/SignInForm';
import SignUpForm from '../SignUp/SignUpForm';

export default function LandingPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/SignUp" element={<SignUpForm />} />
      </Routes>
    </Router>

  );
}
