import './profile.css';
import { Feed } from '../../components/Feed/Feed';
import { Navbar } from '../../components/Navbar/Navbar';
import { Rightbar } from '../../components/Rightbar/Rightbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="/assets/cover.jpeg"
                alt=""
                className="profileCoverImg"
              />
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
    </>
  );
};
