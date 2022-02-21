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
import MessageUsersList from '../../components/MessageHelpers/MessageUsersList';
import MessageConversation from '../../components/MessageHelpers/MessageConversation';
import MessageForm from '../../components/MessageHelpers/MessageForm';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    // width: '100%',
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
    // padding: '20px',
    alignItems: 'flex-end',
  },
});

const MessagePage = () => {
  // const css = useStyles();
  const classes = useStyles();
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
        <Paper elevation={5}>
          <Box p={3}>
            <Typography variant="h4">Happy Chatting!</Typography>
            <Divider />
            <Grid container spacing={4} alignItems="center">
              <Grid
                item
                xs={8}
                style={{ maxHeight: '18rem', overflow: 'auto' }}
              >
                <List>
                  <MessageConversation />
                  <ListItem ref={scrollBottomRef} />
                </List>
              </Grid>
              <Grid item xs={4}>
                <MessageUsersList />
              </Grid>
              <Grid item xs={8}>
                <MessageForm />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
  // return (
  //   <div className={classes.table}>
  //     <Grid container>
  //       <Grid item xs={12}>
  //         <Typography variant="h5" className={classes.headBG}>
  //           Chat
  //         </Typography>
  //       </Grid>
  //     </Grid>
  //     <Grid container component={Paper} className={classes.messageArea}>
  //       <Grid item xs={8}>
  //         <MessageConversation />
  //       </Grid>
  //       <Grid item xs={4} className={classes.chatSection}>
  //         <MessageUsersList />
  //       </Grid>
  //       <Divider />
  //       <div>
  //         <footer className={classes.footer}>
  //           <MessageForm />
  //         </footer>
  //       </div>
  //     </Grid>
  //   </div>
  // );
};

export const Message = withAuthNavigate(MessagePage);
