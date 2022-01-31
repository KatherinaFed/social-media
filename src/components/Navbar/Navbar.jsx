import { useStyles } from './navbarStyle';
import { Chat, Settings, People, Home } from '@mui/icons-material';
import { Typography, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const css = useStyles();

  return (
    <Container className={css.container}>
      <NavLink to="/profile">
        <div className={css.item}>
          <Home className={css.icon} />
          <Typography className={css.text}>Homepage</Typography>
        </div>
      </NavLink>
      <NavLink to="/messages">
        <div className={css.item}>
          <Chat className={css.icon} />
          <Typography className={css.text}>Messages</Typography>
        </div>
      </NavLink>
      <NavLink to="/users">
        <div className={css.item}>
          <People className={css.icon} />
          <Typography className={css.text}>Users</Typography>
        </div>
      </NavLink>
      <div className={css.item}>
        <Settings className={css.icon} />
        <Typography className={css.text}>Settings</Typography>
      </div>
    </Container>
  );
};
