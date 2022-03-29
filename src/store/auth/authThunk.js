import { authAPI, securityAPI } from '../../services/api';
import { setAuthData, getCaptcha } from './authSlice';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.isAuth();

  if (response.resultCode === 0) {
    dispatch(setAuthData(response.data));
  }
};

export const login = (
  email,
  password,
  rememberMe,
  captcha,
  setStatus
) => async (dispatch) => {
  
  const response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else if (response.resultCode === 10) {
    dispatch(getCaptchaUrlThunk());
  } else {
    setStatus(response.messages[0]);
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setAuthData(initialState));
  }
};

export const getCaptchaUrlThunk = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captcha = response.data.url;

  dispatch(getCaptcha(captcha));
}