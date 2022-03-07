import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    height: '100px',
    borderRadius: '10px',
    margin: '10px 20px 10px 20px',
    padding: '20px',
    // WebkitBoxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
    // boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  shareTop: {
    display: 'flex',
    alignItems: 'center',
  },
  shareProfileImg: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  },
  shareInput: {
    border: 'none',
    width: '80%',
    '&:focus': {
      outline: 'none'
    },
    height: '20px'
  },
  shareHr: {
    margin: '10px',
  },
  shareBottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  shareOptions: {
    display: 'flex',
    marginLeft: '20px'
  },
  shareOption: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
    cursor: 'pointer',
  },
  shareIcon: {
    fontSize: '18px',
    marginRight: '3px'
  },
  shareOptionText: {
    fontSize: '14px',
    fontWeight: '500'
  },
  shareButton: {
    border: 'none',
    padding: '7px',
    borderRadius: '5px',
    backgroundColor: 'green',
    fontWeight: '500',
    marginRight: '20px',
    cursor: 'pointer',
    color: 'white',
  }
}));