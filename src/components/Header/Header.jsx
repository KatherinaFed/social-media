import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './headerStyle';


export const Header = () => {
  const css = useStyles();

  const { login, isAuth } = useSelector((state) => state.auth);

  return (
    <AppBar position="static">
      <Toolbar className={css.toolbar}>
        <Typography variant="h6">Social App</Typography>
        {isAuth && (
          <div className={css.icons}>
            <Typography className={css.text} variant="h6">
              {login}
            </Typography>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
