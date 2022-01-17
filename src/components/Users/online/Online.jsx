import './online.css';

export const Online = ({ user }) => {
  return (
    <>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={user.profilePicture}
            alt="friend-profile-img"
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </>
  );
}
