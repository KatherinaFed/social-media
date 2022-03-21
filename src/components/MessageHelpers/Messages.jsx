import { useSelector } from 'react-redux';
import { ListItem, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { theme } from '../../utils/helpers/palette';
import { createTheme } from '@mui/material';

const theme = createTheme();

const useStyles = makeStyles(() => {
  return {
    left: {
      width: 'fit-content',
      borderRadius: '10px',
      backgroundColor: '#f5f5f5',
    },
    right: {
      width: 'fit-content',
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
                <ListItem
                  style={{
                    width: 'fit-content',
                    borderRadius: '10px',
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  <ListItemText>
                    <Typography fontWeight="300">{message}</Typography>
                  </ListItemText>
                </ListItem>
              ) : (
                <ListItem
                  style={{
                    width: 'fit-content',
                    borderRadius: '10px',
                    backgroundColor: '#f5f5f5',
                    align: 'left'
                  }}
                >
                  <ListItemText>
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
