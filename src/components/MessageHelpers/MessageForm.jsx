import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../store/messages/messageSlice';
import { Send } from '@mui/icons-material';
import { Box, FormControl, TextField, Button } from '@mui/material';

const MessageForm = () => {
  const dispatch = useDispatch();

  const ENTER_KEY_CODE = 13;

  const { handleChange, handleSubmit, values } = useFormik({
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
    <Box component="form" onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <TextField
          id="message"
          name="message"
          type="text"
          label="Type your message..."
          variant="outlined"
          onKeyDown={() => handleEnterKey}
          onChange={handleChange}
          value={values.message}
        />
      </FormControl>
      <Button type="submit" variant="contained">
        <Send />
      </Button>
    </Box>
  );
};

export default MessageForm;
