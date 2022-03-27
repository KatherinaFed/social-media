import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Avatar, Button, Paper, Typography } from '@mui/material';
import { followThunk, unfollowThunk } from '../../store/users/usersThunk';

const UserCard = ({ user }) => {
  const { followingInProgress } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const followClick = () => {
    dispatch(followThunk(user.id));
  };

  const unfollowClick = () => {
    dispatch(unfollowThunk(user.id));
  };

  return (
    <Paper
      elevation={5}
      style={{
        display: 'flex',
        width: '100%',
        borderRadius: '10px',
        margin: '10px',
        padding: '20px',
      }}
    >
      <NavLink
        to={`/profile/${user.id}`}
        style={{ textDecoration: 'none', width: 'inherit' }}
      >
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
                marginLeft: '50px',
                fontWeight: '300',
              }}
            >
              {`Status: ${user.status}`}
            </Typography>
          )}
        </div>
      </NavLink>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {user.followed ? (
          <Button
            variant="outlined"
            style={{ marginLeft: 'auto' }}
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={unfollowClick}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{ marginLeft: 'auto' }}
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={followClick}
          >
            Follow
          </Button>
        )}
      </div>
    </Paper>
  );
};

export default UserCard;
