import { useStyles } from './navbarStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  Chat,
  Settings,
  People,
  Home,
  Logout,
  Login,
} from '@mui/icons-material';
import { Typography, Container, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/auth/authThunk';

export const Navbar = () => {
  const css = useStyles();
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);

  const logoutClick = () => {
    dispatch(logout());
  };

  return (
    <Container className={css.container}>
      <NavLink to="/profile" style={{ textDecoration: 'none' }}>
        <div className={css.item}>
          <Home className={css.icon} />
          <Typography className={css.text}>Homepage</Typography>
        </div>
      </NavLink>
      <NavLink to="/messages" style={{ textDecoration: 'none' }}>
        <div className={css.item}>
          <Chat className={css.icon} />
          <Typography className={css.text}>Messages</Typography>
        </div>
      </NavLink>
      <NavLink to="/users" style={{ textDecoration: 'none' }}>
        <div className={css.item}>
          <People className={css.icon} />
          <Typography className={css.text}>Users</Typography>
        </div>
      </NavLink>
      <div className={css.item}>
        <Settings className={css.icon} />
        <Typography className={css.text}>Settings</Typography>
      </div>
      {isAuth 
        ? (<div className={css.item}>
            <Logout className={css.icon} />
            <Button onClick={logoutClick} color="inherit" className={css.icon}>
              Logout
            </Button>
          </div>)
        : (<NavLink
            to="/login"
            style={{
              textDecoration: 'none',
              color: 'black',
              alignItems: 'center',
            }}>
              <div className={css.item}>
                <Login className={css.icon} />
                <Button color="inherit" className={css.icon}>
                 Login
                </Button>
              </div>
            </NavLink>)}
    </Container>
  );
};
