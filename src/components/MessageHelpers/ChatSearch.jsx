import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Typography,
  Paper,
  InputBase,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { AddCircle, Search } from '@mui/icons-material';

const useStyles = makeStyles(() => ({
  input: {
    flex: 'auto',
    borderRadius: 40,
    paddingLeft: 16,
    backgroundColor: 'rgba(0,0,0,0.04)',
    margin: '0 8px',
    height: 36,
    fontSize: 13,
  },
}));

const ChatSearch = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      minHeight={30}
      alignItems="center"
      px={2}
      bgcolor="inherit"
    >
      <InputBase
        className={classes.input}
        placeholder="Search"
        startAdornment={
          <InputAdornment position={'start'}>
            <Search />
          </InputAdornment>
        }
      />

      <IconButton edge="end" color="primary">
        <AddCircle />
      </IconButton>
    </Box>
  );
};

export default ChatSearch;
