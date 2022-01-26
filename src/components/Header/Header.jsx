import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import { useStyles } from './headerStyle';

export const Header = () => {
  const css = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={css.toolbar}>
        <Typography variant="h6">Social App</Typography>
        <div className={css.icons}>
          <Avatar
            alt="Ekaterina"
            src="./assets/person/user1.jpeg"
            className={css.icon}
          />
          <Button color="inherit" className={css.icon}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
