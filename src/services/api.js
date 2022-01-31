import * as axios from 'axios';
import { API_KEY, BASE_URL } from '../utils/constants/apiData';

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'API-KEY': API_KEY,
  },
});

// SECURITY
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url');
  },
};

// IS AUTH ME
export const authAPI = {
  isAuth() {
    return instance.get('auth/me').then(({ data }) => data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post('auth/login', { email, password, rememberMe, captcha })
      .then(({ data }) => data);
  },
  logout() {
    return instance.delete('auth/login').then(({ data }) => data);
  },
};

// USERS
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(({ data }) => data);
  },
};

// PROFILES
export const profileAPI = {
  getProfile(userId) {
    // debugger;
    return instance.get(`profile/${userId}`).then(({ data }) => data);
  },
  // getStatus(userId) {
  //   return instance.get(`profile/status/${userId}`);
  // },
  // updateStatus(status) {
  //   return instance.put('profile/status/', { status: status });
  // },
  // savePhoto(photoFile) {
  //   const formData = new FormData();
  //   formData.append('image', photoFile);

  //   return instance.put('profile/photo', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  // },
  // saveProfile(profileData) {
  //   return instance.put('profile', profileData);
  // },
};
