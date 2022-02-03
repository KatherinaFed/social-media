import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { withAuthNavigate } from '../../utils/helpers/withAuthNavigate';
import { getProfileThunk, getStatusThunk } from '../../store/profile/profileThunk';
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
    dispatch(getStatusThunk(id));
  }, [id, dispatch]);

  return (
    <Profile isOwner={!useParams().id} />
  );
};

export const ProfileContainer = withAuthNavigate(ProfilePage);
