import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { store } from '../../store/index';
import { login } from '../../store/auth/authThunk';

export const LoginForm = () => {
  const { captcha } = useSelector((state) => state.auth);

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      captcha: '',
    },
    onSubmit: (values, { setStatus }) => {
      
      store.dispatch(
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
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <input
            onChange={handleChange}
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            value={values.email}
          />
        </div>
        <div className="field">
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={values.password}
          />
        </div>
        <div className="field">
          <input
            onChange={handleChange}
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            value={values.rememberMe}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div>{captcha && <img src={captcha} alt="captcha" />}</div>
        <div>
          {captcha && <input
            onChange={handleChange}
            type="text"
            id="captcha"
            name="captcha"
            value={values.captcha}
          />}
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
