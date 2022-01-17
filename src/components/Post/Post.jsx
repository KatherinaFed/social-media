import './post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';

export const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="profile-image"
              className="postProfileImg"
            />
            <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img
            src={post.photo}
            alt="post-image"
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/icons/like.png" alt="like" className="likeIcon" />
            <span className="likeCounter">{post.like} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
