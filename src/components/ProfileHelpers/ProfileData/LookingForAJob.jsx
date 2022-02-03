import lookingForAJobIcon from '../../../assets/icons/lookingForAJob.png';
import iHaveAJobIcon from '../../../assets/icons/iHaveAJob.png';

const LookingForAJob = ({ profile }) => {
  return profile.lookingForAJob ? (
    <img src={lookingForAJobIcon} alt="lookingForAJob" />
  ) : (
    <img src={iHaveAJobIcon} alt="iHaveAJob" />
  );
};

export default LookingForAJob;
