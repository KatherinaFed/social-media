import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
  profileCover: {
    width: '100%',
    height: '320px',
    position: 'relative',
  },
  coverImg: {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  },
  userImg: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'absolute',
    left: '0',
    right: '0',
    margin: 'auto',
    top: '150px',
    border: '3px solid white',
  }
}));
