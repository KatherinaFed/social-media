import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Header, Navbar } from './components/index';
import {
  Login,
  Profile,
  ProfileContainer,
  Messages,
  Signup,
  UsersContainer,
} from './views/index';

export const App = () => {
  return (
    <div>
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
            <Route path="/messages" element={<Messages />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};
