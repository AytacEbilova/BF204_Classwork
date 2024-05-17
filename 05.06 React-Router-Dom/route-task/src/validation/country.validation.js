import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullname: Yup.string().min(5).matches(/^[A-Z][a-z0-9_-]{3,19}$/, 'The first character should be uppercase').required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  title: Yup.string().required('Title is required'),
  message: Yup.string().required('Message is required'),
});

export default SignupSchema;
