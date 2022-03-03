import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../store/messages/messageSlice';
import { Send } from '@mui/icons-material';
import { Box, FormControl, TextField, Button } from '@mui/material';

const MessageForm = () => {
  const dispatch = useDispatch();

  const ENTER_KEY_CODE = 13;

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
        <TextField
          id="message"
          name="message"
          type="text"
          label="Type your message..."
          variant="outlined"
          size="small"
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
