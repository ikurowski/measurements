import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, TextField, Typography, Link, Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import SignInValidationSchema from '../../validations/SignInValidation';
import { signIn, auth } from '../../firebase';
import SignInHeader from './SignInHeader';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const [ErrorsAPI, setErrorsAPI] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate('/Main');
      }
    });
    return unsubscribe;
  }, []);

  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    onSubmit: (values) => {
      signIn(values.email, values.password, setErrorsAPI);
    },
    validationSchema: SignInValidationSchema,
  });

  return (
    <>
      <SignInHeader />
      <form align="center" onSubmit={formik.handleSubmit}>
        {ErrorsAPI && <Alert sx={{ margin: 'auto', width: { md: 300, xs: 240 } }} severity="error">Wrong e-mail or password</Alert>}
        <div>
          <TextField
            sx={{ minWidth: { md: 300, xs: 240 }, mt: 3 }}
            id="emailSignIn"
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
            sx={{ minWidth: { md: 300, xs: 240 }, mt: 3 }}
            id="passwordSignIn"
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
        <Button
          sx={{ minWidth: { md: 250, xs: 200 }, mt: 3, mb: 0.2 }}
          variant="contained"
          type="submit"
          id="buttonSignIn"
        >
          Sign In!
        </Button>
        <Typography fontSize={{ xs: 'small', md: 16 }} variant="body2" color>
          { 'Don\'t have an account?'}
          <Link sx={{ pl: 0.2 }} href="/SignUp" type="button">
            Sign up here.
          </Link>
        </Typography>
      </form>
    </>
  );
}
