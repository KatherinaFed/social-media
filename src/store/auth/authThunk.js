import { authAPI } from '../../services/api';
import store from '../index';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

export const getAuthUserDataThunk = () => async (dispatch) => {
  const response = await authAPI.authMe();

  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
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
    dispatch(getAuthUserDataThunk());
  } else if (response.resultCode === 10) {
    dispatch(getCaptchaUrlThunk());
  } else {
    setStatus(response.messages[0]);
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(initialState));
  }
};

// export const getCaptcha = () => async (dispatch) => {
//   const response = await securityAPI.getCaptchaUrl();
//   const captcha = response.data.url;

//   dispatch(getCaptchaUrl(captcha));
// };
