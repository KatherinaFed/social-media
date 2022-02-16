import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Header, Navbar } from './components/index';
import {
  Login,
  Profile,
  ProfileContainer,
  MessageContainer,
  // Signup,
  UsersContainer,
} from './views/index';
import { initializeApp } from './store/app/appThunk';
import { Preloader } from './components/Preloader/Preloader';

const useStyles = makeStyles(() => ({
  appBody: {
    maxWidth: '1200px',
    margin: '0 auto',
    border: '1px solid lightgrey',
  },
}));

export const App = () => {
  const css = useStyles();
  const { initialized } = useSelector((state) => state.init);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className={css.appBody}>
      <Header />
      <Grid container>
        <Grid item sm={2}>
          <Navbar />
        </Grid>
        <Grid item sm={10}>
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path="/profile/:id" element={<Profile />} />
            </Route>
            <Route path="/messages" element={<MessageContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};
