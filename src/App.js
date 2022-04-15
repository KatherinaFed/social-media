import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { store } from './store/index';

import { Header, Navbar } from './components/index';
import {
  Login,
  Profile,
  ProfileContainer,
  Message,
  SettingsContainer,
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
            <Route path="/messages" element={<Message />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<SettingsContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export const RunApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
};
