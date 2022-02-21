import { makeStyles } from '@mui/styles';
import { theme } from '../../utils/helpers/palette';

export const useStyles = makeStyles({
  messagesWrapper: {
    // display: 'flex',
    // flexDirection: 'column',
    height: '70vh',
    // borderRadius: '10px',
    backgroundColor: theme.palette.background.paper,
    // WebkitBoxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
    // boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  headerMessage: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  footer: {
    height: 52,
    display: "flex",
    alignItems: "center",
    border: "none",
    padding: "0 8px"
  },
});
