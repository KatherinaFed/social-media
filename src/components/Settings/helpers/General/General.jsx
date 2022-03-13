import { Container, Divider, Typography } from '@mui/material';
import { Preloader } from '../../../Preloader/Preloader';
import { useSelector } from 'react-redux';
import GeneralItem from './GeneralItem';

const General = () => {
  const { profile } = useSelector((state) => state.profile);

  if (!profile) {
    return <Preloader />;
  }

  return (
    <Container>
      <Typography
        variant="h6"
        style={{ textAlign: 'left', marginBottom: '10px' }}
      >
        General Account Settings
      </Typography>
      <Divider />
      <GeneralItem profile={profile} />
      <Divider />
    </Container>
  );
};

export default General;
