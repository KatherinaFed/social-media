import { useStyles } from './messagesStyle';
import { theme } from '../../utils/helpers/palette';
import {
  Container,
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { withAuthNavigate } from '../../utils/helpers/withAuthNavigate';
import MessageUserItem from '../../components/MessageHelpers/MessageUserItem';
import MessageItem from '../../components/MessageHelpers/MessageItem';

const MessagePage = () => {
  const css = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h5" style={{ textAlign: 'center' }}>
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={css.messagesWrapper}>
        <Grid item sm={8}>
          <List className={css.messageArea}>
            <MessageItem />
          </List>
          <Divider />
          <Grid
            container
            style={{
              padding: '15px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={1} item align="right">
              <Fab
                style={{ backgroundColor: theme.palette.secondary.main }}
                aria-label="add"
                size="medium"
              >
                <Send />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm={4}
          style={{
            backgroundColor: theme.palette.primary.light,
            borderRadius: '10px',
            color: 'white',
          }}
        >
          <List>
            <MessageUserItem />
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export const MessageContainer = withAuthNavigate(MessagePage);
