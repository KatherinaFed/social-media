import './closeFriends.css';

export const CloseFriends = ({ user }) => {
  return (
    <>
      <li className="sidebarFriend">
        <img
          className="sidebarFriendImg"
          src={user.profilePicture}
          alt={user.username}
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </>
  );
};
