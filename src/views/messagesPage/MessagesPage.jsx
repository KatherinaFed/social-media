import { useStyles } from './messagesStyle';
import {
  Avatar,
  Container,
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Send } from '@mui/icons-material';

export const Messages = () => {
  const css = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h5" style={{ textAlign: 'center' }}>
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={css.messagesWrapper}>
        <Grid item sm={8}>
          <List className={css.messageArea}>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Hey man, What's up ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="left"
                    primary="Hey, Iam Good! What about you ?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="left" secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Cool. i am good, let's catch up!"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="10:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: '15px', alignItems: 'center', justifyContent: 'space-between' }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
              />
            </Grid>
            <Grid xs={1} item align="right">
              <Fab color="primary" aria-label="add" size='medium'>
                <Send />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm={4}
          style={{
            backgroundColor: '#6074d8',
            borderRadius: '10px',
            color: 'white',
          }}
        >
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src="" />
              </ListItemIcon>
              <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
              <ListItemText secondary="online" align="right" />
            </ListItem>
            <ListItem button key="Alice">
              <ListItemIcon>
                <Avatar alt="Alice" src="" />
              </ListItemIcon>
              <ListItemText primary="Alice">Alice</ListItemText>
            </ListItem>
            <ListItem button key="CindyBaker">
              <ListItemIcon>
                <Avatar alt="Cindy Baker" src="" />
              </ListItemIcon>
              <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );

  // return (
  //   <div>
  //     <Grid container>
  //       <Grid item xs={12}>
  //         <Typography variant="h5" className="header-message">
  //           Chat
  //         </Typography>
  //       </Grid>
  //     </Grid>
  //     <Grid container component={Paper} className={css.chatSection}>
  //       <Grid item xs={8} className={css.borderRight500}>
  //         <List>
  //           <ListItem button key="RemySharp">
  //             <ListItemIcon>
  //               <Avatar
  //                 alt="Remy Sharp"
  //                 src=""
  //               />
  //             </ListItemIcon>
  //             <ListItemText primary="John Wick"></ListItemText>
  //           </ListItem>
  //         </List>
  //         <Divider />
  //         <Grid item xs={12} style={{ padding: '10px' }}>
  //           <TextField
  //             id="outlined-basic-email"
  //             label="Search"
  //             variant="outlined"
  //             fullWidth
  //           />
  //         </Grid>
  //         <Divider />
  //         <List>
  //           <ListItem button key="RemySharp">
  //             <ListItemIcon>
  //               <Avatar
  //                 alt="Remy Sharp"
  //                 src=""
  //               />
  //             </ListItemIcon>
  //             <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
  //             <ListItemText secondary="online" align="right"></ListItemText>
  //           </ListItem>
  //           <ListItem button key="Alice">
  //             <ListItemIcon>
  //               <Avatar
  //                 alt="Alice"
  //                 src=""
  //               />
  //             </ListItemIcon>
  //             <ListItemText primary="Alice">Alice</ListItemText>
  //           </ListItem>
  //           <ListItem button key="CindyBaker">
  //             <ListItemIcon>
  //               <Avatar
  //                 alt="Cindy Baker"
  //                 src=""
  //               />
  //             </ListItemIcon>
  //             <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
  //           </ListItem>
  //         </List>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <List className={css.messageArea}>
  //           <ListItem key="1">
  //             <Grid container>
  //               <Grid item xs={12}>
  //                 <ListItemText
  //                   align="right"
  //                   primary="Hey man, What's up ?"
  //                 ></ListItemText>
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <ListItemText align="right" secondary="09:30"></ListItemText>
  //               </Grid>
  //             </Grid>
  //           </ListItem>
  //           <ListItem key="2">
  //             <Grid container>
  //               <Grid item xs={12}>
  //                 <ListItemText
  //                   align="left"
  //                   primary="Hey, Iam Good! What about you ?"
  //                 ></ListItemText>
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <ListItemText align="left" secondary="09:31"></ListItemText>
  //               </Grid>
  //             </Grid>
  //           </ListItem>
  //           <ListItem key="3">
  //             <Grid container>
  //               <Grid item xs={12}>
  //                 <ListItemText
  //                   align="right"
  //                   primary="Cool. i am good, let's catch up!"
  //                 ></ListItemText>
  //               </Grid>
  //               <Grid item xs={12}>
  //                 <ListItemText align="right" secondary="10:30"></ListItemText>
  //               </Grid>
  //             </Grid>
  //           </ListItem>
  //         </List>
  //         <Divider />
  //         <Grid container style={{ padding: '20px' }}>
  //           <Grid item xs={11}>
  //             <TextField
  //               id="outlined-basic-email"
  //               label="Type Something"
  //               fullWidth
  //             />
  //           </Grid>
  //           <Grid xs={1} align="right">
  //             <Fab color="primary" aria-label="add">
  //               <Send />
  //             </Fab>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </div>
  // );
};
