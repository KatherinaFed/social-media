import { useSelector } from 'react-redux';
import { Grid, ListItem, ListItemText } from '@mui/material';

const MessageItem = () => {
  const { messages } = useSelector((state) => state.messages);
  return (
    <>
      {messages.map(({ id, message, date }) => (
        <ListItem key={id}>
          <Grid container>
            <Grid item xs={12}>
              <ListItemText
                align="right"
                primary={message}
              ></ListItemText>
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="right" secondary={date}></ListItemText>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </>
  );
};

export default MessageItem;
