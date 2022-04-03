import React from 'react';
import { useStyles } from './shareStyle';
import { Typography } from '@mui/material';

const ShareItemCustom = ({ componentIcon, text }) => {
  const css = useStyles();

  return (
    <div className={css.shareOption}>
      {componentIcon}
      <Typography style={{ fontSize: '14px', fontWeight: 500 }}>
        {text}
      </Typography>
    </div>
  );
};

export default ShareItemCustom;
