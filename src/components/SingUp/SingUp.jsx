/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Button, TextField, Typography, Link,
} from '@mui/material';
import { useFormik, Formik } from 'formik';

export default function SingUp() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form align="center" onSubmit={formik.handleSubmit}>
      <div>
        <TextField
          sx={{ minWidth: 300, mt: 2 }}
          id="email"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          sx={{ minWidth: 300, mt: 2 }}
          id="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          variant="outlined"
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
