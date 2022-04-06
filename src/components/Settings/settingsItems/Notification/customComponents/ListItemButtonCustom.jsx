import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const ListItemButtonCustom = ({
  handleClick,
  icon,
  text,
  open,
  checked,
  push,
  email,
}) => {
  let notifications = 'Off';

  if (push) {
    notifications = 'Push';
  }
  if (email) {
    notifications = 'Email';
  }
  if (push && email) {
    notifications = 'Push, Email';
  }
  if (checked) {
    notifications = 'Push, Email';
  }

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <h4 style={{ width: '200px', textAlign: 'left' }}>{text}</h4>
      <ListItemText secondary={notifications} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
  );
};

export default ListItemButtonCustom;
