import { usersAPI, subscribeAPI } from '../../services/api';
import {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  follow,
  unfollow,
  toggleIsFetching,
  toggleFollowingInProgress,
} from './usersSlice';

export const getUsersThunk = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));

  const response = await usersAPI.getUsers(page, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};

// function flow for FOLLOW and UNFOLLOW thunks
const subscriberHelper = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingInProgress({ isFetching: true, id: userId }));

  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(toggleFollowingInProgress({ isFetching: false, id: userId }));
};

// FOLLOW THUNK
export const followThunk = (userId) => async (dispatch) => {
  const apiMethod = subscribeAPI.followUsers.bind(subscribeAPI);

  subscriberHelper(dispatch, userId, apiMethod, follow);
};

// UNFOLLOW THUNK
export const unfollowThunk = (userId) => async (dispatch) => {
  const apiMethod = subscribeAPI.unfollowUsers.bind(subscribeAPI);

  subscriberHelper(dispatch, userId, apiMethod, unfollow);
};
