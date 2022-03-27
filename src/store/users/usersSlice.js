import { createSlice } from '@reduxjs/toolkit';
import { updateObjectInArray } from '../../utils/helpers/updateObjectInArray';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
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
    follow(state, action) {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', {
          followed: true,
        }),
        // users: state.users.map((u) => {
        //   // если ID из нашего state === ID из action.payload
        //   if (u.id === action.userId) {
        //     // возвращаем копию того ключа, который мы меняем
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // }),
      };
    },
    unfollow(state, action) {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload, 'id', {
          followed: false,
        }),
      };
    },
    toggleIsFetching(state, action) {
      return {
        ...state,
        isFetching: action.payload,
      };
    },
    toggleFollowingInProgress(state, action) {
      const { isFetching, id } = action.payload;
      
      return {
        ...state,
        // при нажатии на кнопку follow/unfollow кнопка юзера (id) становится недоступной (disabled)
        // и id добавляется в массив, при завершении процесса кнопка снова становится доступной
        // и id удаляется из массива;
        followingInProgress: isFetching
          ? // если процесс (isFetching) === true (идет) => добавляем ID пользователя в массив,
            // вместе с глубоким копированием старых данных (других ID)
            [...state.followingInProgress, id]
          : // если процесс (isFetching) === false (завершен) => удаляем ID пользователя из массива
            state.followingInProgress.filter((id) => id !== action.payload.id),
      };
    },
  },
});

export const {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  follow,
  unfollow,
  toggleIsFetching,
  toggleFollowingInProgress,
} = usersSlice.actions;
export default usersSlice.reducer;
