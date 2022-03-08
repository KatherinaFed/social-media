import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { createTheme } from '@mui/material';
import Sidebar from '../../components/Settings/Sidebar';

const theme = createTheme();

export const SettingsPage = () => {
  return (
    <div>
      <Container>
        <Paper elevation={5} style={{ marginTop: '20px' }}>
          <Box p={3}>
            <Typography variant="h4" textAlign="center">
              Settings
            </Typography>
            <Divider />
            <Grid container style={{ marginTop: '10px' }}>
              <Grid
                item
                xs={4}
                style={{
                  backgroundColor: '#fafafa',
                  padding: '10px',
                }}
              >
                <Sidebar />
              </Grid>
              <Grid
                item
                xs={8}
                style={{ height: '50vh', padding: '10px' }}
              >
                MAIN
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};
