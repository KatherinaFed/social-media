import { useSelector } from 'react-redux';
import { Grid, ListItem, ListItemText, Typography } from '@mui/material';

const MessageConversation = () => {
  const { messages } = useSelector((state) => state.messages);

  return (
    <>
      {messages.map(({ userName, message, date }, index) => (
        <ListItem key={index}>
          
          <ListItemText primary={`${userName}: ${message}`} />
        </ListItem>
      ))}
    </>
  );
};

export default MessageConversation;


// {messages.map(({ id, message, date }, index) => (
//   <ListItem key={index}>
//     <Grid container>
//       <Grid item xs={12}>
//         <ListItemText
//           align="right"
//           primary={message}
//         ></ListItemText>
//       </Grid>
//       <Grid item xs={12}>
//         <ListItemText align="right" secondary={date}></ListItemText>
//       </Grid>
//     </Grid>
//   </ListItem>
// ))}