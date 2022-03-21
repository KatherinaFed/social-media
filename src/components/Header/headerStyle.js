import { makeStyles } from '@mui/styles';
// import { theme } from '../../utils/helpers/palette';
import { createTheme } from '@mui/material';

const theme = createTheme();

export const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
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
