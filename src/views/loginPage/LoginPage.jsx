import { Container, Modal } from '@mui/material';
import { useState } from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useStyles } from './loginStyle';

export const Login = () => {
  const [open, setOpen] = useState(true);
  const css = useStyles();
  
  return (
    <>
      {/* <Modal open={open}> */}
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social App.
          </span>
        </div>
        <Container>
          <LoginForm />
        </Container>
      {/* </Modal> */}
    </>
  );
};
