import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import {
  EmailOutlined,
  NotificationsActiveOutlined,
} from '@mui/icons-material';

const CollapseCustom = ({
  isOpen,
  secondary,
  isChecked,
  handleChecked,
  push,
  email,
}) => {
  console.log('Push: ', push);
  console.log('Email: ', email);

  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      <ListItemText secondary={secondary} />
      <h4 style={{ width: 'auto', textAlign: 'left', marginTop: '10px' }}>
        Where you receive these notifications
      </h4>
      <List component="div" disablePadding>
        <ListItem sx={{ pl: 4 }}>
          <ListItemIcon>
            <NotificationsActiveOutlined />
          </ListItemIcon>
          <ListItemText primary="Push" />
          {isChecked ? (
            <Switch defaultChecked={isChecked} />
          ) : (
            <Switch onChange={handleChecked('Push')} />
          )}
        </ListItem>
        <ListItem sx={{ pl: 4 }}>
          <ListItemIcon>
            <EmailOutlined />
          </ListItemIcon>
          <ListItemText primary="Email" />
          {isChecked ? (
            <Switch defaultChecked={isChecked} />
          ) : (
            <Switch onChange={handleChecked('Email')} />
          )}
        </ListItem>
      </List>
    </Collapse>
  );
};

export default CollapseCustom;
