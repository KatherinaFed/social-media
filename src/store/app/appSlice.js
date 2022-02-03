import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'init',
  initialState: {
    initialized: false,
  },
  reducers: {
    init(state) {
      return {
        ...state,
        initialized: true,
      };
    },
  },
});

export const { init } = appSlice.actions;
export default appSlice.reducer;
