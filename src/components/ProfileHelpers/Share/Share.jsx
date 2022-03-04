import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useFormik } from 'formik';
import { useStyles } from './shareStyle';
import { addPost } from '../../../store/profile/profileSlice';
import userImg from '../../../assets/users.png';

const Share = ({ isOwner }) => {
  const css = useStyles();

  const { profile, avatar } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const textInput = React.createRef();

  const { handleChange, handleSubmit, values, isValid, dirty } = useFormik({
    initialValues: {
      newPostText: '',
    },
    onSubmit: ({ newPostText }, { resetForm }) => {
      dispatch(addPost(newPostText));

      resetForm();
    },
  });

  const placeholderText = isOwner
    ? `What is in your mind ${profile.fullName}?`
    : `Type something ${profile.fullName}...`;

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.share}>
        <div className="shareWrapper">
          <div className={css.shareTop}>
            <img
              className={css.shareProfileImg}
              src={avatar || userImg}
              alt=""
            />
            <input
              id="newPostText"
              name="newPostText"
              type="text"
              onChange={handleChange}
              ref={textInput}
              value={values.newPostText}
              placeholder={placeholderText}
              className={css.shareInput}
            />
          </div>
          <hr className={css.shareHr} />
          <div className={css.shareBottom}>
            <div className={css.shareOptions}>
              <div className={css.shareOption}>
                <PermMedia htmlColor="tomato" className={css.shareIcon} />
                <span className={css.shareOptionText}>Photo or Video</span>
              </div>
              <div className={css.shareOption}>
                <Label htmlColor="blue" className={css.shareIcon} />
                <span className={css.shareOptionText}>Tag</span>
              </div>
              <div className={css.shareOption}>
                <Room htmlColor="green" className={css.shareIcon} />
                <span className={css.shareOptionText}>Location</span>
              </div>
              <div className={css.shareOption}>
                <EmojiEmotions
                  htmlColor="goldenrod"
                  className={css.shareIcon}
                />
                <span className={css.shareOptionText}>Feelings</span>
              </div>
            </div>
            <button
              type="submit"
              disabled={!isValid || !dirty}
              className={css.shareButton}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Share;
