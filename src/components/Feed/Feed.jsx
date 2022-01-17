import { Post } from '../Post/Post';
import { Share } from '../Share/Share';
import { Posts } from '../../dummyData';
import './feed.css';

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};
