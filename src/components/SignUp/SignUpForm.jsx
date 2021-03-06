import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import SignUpValidationSchema from '../../validations/SignUpValidation';
import { signUp } from '../../firebase';
import SignUpHeader from './SignUpHeader';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpForm() {
  const [registerIn, setRegisterIn] = useState(null);
  const [ErrorsAPI, setErrorsAPI] = useState('');

  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values) => {
      signUp(values.email, values.password, setErrorsAPI, setRegisterIn);
    },
    validationSchema: SignUpValidationSchema,
  });

  return (
    <>
      {registerIn && <Navigate to="/Main" />}
      <SignUpHeader />
      <form align="center" onSubmit={formik.handleSubmit}>
        {ErrorsAPI && <Alert sx={{ margin: 'auto', width: { md: 300, xs: 240 } }} severity="error">Wrong e-mail or password</Alert>}
        <div>
          <TextField
            aria-label="email field"
            sx={{ minWidth: { md: 300, xs: 240 }, mt: 3 }}
            id="emailSignUp"
            name="email"
            label="E-mail"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div>
          <TextField
            aria-label="password field"
            sx={{ minWidth: { md: 300, xs: 240 }, mt: 3 }}
            id="passwordSignUp"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div>
          <TextField
            aria-label="confirm password field"
            sx={{ minWidth: { md: 300, xs: 240 }, mt: 3 }}
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
        </div>

        <Button aria-label="sign up button" sx={{ minWidth: { md: 250, xs: 200 }, mt: 3, mb: 0.2 }} variant="contained" type="submit" id="buttonSignUp">
          Sign up!
        </Button>
      </form>
    </>
  );
}
