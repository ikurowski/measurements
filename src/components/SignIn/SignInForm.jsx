/* eslint-disable no-unused-vars */
import {
  Button,
  TextField,
  Typography,
  Link,
} from '@mui/material';

import React from 'react';
import { useFormik } from 'formik';
import SignInValidationSchema from '../../validations/SignInValidation';
import { signIn } from '../../firebase';
import SignInHeader from './SignInHeader';

export default function SignInForm() {
  const formik = useFormik({
    initialValues: {
      email: '', password: '',
    },
    onSubmit: (values) => {
      console.log('123');
      console.log(JSON.stringify(values, null, 2));
      signIn(values.email, values.password);
    },
    validationSchema: SignInValidationSchema,
  });

  return (
    <>
      <SignInHeader />
      <form align="center" onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            sx={{ minWidth: 300, mt: 2 }}
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
            sx={{ minWidth: 300, mt: 2 }}
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
        <Button sx={{ minWidth: 250, mt: 2, mb: 0.2 }} variant="contained" type="submit" id="buttonSignIn">
          Sign In!
        </Button>
        <Typography variant="body2" color>
          Not have an account?
          <Link
            sx={{ pl: 0.2 }}
            href="/SignUp"
            type="button"
          >
            Sign up here.
          </Link>
        </Typography>
      </form>

    </>

  );
}
