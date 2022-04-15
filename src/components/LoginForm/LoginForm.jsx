import { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './loginFromStyle';
import { logInSchema } from '../../utils/helpers/validation';
import { login } from '../../store/auth/authThunk';
import FormControlCustom from '../LoginForm/loginCustomComponents/FormControlCustom';
import FormGroupCustom from '../LoginForm/loginCustomComponents/FormGroupCustom';

export const LoginForm = ({ login }) => {
  const css = useStyles();
  const dispatch = useDispatch();
  const { captcha } = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const { handleChange, handleSubmit, values, status } = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
    validationSchema: logInSchema,
    onSubmit: (values, { setStatus }) => {
      dispatch(login(values));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box className={css.box}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          className={css.form}
        >
          <FormControlCustom
            name={'email'}
            type={'text'}
            text={'Email'}
            value={values.email}
            handleChange={handleChange}
          />
          <FormControlCustom
            name={'password'}
            type={'password'}
            text={'Password'}
            value={values.password}
            handleChange={handleChange}
          />
          <FormGroupCustom
            id={'rememberMe'}
            name={'Remember me'}
            checked={checked}
            handleChecked={handleChecked}
          />
          <div>{captcha && <img src={captcha} alt="captcha" />}</div>
          <div>
            {captcha && (
              <FormControlCustom
                name={'captcha'}
                text={'Captcha'}
                placeholder={'Put the symbols from image'}
                value={values.captcha}
                handleChange={handleChange}
              />
            )}
          </div>
          <div className={css.error}>{status}</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ marginTop: 10 }}
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
