import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useStylesPost } from './postsStyle';
import userImg from '../../../assets/users.png';
import likeIcon from '../../../assets/like.png';
import dislikeIcon from '../../../assets/dislike.png';
import { deletePost } from '../../../store/profile/profileSlice';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const Post = ({ id, username, message, likes, photo, photoOwner, isOwner }) => {
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
    <div className={css.postWrapper}>
      {isOwner && (
        <div className={css.deletePost}>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={deleteHandler(id)}
          >
            <Delete />
          </IconButton>
        </div>
      )}
      <div className={css.infoWrapper}>
        <img className={css.postImg} src={photo || userImg} alt="userImage" />
        <span className={css.username}>{username}</span>
      </div>
      <div className={css.messageWrapper}>
        <p className={css.messageText}>{message}</p>
      </div>
      <div className={css.likesWrapper}>
        <img
          src={likeImg}
          alt="like"
          className={css.likeIcon}
          onClick={likeHandler}
        />
        <span className={css.likeCounter}>{like} likes</span>
      </div>
    </div>
  );
};

export default Post;
