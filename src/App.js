import { Grid } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Homepage } from './views/homePage/HomePage.jsx';
import { Messages } from './views/messagesPage/MessagesPage';
import { UsersList } from './views/usersPage/UsersList';
import { UserPage } from './views/usersPage/UserPage';
import { Login } from './views/loginPage/LoginPage';

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
            <Route path="/" element={<Homepage />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};
