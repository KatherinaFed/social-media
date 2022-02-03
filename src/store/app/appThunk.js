import { getAuthUserData } from '../auth/authThunk';
import { init } from './appSlice';

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData());

  // Если промисов много, то используем данный метод =>
  Promise.all([promise]).then(() => {
    dispatch(init());
  });
};