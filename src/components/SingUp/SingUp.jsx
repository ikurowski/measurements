/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Button,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { useFormik, Formik } from 'formik';
import userValidationSchema from '../../validations/UserValidation';

export default function SingUp() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      // alert(JSON.stringify(values, null, 2));
    },
    validationSchema: userValidationSchema,
  });

  return (
    <form align="center" onSubmit={formik.handleSubmit}>
      <div>
        <TextField
          sx={{ minWidth: 300, mt: 2 }}
          id="email"
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
          id="password"
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

      <Button sx={{ minWidth: 250, mt: 2, mb: 0.2 }} variant="contained" type="submit" id="button">
        Sign in!
      </Button>
      <Typography variant="body2" color>
        Not have an account?
        <Link
          sx={{ pl: 0.2 }}
          href="#button"
          component="button"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          Sign up here.
        </Link>
      </Typography>
    </form>
  );
}
