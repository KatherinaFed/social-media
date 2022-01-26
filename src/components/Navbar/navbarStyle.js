import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';

const theme = createTheme();

export const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    backgroundColor: '#6074d8',
    color: 'white',
    paddingTop: theme.spacing(3),
    position: 'sticky',
    top: 0,

    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ece7e7',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
