import './rightbar.css';
import { ProfileRightbar } from './ProfileRightbar/ProfileRightbar';
import { HomeRightbar } from './HomeRightbar/HomeRightbar';

export const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};
