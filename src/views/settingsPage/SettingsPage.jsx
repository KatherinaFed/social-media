import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { createTheme } from '@mui/material';
import Main from '../../components/Settings/Main';
import Sidebar from '../../components/Settings/Sidebar';
import { withAuthNavigate } from '../../utils/helpers/withAuthNavigate';

const theme = createTheme();

const SettingsPage = () => {
  return (
    <div>
      <Container>
        <Paper elevation={5} style={{ marginTop: '20px' }}>
          <Box p={3}>
            <Typography
              variant="h4"
              style={{ textAlign: 'left', marginLeft: '10px' }}
            >
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
                style={{ height: '50vh', overflow: 'auto', padding: '10px' }}
              >
                <Main />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export const SettingsContainer = withAuthNavigate(SettingsPage);
