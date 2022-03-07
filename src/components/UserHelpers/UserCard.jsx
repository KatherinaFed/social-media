import { NavLink } from 'react-router-dom';
import { Avatar, Card, Paper, Typography } from '@mui/material';
import { useStyles } from './userCardStyle';

const UserCard = ({ user }) => {
  const css = useStyles();

  const status = !user.status && 'Status is empty';

  return (
    <Paper
      elevation={5}
      style={{
        width: '100%',
        height: '100px',
        borderRadius: '10px',
        margin: '10px',
        padding: '20px',
      }}
    >
      <NavLink to={`/profile/${user.id}`} style={{ textDecoration: 'none' }}>
        <Avatar
          alt=""
          src={user.photos.small}
          style={{ width: 56, height: 56, marginBottom: '10px' }}
        />
      </NavLink>
      <Typography
        variant="text"
        style={{ fontSize: '18px', color: 'black', fontWeight: '500' }}
      >
        {`Name: ${user.name}`}
      </Typography>

      <Typography
        variant="text"
        style={{
          fontSize: '18px',
          color: 'black',
          marginLeft: '20px',
          fontWeight: '300',
        }}
      >
        {`Status: ${status}`}
      </Typography>
    </Paper>
  );
};

export default UserCard;
