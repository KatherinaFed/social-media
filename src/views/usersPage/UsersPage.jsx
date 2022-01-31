import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Avatar, Typography } from '@mui/material';
import { useStyles } from './usersStyle';
import { Paginator } from '../../components/Paginator/Paginator';
import { getUsersThunk } from '../../store/users/usersThunk';

export const UsersPage = () => {
  const css = useStyles();
  const { users, pageSize, totalUsersCount, currentPage } = useSelector(
    (state) => state.users
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(currentPage, pageSize));
  }, [currentPage, pageSize, dispatch]);

  const onPageChanged = (currentPage) => {
    dispatch(getUsersThunk(currentPage, pageSize));
  };

  return (
    <>
      <Paginator
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        onPageChanged={onPageChanged}
      />
      {users.map((user, i) => (
        <div key={i} className={css.item}>
          <NavLink
            to={`/profile/${user.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Avatar
              alt=""
              src={user.photos.small}
              className={css.avatar}
              style={{ width: 56, height: 56 }}
            />
            <Typography
              variant="text"
              className={css.text}
              style={{ fontSize: '16px', color: 'black' }}
            >
              {user.name}
            </Typography>
          </NavLink>
        </div>
      ))}
    </>
  );
};
