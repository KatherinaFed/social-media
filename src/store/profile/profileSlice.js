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
  },
});


export const { setProfile, setStatus } = profileSlice.actions;
export default profileSlice.reducer;