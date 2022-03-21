import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import {
  ChatBubbleOutlineOutlined,
  EmailOutlined,
  ExpandLess,
  ExpandMore,
  NotificationsActiveOutlined,
} from '@mui/icons-material';
import { useState } from 'react';

export const Comments = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ChatBubbleOutlineOutlined />
        </ListItemIcon>
        <h4 style={{ width: '200px', textAlign: 'left' }}>Comments</h4>
        <ListItemText secondary="Push, Email" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemText secondary="These are notifications for comments on your posts and replies to your comments." />
        <h4 style={{ width: 'auto', textAlign: 'left', marginTop: '10px' }}>
          Where you receive these notifications
        </h4>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <NotificationsActiveOutlined />
            </ListItemIcon>
            <ListItemText primary="Push" />
            <Switch />
          </ListItem>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <EmailOutlined />
            </ListItemIcon>
            <ListItemText primary="Email" />
            <Switch />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};
