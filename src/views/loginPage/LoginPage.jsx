import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { login } from '../../store/auth/authThunk';

export const Login = () => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <LoginForm login={login} />
    </>
  );
};
