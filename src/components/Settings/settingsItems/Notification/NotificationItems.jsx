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
  NotificationsNoneOutlined,
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

export const Tags = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
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
    </>
  );
};

export const Reminders = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ChatBubbleOutlineOutlined />
        </ListItemIcon>
        <h4 style={{ width: '200px', textAlign: 'left' }}>Reminders</h4>
        <ListItemText secondary={checked ? 'Push, Email' : 'Off'} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemText secondary="These are notifications to remind you of updates you may have missed." />
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon>
              <NotificationsNoneOutlined />
            </ListItemIcon>
            <ListItemText primary="Allow Notifications on Social Media" />
            <Switch onChange={handleChecked} checked={checked} />
          </ListItem>
        </List>
        <Collapse in={checked} timeout="auto" unmountOnExit>
          <h4 style={{ width: 'auto', textAlign: 'left', marginTop: '10px' }}>
            Where you receive these notifications
          </h4>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <NotificationsActiveOutlined />
              </ListItemIcon>
              <ListItemText primary="Push" />
              <Switch defaultChecked='true' />
            </ListItem>
            <ListItem sx={{ pl: 4 }}>
              <ListItemIcon>
                <EmailOutlined />
              </ListItemIcon>
              <ListItemText primary="Email" />
              <Switch defaultChecked='true' />
            </ListItem>
          </List>
        </Collapse>
      </Collapse>
    </>
  );
};
