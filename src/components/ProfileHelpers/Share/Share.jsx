import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useFormik } from 'formik';
import { useStyles } from './shareStyle';
import userImg from '../../../assets/users.png';
import {
  Avatar,
  Box,
  Button,
  Divider,
  InputBase,
} from '@mui/material';
import ShareItemCustom from './ShareItemCustom';

const Share = ({ addPost, profile }) => {
  const css = useStyles();
  const dispatch = useDispatch();

  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  });

  const { handleChange, handleSubmit, values, isValid, dirty } = useFormik({
    initialValues: {
      newPostText: '',
    },
    onSubmit: ({ newPostText }, { resetForm }) => {
      dispatch(addPost(newPostText));

      resetForm();
    },
  });

  return (
    <Box
      className={css.form}
      component="form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={css.shareTop}>
        <Avatar
          alt="avatar"
          src={profile.photos.small || userImg}
          sx={{
            width: 40,
            height: 40,
            marginRight: '5px',
          }}
        />
        <InputBase
          id="newPostText"
          name="newPostText"
          type="text"
          onChange={handleChange}
          ref={textInput}
          value={values.newPostText}
          placeholder={`What is in your mind ${profile.fullName}?`}
          className={css.shareInput}
          style={{ fontSize: 13 }}
        />
      </div>
      <Divider style={{ margin: 10 }} />
      <div className={css.shareBottom}>
        <div className={css.shareOptions}>
          <ShareItemCustom
            componentIcon={
              <PermMedia htmlColor="tomato" style={{ marginRight: 5 }} />
            }
            text={'Photo or Video'}
          />
          <ShareItemCustom
            componentIcon={
              <Label htmlColor="blue" style={{ marginRight: 5 }} />
            }
            text={'Tag'}
          />
          <ShareItemCustom
            componentIcon={
              <Room htmlColor="green" style={{ marginRight: 5 }} />
            }
            text={'Location'}
          />
          <ShareItemCustom
            componentIcon={
              <EmojiEmotions htmlColor="goldenrod" style={{ marginRight: 5 }} />
            }
            text={'Feelings'}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          disabled={!isValid || !dirty}
          style={{ fontWeight: 500, marginRight: 10, color: 'white' }}
        >
          Share
        </Button>
      </div>
    </Box>
  );
};

export default Share;
