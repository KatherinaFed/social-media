import {
  Collapse,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from '@mui/material';
import {
  ChatBubbleOutlineOutlined,
  EmailOutlined,
  ExpandLess,
  ExpandMore,
  LocalOfferOutlined,
  NotificationsActiveOutlined,
} from '@mui/icons-material';
import { useState } from 'react';

const Notification = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Typography
        variant="h6"
        style={{ textAlign: 'left', marginBottom: '10px' }}
      >
        Notifications Settings
      </Typography>
      <Divider />
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
      <Divider />
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocalOfferOutlined />
        </ListItemIcon>
        <h4 style={{ width: '200px', textAlign: 'left' }}>Tags</h4>
        <ListItemText secondary="Push, Email" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemText secondary="These are notifications for when someone tags you in a comment, post or story." />
        <h4 style={{ width: 'auto', textAlign: 'left', marginTop: '10px' }}>
          Get notifications when you're tagged by:
        </h4>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemText primary="Anyone" />
          </ListItem>
          <ListItem sx={{ pl: 4 }}>
            <ListItemText primary="Friends of Friends" />
          </ListItem>
          <ListItem sx={{ pl: 4 }}>
            <ListItemText primary="Friends" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </Container>
  );
};
export default Notification;
