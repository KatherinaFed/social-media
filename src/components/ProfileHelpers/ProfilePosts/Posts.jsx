import { useSelector } from 'react-redux';
import Post from './Post';

const Posts = ({ isOwner }) => {
  const { posts, profile, avatar } = useSelector((state) => state.profile);

  const postElements = posts
    .map(({ id, message, likes }, index) => (
      <Post
        key={index}
        id={id}
        username={profile.fullName}
        message={message}
        likes={likes}
        photo={profile.photos.small}
        photoOwner={avatar}
        isOwner={isOwner}
      />
    ))
    .reverse();

  return <div>{postElements}</div>;
};

export default Posts;
