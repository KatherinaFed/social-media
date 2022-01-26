import { Box, Grid } from '@mui/material';
import './app.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Profile } from './pages/profile/Profile';
import { Signup } from './pages/signup/Signup';

export const App = () => {
  return (
    <div>
      <Header />
      <Grid container>
        
      </Grid>
    </div>
  );
};
