import { useSelector } from 'react-redux';
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const MessageUserItem = () => {
  const { chats } = useSelector((state) => state.messages);

  return (
    <>
      {chats.map(({ userId, userName, isOnline, userAvatar }) => (
        <ListItem button key={userId}>
          <ListItemIcon>
            <Avatar alt={userName} src={userAvatar} />
          </ListItemIcon>
          <ListItemText primary={userName}>{userName}</ListItemText>
          {isOnline && <ListItemText secondary="online" align="right" />}
        </ListItem>
      ))}
    </>
  );
};

export default MessageUserItem;
