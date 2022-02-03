import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
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
