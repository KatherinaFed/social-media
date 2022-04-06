import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'init',
  initialState: {
    initialized: false,
  },
  reducers: {
    init(state, action) {
      return {
        ...state,
        initialized: action.payload,
      };
    },
  },
});

export const { init } = appSlice.actions;
export default appSlice.reducer;
