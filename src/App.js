import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Homepage } from './views/homePage/HomePage.jsx';
import { Messages } from './views/messagesPage/MessagesPage';
import { UsersPage } from './views/usersPage/UsersPage';
import { Login } from './views/loginPage/LoginPage';
import { Profile } from './views/profilePage/ProfilePage';

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
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};
