import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './headerStyle';
import { store } from '../../store/index';
import { logout } from '../../store/auth/authThunk';

export const Header = () => {
  const css = useStyles();
  const dispatch = useDispatch();
  const { login, isAuth } = useSelector((state) => state.auth);

  const logoutClick = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <Toolbar className={css.toolbar}>
        <Typography variant="h6">Social App</Typography>
        {isAuth ? (
          <div className={css.icons}>
            <Avatar
              alt="Ekaterina"
              src="./assets/person/user1.jpeg"
              className={css.icon}
            />
            <Button onClick={logoutClick} color="inherit" className={css.icon}>
              Logout
            </Button>
          </div>
        ) : (
          <NavLink to="/login">
            <Button color="inherit" className={css.icon}>
              Login
            </Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};
