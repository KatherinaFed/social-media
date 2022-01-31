import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { useStyles } from './profileStyle';
import { getProfileThunk } from '../../store/profile/profileThunk';

export const Profile = () => {
  const css = useStyles();
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.profile);
  console.log(profile)
  const { userId } = useSelector((state) => state.auth);

  let id = useParams().id;

  if (!id) {
    id = userId;
  }

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    dispatch(getProfileThunk(id));
    // getStatusThunk(id);
  }, [id, dispatch]);

  return (
    <Container className={css.container}>
      <div className={css.profileCover}>
        <img className={css.coverImg} src="/assets/cover.jpeg" alt="" />
        <img className={css.userImg} src={profile.photos.large} alt="" />
      </div>
    </Container>
  );
};
