import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Grid, List, ListItem, Paper } from '@mui/material';
import { withAuthNavigate } from '../../utils/helpers/withAuthNavigate';
import Chats from '../../components/MessageHelpers/Chats';
import Messages from '../../components/MessageHelpers/Messages';
import MessageForm from '../../components/MessageHelpers/MessageForm';
import ChatSearch from '../../components/MessageHelpers/ChatSearch';
import MessageHeader from '../../components/MessageHelpers/MessageHeader';

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
          <Box p={3} style={{ padding: 20 }}>
            <Grid container spacing={2} style={{ marginTop: 'auto' }}>
              <Grid
                item
                xs={8}
                style={{
                  textAlign: 'center',
                  padding: '0 0 0 20px',
                }}
              >
                <MessageHeader />
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  textAlign: 'center',
                  padding: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #ece7e7',
                }}
              >
                <ChatSearch />
              </Grid>
              <Grid
                item
                xs={8}
                style={{
                  height: '50vh',
                  overflow: 'auto',
                  padding: '10px 20px',
                }}
              >
                <List style={{ padding: '0px' }}>
                  <Messages />
                  <ListItem ref={scrollBottomRef} />
                </List>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  backgroundColor: '#fff',
                  padding: '0',
                  border: '1px solid #ece7e7',
                }}
              >
                <Chats />
              </Grid>
              <Grid
                item
                xs={8}
                style={{
                  textAlign: 'center',
                  padding: '10px',
                }}
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
