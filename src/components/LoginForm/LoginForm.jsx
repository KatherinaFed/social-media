import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './loginFromStyle';
import { logInSchema } from '../../utils/helpers/validation';
import { login } from '../../store/auth/authThunk';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const css = useStyles();
  const { captcha } = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };
  console.log(checked)

  const { handleChange, handleSubmit, values, status } = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
    validationSchema: logInSchema,
    onSubmit: (values, { setStatus }) => {
      dispatch(
        login(
          values.email,
          values.password,
          values.rememberMe,
          values.captcha,
          setStatus
        )
      );
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ p: 1, mt: 1 }}
        >
          <FormControl margin="normal" required fullWidth size="small">
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <OutlinedInput
              id="email"
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
              label="email"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth size="small">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              label="password"
            />
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id="rememberMe"
                  size="small"
                  checked={checked}
                  onChange={handleChecked}
                />
              }
              label="Remember me"
            />
          </FormGroup>

          <div>{captcha && <img src={captcha} alt="captcha" />}</div>
          <div>
            {captcha && (
              <FormControl margin="normal" required fullWidth>
                <Input
                  id="captcha"
                  name="captcha"
                  placeholder="Put the symbols from image"
                  type="text"
                  value={values.captcha}
                  onChange={handleChange}
                />
              </FormControl>
            )}
          </div>
          <div className={css.error}>{status}</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
