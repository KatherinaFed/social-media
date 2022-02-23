import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { timing } from '../../utils/helpers/time';
import { initialStateChat } from './dummyData';

const messageSlice = createSlice({
  name: 'messages',
  initialState: initialStateChat,
  reducers: {
    sendMessage(state, action) {
      const newMessage = {
        id: _.uniqueId('k'),
        userName: 'me',
        message: action.payload,
        date: timing(),
      };

      // console.log('ACTIVE CHAT ID: ', state.currentChatId);
      // console.log('MESSAGES: ', state.messages)

      return {
        ...state,
        messages: [
          ...state.messages,
          {
            chatId: state.currentChatId,
            chatMsg: [{ ...newMessage }],
          },
        ],
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
