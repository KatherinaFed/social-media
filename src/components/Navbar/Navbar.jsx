import { useState } from 'react';
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
import { Typography, Container, ListItemButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/auth/authThunk';
import ListItemButtonCustom from './ListItemButtonCustom';

export const Navbar = () => {
  const css = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const logoutClick = () => {
    dispatch(logout());
  };

  return (
    <Container className={css.container}>
      <NavLink to="/profile" style={{ textDecoration: 'none' }}>
        <ListItemButtonCustom
          index={0}
          selectedIndex={selectedIndex}
          handleClick={handleListItemClick}
          component={<Home className={css.icon} />}
          name={'Homepage'}
        />
      </NavLink>
      <NavLink to="/messages" style={{ textDecoration: 'none' }}>
        <ListItemButtonCustom
          index={1}
          selectedIndex={selectedIndex}
          handleClick={handleListItemClick}
          component={<Chat className={css.icon} />}
          name={'Messages'}
        />
      </NavLink>
      <NavLink to="/users" style={{ textDecoration: 'none' }}>
        <ListItemButtonCustom
          index={2}
          selectedIndex={selectedIndex}
          handleClick={handleListItemClick}
          component={<People className={css.icon} />}
          name={'Users'}
        />
      </NavLink>
      <NavLink to="/settings" style={{ textDecoration: 'none' }}>
      <ListItemButtonCustom
          index={3}
          selectedIndex={selectedIndex}
          handleClick={handleListItemClick}
          component={<Settings className={css.icon} />}
          name={'Settings'}
        />
      </NavLink>
      {isAuth ? (
        <ListItemButton
          onClick={logoutClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#000',
            padding: '8px 16px',
            borderRadius: '4px',
            marginBottom: '10px',
          }}
        >
          <Logout className={css.icon} />
          <Typography className={css.text}>Logout</Typography>
        </ListItemButton>
      ) : (
        <NavLink
          to="/login"
          style={{
            textDecoration: 'none',
            color: 'black',
            alignItems: 'center',
          }}
        >
          <ListItemButton
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#000',
              padding: '8px 16px',
              borderRadius: '4px',
              marginBottom: '10px',
            }}
          >
            <Login className={css.icon} />
            <Typography className={css.text}>Login</Typography>
          </ListItemButton>
        </NavLink>
      )}
    </Container>
  );
};
