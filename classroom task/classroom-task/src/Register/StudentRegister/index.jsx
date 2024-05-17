import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { post } from "../../services/request";
import Swal from 'sweetalert2';
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const validatePassword = (password) => {
  return /^(?=.*\d)(?=.*[A-Z]).{5,}$/.test(password);
};

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const StudentRegister = ({ setRegister, setForm }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddr, setEmailAddr] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = {};

    if (!validateEmail(emailAddr)) {
      formErrors.email = "Invalid email format.";
    }
    if (!validatePassword(password)) {
      formErrors.password = "Password must be at least 5 characters with 1 uppercase letter and 1 number.";
    }

    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    try {
      await post('/students', { firstName, lastName, emailAddr, password });
      Swal.fire({
        title: "Registration Successfully!",
        text: "You have successfully registered as a student.",
        icon: "success"
      });
      setForm('login');
    } catch (err) {
      Swal.fire({
        title: "Registration Failed!",
        text: "Please try again later.",
        icon: "error"
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up Student
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <TextFieldHelper grid={6} name="firstName" label="First Name" value={firstName} onChange={setFirstName} />
              <TextFieldHelper grid={6} name="lastName" label="Last Name" value={lastName} onChange={setLastName} />
              <TextFieldHelper grid={12} name="email" label="Email Address" value={emailAddr} onChange={setEmailAddr} error={errors.email} />
              <TextFieldHelper grid={12} name="password" label="Password" type="password" value={password} onChange={setPassword} error={errors.password} />
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up Student'}
            </Button>
            <Grid container justifyContent="flex-end">
              <Link href="#" variant="body2" onClick={() => setForm('login')}>
                Already have an account? Sign in
              </Link>
              <Button variant="body2" onClick={() => setRegister("teacher")}>
                Register as Teacher
              </Button>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

function TextFieldHelper({ grid, name, label, type = "text", value, onChange, error }) {
  return (
    <Grid item xs={12} sm={grid}>
      <TextField
        autoComplete={name}
        name={name}
        required
        fullWidth
        id={name}
        label={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        error={!!error}
        helperText={error || ''}
      />
    </Grid>
  );
}

export default StudentRegister;
