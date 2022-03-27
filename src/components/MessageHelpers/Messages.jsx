import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MessageItem from './MessageItem';

const Messages = () => {
  // const css = useStyles();
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
                  margin: '10px 0',
                  fontSize: 12,
                  textAlign: 'center',
                }}
              >
                {date}
              </Typography>
              {userName === 'me' ? (
                <MessageItem side={'right'} message={message} />
              ) : (
                <MessageItem side={'left'} message={message} />
              )}
            </div>
          )
        );
      })}
    </>
  );
};

export default Messages;
