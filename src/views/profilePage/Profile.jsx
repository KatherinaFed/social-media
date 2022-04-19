import { useState } from 'react';
import { Avatar, Container, Grid, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles, Input } from './profileStyle';
import { Preloader } from '../../components/Preloader/Preloader';
import { Status } from '../../components/Status/Status';
import coverImg from '../../assets/cover.jpeg';
import userImg from '../../assets/users.png';
import ProfileData from '../../components/ProfileHelpers/ProfileData/ProfileData';
import Share from '../../components/ProfileHelpers/Share/Share';
import { savePhotoThunk, updateStatusThunk } from '../../store/profile/profileThunk';
import { addPost } from '../../store/profile/profileSlice';
import Posts from '../../components/ProfileHelpers/ProfilePosts/Posts';

export const Profile = ({ isOwner }) => {
  const css = useStyles();
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
              <Avatar
                style={{
                  width: 200,
                  height: 200,
                  border: '3px solid white',
                  backgroundColor: 'white',
                }}
                src={profile.photos.large || userImg}
                alt="profilePhoto"
              />
            </IconButton>
          </label>
        ) : (
          <Avatar
            style={{
              width: 200,
              height: 200,
              position: 'absolute',
              left: '0',
              right: '0',
              margin: 'auto',
              top: '150px',
              border: '3px solid white',
              backgroundColor: 'white',
            }}
            src={profile.photos.large || userImg}
            alt="profilePhoto"
          />
        )}
      </div>
      <div className={css.profileInfo}>
        <h4 className={css.username}>{profile.fullName}</h4>
        <Status status={status} isOwner={isOwner} updateStatus={updateStatusThunk} />
      </div>
      <Grid container>
        <Grid item sm={9}>
          <Share addPost={addPost} profile={profile} />
          <Posts isOwner={isOwner} />
        </Grid>
        <Grid item sm={3}>
          <div className={css.profileDescription}>
            <h4 className={css.text}>User information:</h4>
            <ProfileData />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
