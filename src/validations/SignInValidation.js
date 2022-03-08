import * as Yup from 'yup';

const SignInValidationSchema = Yup.object({

  email: Yup.string().email('Proper E-mail required').required('E-mail required'),
  password: Yup.string()
    .required('Please Enter your password')
    .min(6, 'Password must be at least 6 characters long'),

});

export default SignInValidationSchema;
