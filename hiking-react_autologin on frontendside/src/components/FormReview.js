import { Box, Button, Container, createTheme, CssBaseline, Rating, TextField, Typography } from "@mui/material";
import { useHandleInputChange } from "../hooks/useHandleInputChange";
import { ThemeProvider } from "@emotion/react";


const theme = createTheme();

const FormReview = (props) => {

  const preset = {
    rating: 0,
    review: 'something something',
  };

  const [state, handleChange, setState] = useHandleInputChange(preset);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit')
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
                // height: 300,
                // backgroundColor: 'primary.dark',
                /*
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
                */
              }}>
              <Typography component="h1" variant="h4">Your tour review</Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Typography component="legend">Rate tour</Typography>
                <Rating
                  label="Rate tour"
                  name="rating"
                  value={state.rating}
                  onChange={handleChange}
                />
                <TextField
                  label="Review"
                  name="review"
                  value={state.review}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={8}
                  margin="normal"
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >Submit review</Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}

export default FormReview;