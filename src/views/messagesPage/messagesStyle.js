import { makeStyles } from '@mui/styles';

// export const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   chatSection: {
//     width: '100%',
//     height: '80vh',
//   },
//   headBG: {
//     backgroundColor: '#e0e0e0',
//   },
//   borderRight500: {
//     borderRight: '1px solid #e0e0e0',
//   },
//   messageArea: {
//     height: '70vh',
//     overflowY: 'auto',
//   },
// });

export const useStyles = makeStyles({
  messagesWrapper: {
    borderRadius: '10px',
    WebkitBoxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
    boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
  },
  headerMessage: {
    textAlign: 'center',
    marginBottom: '20px',
  },
});
