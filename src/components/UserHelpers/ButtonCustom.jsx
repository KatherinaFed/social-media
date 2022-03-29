import React from 'react';
import { Button } from '@mui/material';

const ButtonCustom = ({ user, variant, followingInProgress, handleClick, text }) => {
  return (
    <Button
      variant={variant}
      style={{ marginLeft: 'auto' }}
      disabled={followingInProgress.some((id) => id === user.id)}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default ButtonCustom;
