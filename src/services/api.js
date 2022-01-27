import * as axios from 'axios';
import { API_KEY, BASE_URL } from '../utils/constants/apiData';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "API-KEY": API_KEY,
  },
});

// IS AUTH ME
export const authAPI = {
  authMe() {
    return instance.get('auth/me').then(({ data }) => data);
  },
  // login(email, password, rememberMe = false, captcha = null) {
  //   return instance
  //     .post('auth/login', { email, password, rememberMe, captcha })
  //     .then(({ data }) => data);
  // },
  // logout() {
  //   return instance.delete('auth/login').then(({ data }) => data);
  // },
};