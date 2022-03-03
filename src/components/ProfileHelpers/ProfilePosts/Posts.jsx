import { useSelector } from 'react-redux';

import { useStylesPosts } from './postsStyle';
import Post from './Post';

const Posts = () => {
  const css = useStylesPosts();
  const { posts, profile } = useSelector((state) => state.profile);

  const postElements = posts.map(({ id, message, likes }, index) => (
    <Post
      key={index}
      id={id}
      username={profile.fullName}
      message={message}
      likes={likes}
      photo={profile.photos.small}
    />
  ));

  return <div>{postElements}</div>;
};

export default Posts;