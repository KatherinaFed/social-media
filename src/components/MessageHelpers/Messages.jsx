import { useSelector } from 'react-redux';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../../utils/helpers/palette';

const useStyles = makeStyles(() => {
  return {
    left: {
      borderRadius: '10px',
      backgroundColor: '#f5f5f5',
    },
    right: {
      borderRadius: '10px',
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
    text: {
      fontWeight: '300',
    },
  };
});

const Messages = () => {
  const css = useStyles();
  const { messages, currentChatId } = useSelector((state) => state.messages);

  return (
    <>
      {messages.map(({ chatId, userName, message, date }, index) => {
        const chatActive = chatId === currentChatId;

        return (
          chatActive && (
            <div key={index}>
              <Typography
                style={{
                  fontWeight: 500,
                  color: 'rgba(0,0,0,0.4)',
                  margin: '12px 0',
                  fontSize: 12,
                  textAlign: 'center',
                }}
              >
                {date}
              </Typography>
              {userName === 'me' ? (
                <ListItem className={css.right}>
                  <ListItemText align="right">
                    <Typography fontWeight="300">{message}</Typography>
                  </ListItemText>
                </ListItem>
              ) : (
                <ListItem className={css.left}>
                  <ListItemText align="left">
                    <Typography fontWeight="300">{message}</Typography>
                  </ListItemText>
                </ListItem>
              )}
            </div>
          )
        );
      })}
    </>
  );
};

export default Messages;
