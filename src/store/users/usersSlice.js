import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
  },
  reducers: {
    setUsers(state, action) {
      return {
        ...state,
        users: action.payload,
      };
    },
    setTotalUsersCount(state, action) {
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    },
    setCurrentPage(state, action) {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
  },
});

export const {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
} = usersSlice.actions;
export default usersSlice.reducer;
