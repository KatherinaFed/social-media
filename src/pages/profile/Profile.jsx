import './profile.css';
import { Feed } from '../../components/Feed/Feed';
import { Header } from '../../components/Header/Header';
import { Rightbar } from '../../components/Rightbar/Rightbar';
import { Navbar } from '../../components/Navbar/Navbar';

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src="/assets/cover.jpeg" alt="" className="profileCoverImg" />
            <img
              src="/assets/person/user1.jpeg"
              alt=""
              className="profileUserImg"
            />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Katharina F.</h4>
            <p className="profileDesc">Hello my friends!</p>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile />
        </div>
      </div>
    </div>
  );
};
