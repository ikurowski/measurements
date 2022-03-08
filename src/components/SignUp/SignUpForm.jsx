/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Button,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { useFormik } from 'formik';
import userValidationSchema from '../../validations/UserValidation';
import { signUp } from '../../firebase';
import SignUpHeader from './SignUpHeader';

export default function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: '', email: '', password: '', confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      signUp(values.email, values.password);
    },
    validationSchema: userValidationSchema,
  });

  return (
    <>
      <SignUpHeader />
      <form align="center" onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            sx={{ minWidth: 300, mt: 2 }}
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </div>
        <div>
          <TextField
            sx={{ minWidth: 300, mt: 2 }}
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
            sx={{ minWidth: 300, mt: 2 }}
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
            sx={{ minWidth: 300, mt: 2 }}
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

        <Button sx={{ minWidth: 250, mt: 2, mb: 0.2 }} variant="contained" type="submit" id="buttonSignUp">
          Sign up!
        </Button>
      </form>
    </>
  );
}
