import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

export const useStyles = makeStyles(() => ({
  form: {
    paddingTop: 1,
    marginTop: '1',
  },
  formControl: {
    margin: 'normal',
  },
  button: {
    marginTop: '3',
    marginBottom: '2',
  },
  error: {
    color: 'red',
  }
}));