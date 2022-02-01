import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

export const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#6074d8'
  },
  icons: {
    alignItems: 'center',
    display: 'flex',
    marginRight: theme.spacing(1)
  },
  icon: {
    marginRight: '10px',
  },
  text: {
    marginRight: '10px'
  }
}));
