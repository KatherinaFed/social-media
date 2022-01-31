import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
// import { useStyles } from './profileStyle';
import { getProfileThunk } from '../../store/profile/profileThunk';

export const Profile = () => {
  // const css = useStyles();
  const { profile } = useSelector((state) => state.profile);
  const { userId } = useSelector((state) => state.auth);

  let id = useParams().id;

  if (!id) {
    id = userId;
  }

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    getProfileThunk(id);
    // getStatusThunk(id);
  }, [id, getProfileThunk]);

  return <Container>{id}</Container>;
};
