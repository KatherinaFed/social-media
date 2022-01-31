import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    status: '',
  },
  reducers: {
    setProfile(state, action) {
      console.log(action.payload)
      const { profile } = action.payload;
      return {
        ...state,
        profile,
      };
    },
    setStatus(state, action) {
      const { status } = action.payload;
      return {
        ...state,
        status,
      };
    },
  },
});


export const { setProfile, setStatus } = profileSlice.actions;
export default profileSlice.reducer;