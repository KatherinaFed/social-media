import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Divider, Typography } from '@mui/material';
import { Preloader } from '../../../Preloader/Preloader';
import GeneralData from './GeneralData';

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
      <GeneralData profile={profile} />
      <Divider />
    </Container>
  );
};

export default General;
