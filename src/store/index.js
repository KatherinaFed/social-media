import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import usersReducer from './users/usersSlice';
import profileReducer from './profile/profileSlice';
import initReducer from './app/appSlice';
import messageReducer from './messages/messageSlice';
import settingsReducer from './settings/settingsSlice';

export const store = configureStore({
  reducer: {
    init: initReducer,
    auth: authReducer,
    users: usersReducer,
    profile: profileReducer,
    messages: messageReducer,
    settings: settingsReducer,
  },
});
