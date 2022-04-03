import { makeStyles } from '@mui/styles';
import { theme } from '../../utils/helpers/palette';

export const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    height: '50vh',
    backgroundColor: theme.palette.primary.light,
  },
  headBG: {
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  footer: {
    height: 52,
    display: 'flex',
    border: 'none',
    padding: '0 8px',
    alignItems: 'flex-end',
  },
});
