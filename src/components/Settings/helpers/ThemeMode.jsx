import {
  Container,
  Divider,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material';

const ThemeMode = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        style={{ textAlign: 'left', marginBottom: '10px' }}
      >
        Theme Mode
      </Typography>
      <Divider />
      <ListItem>
        <h4 style={{ width: '200px', textAlign: 'left' }}>Dark Mode</h4>
        <ListItemText secondary="Switch to Dark Mode" />
        <Switch />
      </ListItem>
      <Divider />
    </Container>
  );
};

export default ThemeMode;
