import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { setActiveChat } from '../../store/messages/messageSlice';
import { createTheme } from '@mui/material';

const theme = createTheme();

const Chats = () => {
  const { chats, currentChatId } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const setActive = (id) => () => {
    dispatch(setActiveChat(id));
  };

  const listOfChats = chats.map(
    ({ id, userName, isOnline, userAvatar }, index) => {
      const activeChat = id === currentChatId;
      const buttonStyle = activeChat ? true : false;

      return (
        <div key={index}>
          <ListItemButton
            style={{
              backgroundColor: buttonStyle && '#eeeeee',
            }}
            selected={buttonStyle}
            onClick={setActive(id)}
          >
            <ListItemIcon>
              <Avatar alt={userName} src={userAvatar} />
            </ListItemIcon>
            <ListItemText primary={userName} />
            {isOnline && <ListItemText secondary="online" align="right" />}
          </ListItemButton>
          <Divider />
        </div>
      );
    }
  );

  return chats ? listOfChats : null;
};

export default Chats;
