import { createSlice } from '@reduxjs/toolkit';

const CURRENT_ITEM_SETTING_ID = 1;

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    currentItemID: CURRENT_ITEM_SETTING_ID,
  },
  reducers: {
    setSettingID(state, action) {
      return {
        ...state,
        currentItemID: action.payload,
      };
    },
  },
});

export const { setSettingID } = settingsSlice.actions;
export default settingsSlice.reducer;
