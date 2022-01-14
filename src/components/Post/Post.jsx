import './post.css';
import { MoreVert } from '@mui/icons-material';

export const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/johnDoe.jpeg"
              alt="profile-image"
              className="postProfileImg"
            />
            <span className="postUsername">John Doe</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey guys! It's my new baby =)</span>
          <img
            src="/assets/post/auto.jpg"
            alt="post-image"
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/icons/like.png" alt="like" className="likeIcon" />
            <span className="likeCounter">102 likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">23 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
