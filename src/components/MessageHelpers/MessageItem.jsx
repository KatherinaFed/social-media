import { ListItem, ListItemText, Typography } from '@mui/material';
import { createTheme } from '@mui/material';

const theme = createTheme();

const MessageItem = ({ side, message }) => {
  return (
    <ListItem
      style={{
        maxWidth: '50%',
        width: 'fit-content',
        borderRadius: '10px',
        backgroundColor:
          side === 'right' ? theme.palette.primary.light : '#f5f5f5',
        color: side === 'right' && theme.palette.primary.contrastText,
        marginLeft: side === 'right' && 'auto',
      }}
    >
      <Typography fontWeight="300" style={{ wordBreak: 'break-word' }}>
        {message}
      </Typography>
    </ListItem>
  );
};

export default MessageItem;
