import { TextField } from '@mui/material';
import { useFormik } from 'formik';

export const LoginForm = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      login: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: (values) => {
      console.log(values)
    }
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
        <input
          onChange={handleChange}
          type="text"
          id="login"
          name="login"
          placeholder="Login"
          value={values.name}
        />
        </div>
        <div className="field">
        <input
          onChange={handleChange}
          type="text"
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
        <button type="submit">Login</button>
      </form>
    </>
  );
};
