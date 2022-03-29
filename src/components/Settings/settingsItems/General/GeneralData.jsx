import { useState } from 'react';
import { ContactsForm } from './GeneralForms/ContactsForm';
import ListItemButtonCustomEdit from './ListItemButtonCustomEdit';
import GeneralItemForm from './GeneralForms/GeneralItemForm';

const GeneralData = ({ profile }) => {
  const {
    fullName,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
    userId,
  } = profile;

  const [editName, setEditName] = useState(false);
  const [editAboutMe, setEditAboutMe] = useState(false);
  const [editLookingJob, setEditLookingJob] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [editContact, setEditContact] = useState(false);

  const isLooking = lookingForAJob ? 'Yes' : 'No';

  const handleClickEdit = (id, editModeName) => () => {
    if (id === 21114) {
      editModeName(true);
    } else {
      editModeName(false);
    }
  };

  return (
    <>
      {editName ? (
        <GeneralItemForm
          name={'fullName'}
          text={'Name'}
          label={'Name'}
          profile={profile}
          setEditMode={setEditName}
        />
      ) : (
        <ListItemButtonCustomEdit
          id={0}
          userId={userId}
          setEditMode={setEditName}
          handleClickEdit={handleClickEdit}
          name={'Name'}
          primaryName={fullName}
        />
      )}
      {editAboutMe ? (
        <GeneralItemForm
          name={'aboutMe'}
          text={'About me'}
          label={'aboutMe'}
          profile={profile}
          setEditMode={setEditAboutMe}
        />
      ) : (
        <ListItemButtonCustomEdit
          id={1}
          userId={userId}
          setEditMode={setEditAboutMe}
          handleClickEdit={handleClickEdit}
          name={'About me'}
          primaryName={aboutMe}
        />
      )}
      {editLookingJob ? (
        <GeneralItemForm
          name={'lookingForAJob'}
          text={'Looking for a job'}
          label={'Yes'}
          profile={profile}
          setEditMode={setEditLookingJob}
        />
      ) : (
        <ListItemButtonCustomEdit
          id={2}
          userId={userId}
          setEditMode={setEditLookingJob}
          handleClickEdit={handleClickEdit}
          name={'Looking for a job'}
          primaryName={isLooking}
        />
      )}
      {editDescription ? (
        <GeneralItemForm
          name={'lookingForAJobDescription'}
          text={'Job description'}
          label={'jobDescription'}
          profile={profile}
          setEditMode={setEditDescription}
        />
      ) : (
        <ListItemButtonCustomEdit
          id={3}
          userId={userId}
          setEditMode={setEditDescription}
          handleClickEdit={handleClickEdit}
          name={'Job description'}
          primaryName={lookingForAJobDescription}
        />
      )}
      {editContact ? (
        <ContactsForm profile={profile} setEditMode={setEditContact} />
      ) : (
        <ListItemButtonCustomEdit
          id={4}
          userId={userId}
          setEditMode={setEditContact}
          handleClickEdit={handleClickEdit}
          name={'Contacts'}
          contacts={contacts}
        />
      )}
    </>
  );
};

export default GeneralData;
