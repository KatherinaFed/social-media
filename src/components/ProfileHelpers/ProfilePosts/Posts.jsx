import { useSelector } from 'react-redux';

import { useStylesPosts } from './postsStyle';
import Post from './Post';

const Posts = () => {
  const css = useStylesPosts();
  const { posts, profile } = useSelector((state) => state.profile);

  const postElements = posts.map(({ id, message, likes }) => (
    <Post
      key={id}
      message={message}
      likes={likes}
      photo={profile.photos.small}
    />
  ));

  return <div>{postElements}</div>;
};

export default Posts;
