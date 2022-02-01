import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { withAuthNavigate } from '../../utils/helpers/withAuthNavigate';
import { getProfileThunk } from '../../store/profile/profileThunk';
import { Profile } from './Profile';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state.auth);

  let id = useParams().id;

  if (!id) {
    id = userId;
  }

  useEffect(() => {
    dispatch(getProfileThunk(id));
    // getStatusThunk(id);
  }, [id, dispatch]);

  return (
    <Profile />
  );
};

export const ProfileContainer = withAuthNavigate(ProfilePage);
