import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export const Login = () => {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth)

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <LoginForm />
    </>
  );
};
