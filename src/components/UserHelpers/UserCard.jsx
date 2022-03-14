import { NavLink } from 'react-router-dom';
import { Avatar, Paper, Typography } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Paper
      elevation={5}
      style={{
        width: '100%',
        // height: '100px',
        borderRadius: '10px',
        margin: '10px',
        padding: '20px',
      }}
    >
      <NavLink to={`/profile/${user.id}`} style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt=""
            src={user.photos.small}
            style={{ width: 56, height: 56, marginRight: '10px' }}
          />
          <Typography
            variant="text"
            style={{
              fontSize: '18px',
              color: 'black',
              fontWeight: '500',
              width: '20%',
            }}
          >
            {user.name}
          </Typography>
          {user.status && (
            <Typography
              variant="text"
              style={{
                fontSize: '18px',
                color: 'black',
                marginLeft: '20px',
                fontWeight: '300',
              }}
            >
              {`Status: ${user.status}`}
            </Typography>
          )}
        </div>
      </NavLink>
    </Paper>
  );
};

export default UserCard;
