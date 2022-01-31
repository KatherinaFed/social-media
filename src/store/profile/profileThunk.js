import { profileAPI } from '../../services/api';
import { setProfile, setStatus } from './profileSlice';

export const getProfileThunk = (userId) => async (dispatch) => {
  debugger
  const response = await profileAPI.getProfile(userId);
  console.log('getProfileThunk', response)

  dispatch(setProfile(response));
};

// export const getStatusThunk = (userId) => async (dispatch) => {
//   const response = await profileAPI.getStatus(userId);

//   dispatch(setStatus(response.data));
// };