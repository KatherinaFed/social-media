import { makeStyles } from '@mui/styles';

export const useStylesPost = makeStyles(() => ({
  postWrapper: {
    width: '90%',
    minHeight: '90px',
    borderRadius: '10px',
    margin: '20px 0',
    padding: '20px',
    WebkitBoxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
    boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  deletePost: {
    float: 'right',
  },
  infoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  postImg: {
    width: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  },
  username: {
    fontSize: '16px',
    fontWeight: '600',
    // margin: '0 10px',
  },
  messageWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  messageText: {
    fontWeight: '300',
  },
  likesWrapper: {
    display: 'flex',
    alignItems: 'center',
    // padding: '10px 0 0 10px',
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
