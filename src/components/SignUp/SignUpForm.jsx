/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Typography,
  Link,
  Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import SignUpValidationSchema from '../../validations/SignUpValidation';
import { auth, signUp } from '../../firebase';
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
        {ErrorsAPI && <Alert sx={{ margin: 'auto', width: 300 }} severity="error">Wrong e-mail or password</Alert>}
        <div>
          <TextField
            sx={{ minWidth: 300, mt: 3 }}
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
            sx={{ minWidth: 300, mt: 3 }}
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
            sx={{ minWidth: 300, mt: 3 }}
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

        <Button sx={{ minWidth: 250, mt: 3, mb: 0.2 }} variant="contained" type="submit" id="buttonSignUp">
          Sign up!
        </Button>
      </form>
    </>
  );
}
