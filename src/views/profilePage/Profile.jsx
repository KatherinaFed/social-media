import { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { useStyles } from './profileStyle';
import { Preloader } from '../../components/Preloader/Preloader';
import { Status } from '../../components/Status/Status';
import coverImg from '../../assets/cover.jpeg';
import userImg from '../../assets/users.png';
import ProfileForm from '../../components/ProfileHelpers/ProfileForm/ProfileForm';
import ProfileData from '../../components/ProfileHelpers/ProfileData/ProfileData';
import Share from '../../components/ProfileHelpers/Share/Share';

export const Profile = ({ isOwner }) => {
  const css = useStyles();
  const [editMode, setEditMode] = useState(false);
  const { profile, status } = useSelector((state) => state.profile);

  if (!profile) {
    return <Preloader />;
  }

  return (
    <Container className={css.container}>
      <div className={css.profileCover}>
        <img className={css.coverImg} src={coverImg} alt="" />
        <img
          className={css.userImg}
          src={profile.photos.large || userImg}
          alt=""
        />
      </div>
      <div className={css.profileInfo}>
        <h4 className={css.username}>{profile.fullName}</h4>
        <Status status={status} isOwner={isOwner} />
      </div>
      <Grid container>
        <Grid item sm={9}>
          <Share />
        </Grid>
        <Grid item sm={3}>
          <div className={css.profileDescription}>
            <h4 className={css.text}>User information:</h4>
            {editMode ? (
              <ProfileForm setEditMode={setEditMode} />
            ) : (
              <ProfileData setEditMode={setEditMode} isOwner={isOwner} />
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
