import { Post } from '../Post/Post';
import { Share } from '../Share/Share';
import './feed.css';

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
};
