import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme();

export const useStyles = makeStyles(() => ({
  item: {
    display: 'flex',
    padding: '10px',
    marginLeft: '10px',
  },
  avatar: {
    marginBottom: '10px',
  },
}));
