import {useStyles} from './navbarStyle';
import { Chat, Settings, People, Home } from '@mui/icons-material';
import { Typography, Container } from '@mui/material';

export const Navbar = () => {
  const css = useStyles();
  return (
    <Container className={css.container}>
      <div className={css.item}>
        <Home className={css.icon} />
        <Typography className={css.text}>Homepage</Typography>
      </div>
      <div className={css.item}>
        <Chat className={css.icon} />
        <Typography className={css.text}>Messages</Typography>
      </div>
      <div className={css.item}>
        <People className={css.icon} />
        <Typography className={css.text}>Users</Typography>
      </div>
      <div className={css.item}>
        <Settings className={css.icon} />
        <Typography className={css.text}>Settings</Typography>
      </div>
    </Container>
  );
};
