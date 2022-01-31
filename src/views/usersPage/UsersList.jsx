import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paginator } from '../../components/Paginator/Paginator';
import { getUsersThunk } from '../../store/users/usersThunk';
import { UserPage } from '../usersPage/UserPage';

export const UsersList = () => {
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
    <div>
      <Paginator
        onPageChanged={onPageChanged}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
      />
      {users.map((user, i) => (
        <UserPage key={i} user={user} />
      ))}
    </div>
  );
};
