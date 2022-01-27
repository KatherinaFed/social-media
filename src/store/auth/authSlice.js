import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null,
  },
  reducers: {
    setAuthData(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    getCaptcha(state, action) {
      return {
        ...state,
        captcha: action.payload,
      };
    },
  },
});

export const { setAuthData, getCaptcha } = authSlice.actions;
export default authSlice.reducer;
