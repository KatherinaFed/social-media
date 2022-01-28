// import { Box, Container, Modal, Typography } from '@mui/material';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useStyles } from './loginStyle';

export const Login = () => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <LoginForm />
    </>
  );
};
