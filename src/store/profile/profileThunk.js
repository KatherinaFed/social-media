import { profileAPI } from '../../services/api';
import {
  setProfile,
  setStatus,
  savePhoto,
  saveAvatarOwner,
} from './profileSlice';

// PROFILE
export const getProfileThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setProfile(response));

  if (userId === 21114) {
    dispatch(saveAvatarOwner(response.photos.small));
  }
};

// EDIT PROFILE
export const saveProfileThunk = (profileData, setStatus) => async (
  dispatch,
  getState
) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profileData);
// debugger
  if (response.data.resultCode === 0) {
    dispatch(getProfileThunk(userId));
  } else {
    setStatus(response.data.messages[0]);

    return Promise.reject(response.data.messages[0]);
  }
};

// SAVE PHOTO PROFILE
export const savePhotoThunk = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhoto(response.data.data.photos));
  }
};

// STATUS
export const getStatusThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
};

// UPDATE STATUS
export const updateStatusThunk = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
