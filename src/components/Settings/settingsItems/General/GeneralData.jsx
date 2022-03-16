import { useState } from 'react';
import { Collapse, ListItemButton, ListItemText } from '@mui/material';
import { AboutMeForm } from './GeneralForms/AboutMeForm';
import { DescriptionForm } from './GeneralForms/JobDescriptionsForm';
import { LookingForAJobForm } from './GeneralForms/JobForm';
import { NameForm } from './GeneralForms/NameForm';
import { ContactsForm } from './GeneralForms/ContactsForm';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Contacts from '../../../ProfileHelpers/ProfileData/Contacts';

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
  const [editContact, setEditContact] = useState(false);

  const isLooking = lookingForAJob ? 'Yes' : 'No';

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
      {editLookingJob ? (
        <LookingForAJobForm profile={profile} setEditMode={setEditLookingJob} />
      ) : (
        <ListItemButton
          id={2}
          onClick={() => setEditLookingJob(true)}
          style={{ height: '40px' }}
        >
          <h4 style={{ width: '200px', textAlign: 'left' }}>
            Looking for a job
          </h4>
          <ListItemText primary={isLooking} />
        </ListItemButton>
      )}
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
      {editContact ? (
        <>
          <div style={{ padding: '8px 16px' }}>
            <h4 style={{ width: '200px', textAlign: 'left' }}>Contacts</h4>
          </div>
          <ContactsForm profile={profile} setEditMode={setEditContact} />
        </>
      ) : (
        <ListItemButton
          id={4}
          onClick={() => setEditContact(true)}
          style={{ height: '40px' }}
        >
          <h4 style={{ width: '200px', textAlign: 'left' }}>Contacts</h4>
          {Object.keys(contacts).map((key, index) => (
            <Contacts
              key={index}
              contactTitle={key}
              contactValue={contacts[key]}
            />
          ))}
        </ListItemButton>
      )}
    </>
  );
};

export default GeneralData;
