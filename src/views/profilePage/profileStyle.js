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
  },
  userImg: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    // position: 'absolute',
    // left: '0',
    // right: '0',
    // margin: 'auto',
    // top: '150px',
    border: '3px solid white',
    backgroundColor: 'white',
  },
  userImgDef: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    position: 'absolute',
    left: '0',
    right: '0',
    margin: 'auto',
    top: '150px',
    border: '3px solid white',
    backgroundColor: 'white',
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
    marginTop: '20px'
  },
  text: {
    fontWeight: '500',
    fontSize: '18px',
  }
}));
