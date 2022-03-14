import {
  Container,
  Divider,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material';

const Cookies = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        style={{ textAlign: 'left', marginBottom: '10px' }}
      >
        Cookies
      </Typography>
      <Divider />
      <ListItem>
        <h4 style={{ width: '200px', textAlign: 'left' }}>Essential cookies</h4>
        <ListItemText secondary="These cookies are required to use Social Media. They’re necessary for these sites to work as intended." />
        <Switch />
      </ListItem>
      <Divider />
    </Container>
  );
};

export default Cookies;
