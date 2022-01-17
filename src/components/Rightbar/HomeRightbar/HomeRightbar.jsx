import './homeRightbar.css';
import { Users } from '../../../dummyData';
import { Online } from '../../Users/online/Online';

export const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img
          src="/assets/icons/gift.png"
          alt="birthdayImg"
          className="birthdayImg"
        />
        <span className="birthdayText">
          <b>Angelika Smith</b> and <b>other 2 friends</b> have a birthday!
        </span>
      </div>
      <img src="/assets/ad.jpeg" alt="ad" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
};
