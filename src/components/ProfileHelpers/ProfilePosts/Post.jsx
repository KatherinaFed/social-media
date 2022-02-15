import { useState } from 'react';
import { useStylesPost } from './postsStyle';
import userImg from '../../../assets/users.png';
import likeIcon from '../../../assets/like.png';
import dislikeIcon from '../../../assets/dislike.png';

const Post = ({ message, likes, photo }) => {
  const css = useStylesPost();

  const [like, setLike] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const likeImg = isLiked ? likeIcon : dislikeIcon;

  return (
    <div className={css.postWrapper}>
      <div className={css.messageWrapper}>
        <img className={css.postImg} src={photo || userImg} alt="userImage" />
        <span>{message}</span>
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
