import { MoreVert } from '@mui/icons-material';
import { AppBar, Avatar, IconButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const MessageHeader = () => {
  const { chats, currentChatId } = useSelector((state) => state.messages);

  const listOfChats = chats.map(({ id, userName, isOnline, userAvatar }, index) => {
    const activeUserChat = id === currentChatId;

    return (
      activeUserChat && (
        <div key={index} display="flex">
          <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
              <Avatar alt={userName} src={userAvatar} edge="start" />
              <Typography style={{ marginLeft: '10px' }} variant="h6" noWrap>
                {userName}
              </Typography>
              {isOnline && <ListItemText secondary="online" align="left" style={{ marginLeft: '10px' }} />}
              <IconButton
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
                style={{ marginLeft: 'auto' }}
              >
                <MoreVert />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      )
    );
  });

  return chats ? listOfChats : null;
};

export default MessageHeader;
