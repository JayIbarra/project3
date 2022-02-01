import { useDispatch } from "react-redux";
import { useHandleInputChange } from "../hooks/useHandleInputChange";
import { actionAuthRegister } from "../redux/actions";
import { Box, Button, Container, createTheme, CssBaseline, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme();


const FormRegister = (props) => {
  const dispatch = useDispatch();

  const preset = {
    username: 'Abc',
    password: 123465
  };

  const [state, handleChange, setState] = useHandleInputChange(preset);

  const validator = (state) => {
    let test = true;

    if (!state.username || typeof state.username !== 'string' || state.username.length < 4) {
      test = false;
    }
    if (!state.password || typeof state.password !== 'string' || state.password === '') {
      test = false;
    }

    return test;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit');
    if (validator(state)) {
      // validated
      console.log('handle submit validated');
      dispatch(actionAuthRegister(state));
    }
  };


  return (
    <>
      <div className={"form-login"}>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                width: 300,
                height: 300,
                // backgroundColor: 'primary.dark',
                /*
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
                */
              }}>
              <Typography component="h1" variant="h4">Register</Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  label="Username"
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  label="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >Sign Up</Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}

export default FormRegister;