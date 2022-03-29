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
import { Container } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { logout } from '../../store/auth/authThunk';
import ListItemButtonCustom from './ListItemButtonCustom';
import { createTheme } from '@mui/material';

const theme = createTheme();

export const Navbar = () => {
  const css = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const location = useLocation().pathname;

  // console.log('Index location: ', location === '/profile');

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const logoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <Container
        style={{
          height: '100vh',
          backgroundColor: 'white',
          position: 'sticky',
          top: '0',
          color: '#555',
          border: '1px solid #ece7e7',
          padding: '10px 0',
        }}
      >
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
        <div style={{ backgroundColor: theme.palette.primary.main }}>
          {isAuth ? (
            <ListItemButtonCustom
              handleClick={logoutClick}
              component={<Logout className={css.icon} />}
              name={'Logout'}
            />
          ) : (
            <NavLink
              to="/login"
              style={{
                textDecoration: 'none',
                color: 'black',
                alignItems: 'center',
              }}
            >
              <ListItemButtonCustom
                component={<Login className={css.icon} />}
                name={'Login'}
              />
            </NavLink>
          )}
        </div>
      </Container>
    </>
  );
};
