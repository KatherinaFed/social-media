import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { theme } from '../../utils/helpers/palette';
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';
import { withAuthNavigate } from '../../utils/helpers/withAuthNavigate';
import Chats from '../../components/MessageHelpers/Chats';
import Messages from '../../components/MessageHelpers/Messages';
import MessageForm from '../../components/MessageHelpers/MessageForm';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    height: '50vh',
    backgroundColor: theme.palette.primary.light,
  },
  headBG: {
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  footer: {
    height: 52,
    display: 'flex',
    border: 'none',
    padding: '0 8px',
    alignItems: 'flex-end',
  },
});

const MessagePage = () => {
  const { messages } = useSelector((state) => state.messages);

  const scrollBottomRef = useRef(null);

  useEffect(() => {
    if (scrollBottomRef.current) {
      scrollBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <Container>
        <Paper elevation={5} style={{ marginTop: '20px' }}>
          <Box p={3}>
            <Typography variant="h4" textAlign="center">
              Happy Chatting!
            </Typography>
            <Divider />
            <Grid container spacing={2} style={{ marginTop: 'auto' }}>
              <Grid
                item
                xs={8}
                style={{ height: '50vh', overflow: 'auto', padding: '10px' }}
              >
                <List>
                  <Messages />
                  <ListItem ref={scrollBottomRef} />
                </List>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  backgroundColor: theme.palette.primary.light,
                  padding: '10px',
                }}
              >
                <Chats />
              </Grid>
              <Grid
                item
                xs={8}
                style={{ textAlign: 'center', padding: '10px' }}
              >
                <MessageForm />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export const Message = withAuthNavigate(MessagePage);
