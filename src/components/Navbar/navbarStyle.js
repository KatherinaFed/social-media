import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';

const theme = createTheme();

export const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    backgroundColor: '#6074d8',
    color: 'white',
    padding: '10px',
    position: 'sticky',
    top: '0',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ece7e7',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    color: '#000',
    padding: '8px 16px',
    borderRadius: '4px',
    // backgroundColor: '#8894d3',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer',
    },
    '&:hover': {
      color: '#000',
      backgroundColor: '#c9c9c9',
    },
    '&:active': {
      color: '#000',
      backgroundColor: '#f44336',
      textDecoration: 'none',
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
