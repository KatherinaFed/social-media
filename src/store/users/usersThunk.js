import { usersAPI } from '../../services/api';
import { setUsers, setTotalUsersCount, setCurrentPage } from './usersSlice';

export const getUsersThunk = (page, pageSize) => async (dispatch) => {
  // dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  const response = await usersAPI.getUsers(page, pageSize);

  // dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};