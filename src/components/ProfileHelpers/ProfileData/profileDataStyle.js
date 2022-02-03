import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

export const useStyles = makeStyles(() => ({
  profileItem: {
    marginTop: '10px',
  },
  textItem: {
    fontSize: '16px',
    marginBottom: '10px'
  },
  textDescription: {
    fontWeight: '300'
  }
}));