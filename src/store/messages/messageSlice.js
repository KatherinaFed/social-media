import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    chats: [
      {
        userId: 1,
        userName: 'Dmitrii Z.',
        isOnline: true,
        userAvatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbmfTnzLGSXX6KgG-Xh5cWgIZvwBzHv6Esw&usqp=CAU',
      },
      {
        userId: 2,
        userName: 'John Doe',
        isOnline: false,
        userAvatar:
          'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png',
      },
      {
        userId: 3,
        userName: 'Kristin Smith',
        isOnline: false,
        userAvatar:
          'https://avatarfiles.alphacoders.com/242/thumb-1920-242300.jpg',
      },
      {
        userId: 4,
        userName: 'Lizzy K.',
        isOnline: true,
        userAvatar: '',
      },
      {
        userId: 5,
        userName: 'Oliver',
        isOnline: true,
        userAvatar: 'https://avatarfiles.alphacoders.com/168/thumb-1920-168291.png',
      },
      {
        userId: 6,
        userName: 'Hanna T.',
        isOnline: false,
        userAvatar: '',
      },
    ],
    messages: [
      { id: 1, message: 'Hi! What`s up?', date: '17:02' },
      { id: 2, message: 'I`m fine, I got a job!)', date: '17:43' },
      { id: 3, message: 'Congratulations!', date: '17:50' },
    ],
  },
  reducers: {
    sendMessage(state, action) {
      const newMessage = {
        id: _.uniqueId(),
        message: action.payload,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    },
  },
});

export const { sendMessage } = messageSlice.actions;
export default messageSlice.reducer;
