import { FormControl, Box, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material';
import './App.css';
import React from 'react';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';

function App() {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    user: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ border: '1px solid grey' }}>
      <div>
      <FormControl sx={{ display: 'block', m: 1, width: '250px' }} variant="outlined">
          <InputLabel htmlFor="outlined-user">User</InputLabel>
          <OutlinedInput
            id="outlined-user"
            value={values.user}
            onChange={handleChange('user')}
            aria-describedby="outlined-weight-helper-text"
            label="User"
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ display: 'block', m: 1, width: '250px' }} variant="outlined">
          <InputLabel htmlFor="outlined-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button sx={{ display: 'block', m: 1, width: '15ch' }} variant="contained" size='large'>Login</Button>
      </div>
    </Box>
  );
}

export default App;
