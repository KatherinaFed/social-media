import { makeStyles, styled } from '@mui/styles';

export const Input = styled('input')({
  display: 'none',
});

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
  profileCover: {
    width: '100%',
    height: '320px',
    position: 'relative',
  },
  coverImg: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
  spanImg: {
    textAlign: 'center',
    position: 'absolute',
    left: '0',
    right: '0',
    margin: 'auto',
    top: '150px',
    width: 'fit-content',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40px',
  },
  username: {
    fontSize: '24px',
  },
  status: {
    fontWeight: '300',
    marginTop: '10px',
  },
  profileDescription: {
    margin: '20px'
  },
  text: {
    fontWeight: '500',
    fontSize: '18px',
  }
}));
