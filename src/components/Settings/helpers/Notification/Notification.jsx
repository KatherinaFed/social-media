import { Container, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import { Comments, Reminders, Tags } from './NotificationItems';

const Notification = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        style={{ textAlign: 'left', marginBottom: '10px' }}
      >
        Notifications Settings
      </Typography>
      <Divider />
      <Comments />
      <Divider />
      <Tags />
      <Divider />
      <Reminders />
      <Divider />
    </Container>
  );
};
export default Notification;
