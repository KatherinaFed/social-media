import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    status: '',
    posts: [
      { id: 1, message: 'My first post', likes: 15 },
      { id: 2, message: 'Hey guys! Do you wanna to go to the party today?', likes: 20 },
    ],
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
    addPost(state, action) {
      const newPost = {
        id: 3,
        message: action.payload,
        likes: 5,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    },
  },
});

export const {
  setProfile,
  setStatus,
  savePhoto,
  saveProfile,
  addPost,
} = profileSlice.actions;
export default profileSlice.reducer;
