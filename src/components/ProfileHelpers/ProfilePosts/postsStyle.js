import { makeStyles } from '@mui/styles';

export const useStylesPost = makeStyles(() => ({
  postWrapper: {
    width: '90%',
    height: '70px',
    borderRadius: '10px',
    marginTop: '20px',
    padding: '20px',
    WebkitBoxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
    boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  messageWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  postImg: {
    width: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  },
  likesWrapper: {
    display: 'flex',
    alignItems: 'center',
    float: 'right'
  },
  likeIcon: {
    width: '26px',
    height: '26px',
    marginRight: '5px',
    cursor: 'pointer',
  },
  likeCounter: {
    fontSize: '15px',
  },
}));

export const useStylesPosts = makeStyles(() => ({
  wrapper: {
    padding: '10px',
  },
}));
