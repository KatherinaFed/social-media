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
      const { email, id, login, isAuth } = action.payload;
      
      return {
        ...state,
        userId: id,
        email,
        login,
        isAuth,
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
