import {
  Container,
  Divider,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material';

const SettingItemCustom = ({ name, text, secondary }) => {
  return (
    <Container>
      <Typography
        variant="h6"
        style={{ textAlign: 'left', marginBottom: '10px' }}
      >
        {name}
      </Typography>
      <Divider />
      <ListItem>
        <h4 style={{ width: '200px', textAlign: 'left' }}>{text}</h4>
        <ListItemText secondary={secondary} />
        <Switch />
      </ListItem>
      <Divider />
    </Container>
  );
};

export default SettingItemCustom;
