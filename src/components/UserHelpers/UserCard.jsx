import { NavLink } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';

const UserCard = ({ user }) => {

  return (
    <NavLink to={`/profile/${user.id}`} style={{ textDecoration: 'none' }}>
      <Avatar
        alt=""
        src={user.photos.small}
        style={{ width: 56, height: 56, marginBottom: '10px', }}
      />
      <Typography
        variant="text"
        style={{ fontSize: '16px', color: 'black' }}
      >
        {user.name}
      </Typography>
    </NavLink>
  );
};

export default UserCard;
