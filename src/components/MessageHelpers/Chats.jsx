import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { setActiveChat } from '../../store/messages/messageSlice';
import { theme } from '../../utils/helpers/palette';

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
              backgroundColor: buttonStyle && theme.palette.primary.main,
              color: buttonStyle && theme.palette.primary.contrastText,
            }}
            selected={buttonStyle}
            onClick={setActive(id)}
          >
            <ListItemIcon>
              <Avatar alt={userName} src={userAvatar} />
            </ListItemIcon>
            <ListItemText primary={userName}>{userName}</ListItemText>
            {isOnline && <ListItemText secondary="online" align="right" />}
          </ListItemButton>
        </div>
      );
    }
  );

  return chats ? listOfChats : null;
};

export default Chats;
