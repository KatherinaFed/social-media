import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { useStyles } from './profileStyle';
import { Preloader } from '../../components/Preloader/Preloader';

export const Profile = () => {
  const css = useStyles();
  const { profile } = useSelector((state) => state.profile);

  if (!profile) {
    return <Preloader />;
  }

  return (
    <Container className={css.container}>
      <div className={css.profileCover}>
        <img className={css.coverImg} src="/assets/cover.jpeg" alt="" />
        <img
          className={css.userImg}
          src={profile.photos.large || '/assets/users.png'}
          alt=""
        />
      </div>
      <div className={css.profileInfo}>
        <h4 className={css.username}>{profile.fullName}</h4>
        <span className={css.status}>Status: Hello my friends!</span>
      </div>
      <div className={css.profileDescription}>
        <h4 className={css.text}>User information:</h4>
      </div>
    </Container>
  );
};
