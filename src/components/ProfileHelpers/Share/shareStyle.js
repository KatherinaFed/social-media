import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  form: {
    // width: '90%',
    height: '100px',
    borderRadius: '10px',
    marginTop: '20px',
    padding: '20px',
    WebkitBoxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
    boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  shareTop: {
    display: 'flex',
    alignItems: 'center',
  },
  shareInput: {
    borderRadius: 40,
    paddingLeft: 16,
    backgroundColor: 'rgba(0,0,0,0.04)',
    margin: '0 8px',
    width: '90%',
    height: 36,
  },
  shareBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shareOptions: {
    display: 'flex',
    marginLeft: '20px',
  },
  shareOption: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
    cursor: 'pointer',
  },
}));
