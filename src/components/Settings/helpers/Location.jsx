import {
  Container,
  Divider,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material';

const Location = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        style={{ textAlign: 'left', marginBottom: '10px' }}
      >
        Location
      </Typography>
      <Divider />
      <ListItem>
        <h4 style={{ width: '200px', textAlign: 'left' }}>Location history</h4>
        <ListItemText secondary="Turn on Location History for your mobile devices?" />
        <Switch />
      </ListItem>
      <Divider />
    </Container>
  );
};

export default Location;
