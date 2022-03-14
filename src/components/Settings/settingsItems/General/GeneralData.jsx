import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  ListItemButton,
  ListItemText,
  OutlinedInput,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { NameForm, AboutMeForm, DescriptionForm } from './GeneralForms';

const GeneralData = ({ profile }) => {
  const {
    fullName,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
  } = profile;

  const [editName, setEditName] = useState(false);
  const [editAboutMe, setEditAboutMe] = useState(false);
  const [editLookingJob, setEditLookingJob] = useState(false);
  const [editDescription, setEditDescription] = useState(false);

  return (
    <>
      {editName ? (
        <NameForm profile={profile} setEditMode={setEditName} />
      ) : (
        <ListItemButton
          id={0}
          onClick={() => setEditName(true)}
          style={{ height: '40px' }}
        >
          <h4 style={{ width: '200px', textAlign: 'left' }}>Name</h4>
          <ListItemText primary={fullName} />
        </ListItemButton>
      )}
      {editAboutMe ? (
        <AboutMeForm profile={profile} setEditMode={setEditAboutMe} />
      ) : (
        <ListItemButton
          id={1}
          onClick={() => setEditAboutMe(true)}
          style={{ height: '40px' }}
        >
          <h4 style={{ width: '200px', textAlign: 'left' }}>About me</h4>
          <ListItemText primary={aboutMe} />
        </ListItemButton>
      )}
      <ListItemButton
        id={2}
        onClick={() => setEditLookingJob(true)}
        style={{ height: '40px' }}
      >
        <h4 style={{ width: '200px', textAlign: 'left' }}>Looking for a job</h4>
        <ListItemText primary={lookingForAJob} />
      </ListItemButton>
      {editDescription ? (
        <DescriptionForm profile={profile} setEditMode={setEditDescription} />
      ) : (
        <ListItemButton
          id={3}
          onClick={() => setEditDescription(true)}
          style={{ height: '40px' }}
        >
          <h4 style={{ width: '200px', textAlign: 'left' }}>Job description</h4>
          <ListItemText primary={lookingForAJobDescription} />
        </ListItemButton>
      )}
    </>
  );
};

export default GeneralData;
