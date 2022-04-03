import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { timing } from '../../utils/helpers/time';
import { initialStateChat } from './dummyData';

console.log(timing())

const messageSlice = createSlice({
  name: 'messages',
  initialState: initialStateChat,
  reducers: {
    sendMessage(state, action) {
      const newMessage = {
        id: _.uniqueId('k'),
        chatId: state.currentChatId,
        userName: 'me',
        message: action.payload,
        date: timing(),
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    },
    setActiveChat(state, action) {
      return {
        ...state,
        currentChatId: action.payload,
      };
    },
  },
});

export const { sendMessage, setActiveChat } = messageSlice.actions;
export default messageSlice.reducer;
