import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import Contacts from './Contacts';
import LookingForAJob from './LookingForAJob';

const ProfileData = ({ setEditMode, isOwner }) => {
  const { profile } = useSelector((state) => state.profile);

  return (
    <>
      {isOwner && (
        <Button onClick={() => setEditMode(true)} variant="contained">
          Edit profile
        </Button>
      )}
      <div>
        <h3>About me:</h3>
        {profile.aboutMe}
      </div>
      <div className="{css.contacts}">
        <h3>Contacts:</h3>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      <div>
        <h3>I am looking for a job:</h3>
        <LookingForAJob profile={profile} />
      </div>
      <div>
        <h3>Job description:</h3>
        {profile.lookingForAJobDescription}
      </div>
    </>
  );
};

export default ProfileData;
