import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './usersStyle';
import { Paginator } from '../../components/Paginator/Paginator';
import { getUsersThunk } from '../../store/users/usersThunk';
import { withAuthNavigate } from '../../utils/helpers/withAuthNavigate';
import UserCard from '../../components/UserHelpers/UserCard';

const UsersPage = () => {
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
          <UserCard user={user} />
        </div>
      ))}
    </>
  );
};

export const UsersContainer = withAuthNavigate(UsersPage);
