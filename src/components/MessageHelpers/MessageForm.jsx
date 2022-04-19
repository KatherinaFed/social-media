import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/messages/messageSlice';
import { Send } from '@mui/icons-material';
import { Box, FormControl, Button, InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  input: {
    // flex: 'auto',
    borderRadius: 40,
    paddingLeft: 16,
    backgroundColor: 'rgba(0,0,0,0.04)',
    margin: '0 8px',
    height: 36,
    fontSize: 13,
  },
}));

const MessageForm = ({ sendMessage }) => {
  const css = useStyles();
  const dispatch = useDispatch();

  const ENTER_KEY_CODE = 13;

  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  });

  const { handleChange, handleSubmit, isSubmitting, values } = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: ({ message }, { resetForm }) => {
      dispatch(sendMessage(message));

      resetForm();
    },
  });

  const handleEnterKey = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      dispatch(sendMessage(values.message));
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="form-box">
      <FormControl style={{ width: '80%' }}>
        <InputBase
          className={css.input}
          inputRef={textInput}
          id="message"
          name="message"
          type="text"
          placeholder={"Type a message..."}
          onKeyDown={() => handleEnterKey}
          onChange={handleChange}
          disabled={isSubmitting}
          value={values.message}
        />
      </FormControl>
      <Button
        disabled={values.message === '' || isSubmitting}
        style={{ marginLeft: '5px' }}
        type="submit"
        variant="contained"
      >
        <Send />
      </Button>
    </Box>
  );
};

export default MessageForm;
