import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import {
  NotificationsActiveOutlined,
  NotificationsNoneOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import CollapseCustom from '../customComponents/CollapseCustom';
import ListItemButtonCustom from '../customComponents/ListItemButtonCustom';

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
      <ListItemButtonCustom
        handleClick={handleClick}
        icon={<NotificationsActiveOutlined />}
        text={'Reminders'}
        open={open}
        checked={checked}
      />
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
        <CollapseCustom isOpen={checked} isChecked={true} />
      </Collapse>
    </>
  );
};
