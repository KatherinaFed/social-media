import { useState } from 'react';
import { Container, Grid, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles, Input } from './profileStyle';
import { Preloader } from '../../components/Preloader/Preloader';
import { Status } from '../../components/Status/Status';
import coverImg from '../../assets/cover.jpeg';
import userImg from '../../assets/users.png';
import ProfileForm from '../../components/ProfileHelpers/ProfileForm/ProfileForm';
import ProfileData from '../../components/ProfileHelpers/ProfileData/ProfileData';
import Share from '../../components/ProfileHelpers/Share/Share';
import { savePhotoThunk } from '../../store/profile/profileThunk';
import Posts from '../../components/ProfileHelpers/ProfilePosts/Posts';

export const Profile = ({ isOwner }) => {
  const css = useStyles();
  const [editMode, setEditMode] = useState(false);
  const { profile, status } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  if (!profile) {
    return <Preloader />;
  }

  const selectMyPhoto = (e) => {
    if (e.target.files.length) {
      dispatch(savePhotoThunk(e.target.files[0]));
    }
  };

  return (
    <Container className={css.container}>
      <div className={css.profileCover}>
        <img className={css.coverImg} src={coverImg} alt="" />
        {isOwner ? (
          <label className={css.spanImg} htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={selectMyPhoto}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <img
                className={css.userImg}
                src={profile.photos.large}
                alt=""
              />
            </IconButton>
          </label>
        ) : (
          <img
            className={css.userImgDef}
            src={profile.photos.large || userImg}
            alt=""
          />
        )}
        {/* <img
          className={css.userImg}
          src={profile.photos.large || userImg}
          alt=""
        /> */}
      </div>
      <div className={css.profileInfo}>
        <h4 className={css.username}>{profile.fullName}</h4>
        <Status status={status} isOwner={isOwner} />
      </div>
      <Grid container>
        <Grid item sm={9}>
          <Share />
          <Posts />
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
