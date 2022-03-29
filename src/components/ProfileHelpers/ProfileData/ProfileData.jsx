import { useSelector } from 'react-redux';
import { useStyles } from './profileDataStyle';
import Contacts from './Contacts';
import LookingForAJob from './LookingForAJob';

const ProfileData = () => {
  const css = useStyles();
  const { profile } = useSelector((state) => state.profile);

  return (
    <>
      <div className={css.profileItem}>
        <h3 className={css.textItem}>About me:</h3>
        <span className={css.textDescription}>{profile.aboutMe}</span>
      </div>
      <div className={css.profileItem}>
        <h3 className={css.textItem}>Contacts:</h3>
        <span className={css.textDescription}>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contacts
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </span>
      </div>
      <div className={css.profileItem}>
        <h3 className={css.textItem}>I am looking for a job:</h3>
        <span className={css.textDescription}>
          <LookingForAJob profile={profile} />
        </span>
      </div>
      <div className={css.profileItem}>
        <h3 className={css.textItem}>Job description:</h3>
        <span className={css.textDescription}>
          {profile.lookingForAJobDescription}
        </span>
      </div>
    </>
  );
};

export default ProfileData;
