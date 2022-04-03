import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStylesPost } from './postsStyle';
import userImg from '../../../assets/users.png';
import likeIcon from '../../../assets/like.png';
import dislikeIcon from '../../../assets/dislike.png';
import { deletePost } from '../../../store/profile/profileSlice';
import { Avatar, Container, IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

const Post = ({ id, username, message, likes, photo, isOwner }) => {
  const css = useStylesPost();
  const dispatch = useDispatch();

  const [like, setLike] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const deleteHandler = (postId) => () => {
    dispatch(deletePost(postId));
  };

  const likeImg = isLiked ? likeIcon : dislikeIcon;

  return (
    <Container className={css.postWrapper}>
      {isOwner && (
        <IconButton
          style={{ float: 'right' }}
          aria-label="delete"
          size="small"
          onClick={deleteHandler(id)}
        >
          <Delete />
        </IconButton>
      )}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt="userImage"
          src={photo || userImg}
          sx={{ width: 40, height: 40, marginRight: '10px' }}
        />
        <Typography
          variant="text"
          style={{
            fontSize: '16px',
            fontWeight: '600',
          }}
        >
          {username}
        </Typography>
      </div>
      <div className={css.messageWrapper}>
        <Typography variant="text" className={css.messageText}>
          {message}
        </Typography>
      </div>
      <div className={css.likesWrapper}>
        <Avatar
          alt="like"
          src={likeImg}
          style={{
            width: 26,
            height: 26,
            marginRight: '5px',
            cursor: 'pointer',
          }}
          onClick={likeHandler}
        />
        <Typography variant="text" className={css.likeCounter}>
          {like} likes
        </Typography>
      </div>
    </Container>
  );
};

export default Post;
