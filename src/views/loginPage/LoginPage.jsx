import { Container, Modal } from '@mui/material';
import { useState } from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useStyles } from './loginStyle';

// export const Login = () => {
//   return <div className='login'>
//     <div className="loginWrapper">
//       <div className="loginLeft">
//         <h3 className="loginLogo">Social App</h3>
//         <span className="loginDesc">Connect with friends and the world around you on Social App.</span>
//       </div>
//       <div className="loginRight">
//         <div className="loginBox">
//           <input placeholder='email' className="loginInput"/>
//           <input placeholder='password' className="loginInput"/>
//           <button className="loginButton">Log In</button>
//           <span className="loginForgot">Forgot Password?</span>
//           <button className="loginRegisterButton">Create a new account</button>
//         </div>
//       </div>
//     </div>
//   </div>;
// };

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
