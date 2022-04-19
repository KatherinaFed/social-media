import React from 'react';
import { useStyles } from './shareStyle';

const ShareForm = () => {
  const css = useStyles();
  return (
    <Box component="form" onSubmit={handleSubmit} className="form-box">
      {/* <FormControl style={{ width: '80%' }}> */}
        <InputBase
          className={css.input}
          inputRef={textInput}
          id="message"
          name="message"
          type="text"
          placeholder={'Type a message...'}
          onKeyDown={() => handleEnterKey}
          onChange={handleChange}
          disabled={isSubmitting}
          value={values.message}
        />
      {/* </FormControl> */}
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
