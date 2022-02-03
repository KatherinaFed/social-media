import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    status: '',
  },
  reducers: {
    setProfile(state, action) {
      return {
        ...state,
        profile: action.payload,
      };
    },
    setStatus(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
    savePhoto(state, action) {
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload },
      };
    },
    saveProfile(state, action) {
      return {
        ...state,
        profile: { ...state.profile, properties: action.payload },
      };
    },
  },
});

export const {
  setProfile,
  setStatus,
  savePhoto,
  saveProfile,
} = profileSlice.actions;
export default profileSlice.reducer;
