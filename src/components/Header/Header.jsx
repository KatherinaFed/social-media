import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './headerStyle';
import { logout } from '../../store/auth/authThunk';

export const Header = () => {
  const css = useStyles();
  const dispatch = useDispatch();
  
  const { login, isAuth } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  const logoutClick = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <Toolbar className={css.toolbar}>
        <Typography variant="h6">Social App</Typography>
        {isAuth ? (
          <div className={css.icons}>
            <Typography className={css.text} variant="h6">{login}</Typography>
            <Avatar
              alt=""
              src='{profile.photos.small}'
              className={css.icon}
            />
            <Button onClick={logoutClick} color="inherit" className={css.icon}>
              Logout
            </Button>
          </div>
        ) : (
          <NavLink to="/login" style={{ textDecoration: 'none' }}>
            <Button color="inherit" className={css.icon}>
              Login
            </Button>
          </NavLink>
        )}
      </Toolbar>
    </AppBar>
  );
};
