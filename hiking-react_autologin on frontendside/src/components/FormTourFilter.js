import { Box, Button, Container, createTheme, CssBaseline, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { useHandleInputChange } from "../hooks/useHandleInputChange";
import { ThemeProvider } from "@emotion/react";
import DateAdapter from '@mui/lab/AdapterDateFns'; // date-fns
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import { useEffect } from "react";


const theme = createTheme();

const FormTourFilter = (props) => {
  const cb = props.cb;

  const defaultFilterParams = {
    search: '',
    difficulty: 'ALL',
    trail_length_min: 0,
    trail_length_max: 99,
  };

  const [state, handleChange, setState] = useHandleInputChange(defaultFilterParams);

  useEffect(() => {
    // when filter state change
    if (typeof cb === 'function') {
      cb({ ...state }); // call callback
    }
  }, [state]);

  const _handleDateChange = (dateValue) => {
    console.log('_handleDateChange', dateValue);
    setState({
      ...state,
      date: dateValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit')
  };


  return (
    <>
      <div className={"form-login"}>
        <LocalizationProvider dateAdapter={DateAdapter}>
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
                <Typography component="h3" variant="h5">Filter tours</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    label="Filter by keys"
                    name="search"
                    value={state.search}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Trail length min."
                        name="trail_length_min"
                        value={state.trail_length_min}
                        onChange={handleChange}
                        variant="outlined"
                        type="number"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Trail length max."
                        name="trail_length_max"
                        value={state.trail_length_max}
                        onChange={handleChange}
                        variant="outlined"
                        type="number"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  {/*
                  <Select
                    label="Difficulty"
                    name="difficulty"
                    value={state.difficulty}
                    onChange={handleChange}
                  >
                    <MenuItem value={'easy'}>Easy</MenuItem>
                    <MenuItem value={'medium'}>Medium</MenuItem>
                    <MenuItem value={'hard'}>Hard</MenuItem>
                  </Select>
                  */}
                  <FormControl>
                    <FormLabel >Difficulty</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="difficulty"
                      value={state.difficulty}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="ALL" control={<Radio />} label="All" />
                      <FormControlLabel value="EASY" control={<Radio />} label="Easy" />
                      <FormControlLabel value="MEDIUM" control={<Radio />} label="Medium" />
                      <FormControlLabel value="HARD" control={<Radio />} label="Hard" />
                    </RadioGroup>
                  </FormControl>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                  >Add tour</Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </LocalizationProvider>
      </div>
    </>
  );
}

export default FormTourFilter;