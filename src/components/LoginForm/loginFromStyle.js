import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

export const useStyles = makeStyles(() => ({
  box: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    padding: 10,
  },
  error: {
    color: 'red',
  },
}));
