import { Container, Divider, Typography } from '@mui/material';
import { Comments } from './NotificationItems/Comments';
import { Reminders } from './NotificationItems/Reminders';
import { Tags } from './NotificationItems/Tags';

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
