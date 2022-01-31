import { usersAPI } from '../../services/api';
import { setUsers, setTotalUsersCount, setCurrentPage } from './usersSlice';


export const getUsersThunk = (page, pageSize) => async (dispatch) => {
  // dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  const response = await usersAPI.getUsers(page, pageSize);
  console.log(response)

  // dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};


// TEST GET USERS API
// export const getUsersThunkTest = () => async (dispatch) => {
//   const response = await usersAPI.getUsers();
//   console.log(response) // {items: Array(10), totalCount: 17193, error: null}
//   dispatch(setUsers(response.items)) // Users (items)
// }